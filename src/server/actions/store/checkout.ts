"use server"

import { headers } from "next/headers"

import { eq } from "drizzle-orm"

import {
  db,
  cartItemsTable,
  ordersTable,
  orderItemsTable,
  productsTable,
} from "@db"
import { getCurrentPlayer } from "@server/auth/session"
import { stripe } from "@server/payments/stripe"

export type CheckoutResult = {
  errorCode?: "not_signed_in" | "empty_cart"
  checkoutUrl?: string
}

export async function checkout(): Promise<CheckoutResult> {
  const player = await getCurrentPlayer()
  if (!player) return { errorCode: "not_signed_in" }

  const items = await db
    .select({
      productId: cartItemsTable.productId,
      quantity: cartItemsTable.quantity,
      priceCents: productsTable.priceCents,
      titleEn: productsTable.titleEn,
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

  const origin =
    (await headers()).get("origin") ??
    "http://localhost:3000"

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: player.email ?? undefined,
    line_items: items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.priceCents,
        product_data: { name: item.titleEn },
      },
    })),
    metadata: { orderId: String(order.id) },
    success_url: `${origin}/store/success?order=${orderNumber}`,
    cancel_url: `${origin}/store`,
  })

  await db
    .update(ordersTable)
    .set({ stripeCheckoutSessionId: session.id })
    .where(eq(ordersTable.id, order.id))

  // Cleared now rather than on webhook confirmation: Stripe Checkout
  // already snapshotted these items into order_items above, and
  // leaving them in the cart would let the player re-checkout the
  // same items into a second order while the first session is open.
  await db
    .delete(cartItemsTable)
    .where(eq(cartItemsTable.playerId, player.id))

  return { checkoutUrl: session.url ?? undefined }
}
