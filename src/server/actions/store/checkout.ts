"use server"

import { eq } from "drizzle-orm"

import {
  db,
  cartItemsTable,
  ordersTable,
  orderItemsTable,
  productsTable,
} from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type CheckoutResult = {
  errorCode?: "not_signed_in" | "empty_cart"
  orderNumber?: string
}

// Stands in for the real flow: redirecting to a Stripe Checkout
// Session (or confirming a Payment Intent), then waiting on its
// webhook to actually fulfill the order. See store.tsx's own doc
// for the rest of what real payments would need.
export async function checkout(): Promise<CheckoutResult> {
  const player = await getCurrentPlayer()
  if (!player) return { errorCode: "not_signed_in" }

  const items = await db
    .select({
      productId: cartItemsTable.productId,
      quantity: cartItemsTable.quantity,
      priceCents: productsTable.priceCents,
    })
    .from(cartItemsTable)
    .innerJoin(
      productsTable,
      eq(cartItemsTable.productId, productsTable.id),
    )
    .where(eq(cartItemsTable.playerId, player.id))

  if (items.length === 0) return { errorCode: "empty_cart" }

  const totalCents = items.reduce(
    (sum, item) => sum + item.quantity * item.priceCents,
    0,
  )
  const orderNumber = Math.random()
    .toString(36)
    .slice(2, 10)
    .toUpperCase()

  const [order] = await db
    .insert(ordersTable)
    .values({
      playerId: player.id,
      orderNumber,
      totalCents,
    })
    .returning()

  await db.insert(orderItemsTable).values(
    items.map((item) => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      unitPriceCents: item.priceCents,
    })),
  )

  await db
    .delete(cartItemsTable)
    .where(eq(cartItemsTable.playerId, player.id))

  return { orderNumber }
}
