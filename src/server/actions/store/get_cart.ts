"use server"

import { eq } from "drizzle-orm"

import { CartItemWithProduct } from "@types"

import { db, cartItemsTable, productsTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export async function get_cart(): Promise<
  CartItemWithProduct[]
> {
  const player = await getCurrentPlayer()
  if (!player) return []

  const rows = await db
    .select({
      productId: cartItemsTable.productId,
      quantity: cartItemsTable.quantity,
      product: productsTable,
    })
    .from(cartItemsTable)
    .innerJoin(
      productsTable,
      eq(cartItemsTable.productId, productsTable.id),
    )
    .where(eq(cartItemsTable.playerId, player.id))

  return rows as CartItemWithProduct[]
}
