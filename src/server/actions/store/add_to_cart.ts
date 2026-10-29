"use server"

import { sql } from "drizzle-orm"

import { db, cartItemsTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type AddToCartResult = {
  errorCode?: "not_signed_in"
}

export async function add_to_cart(
  productId: number,
): Promise<AddToCartResult> {
  const player = await getCurrentPlayer()
  if (!player) return { errorCode: "not_signed_in" }

  await db
    .insert(cartItemsTable)
    .values({ playerId: player.id, productId, quantity: 1 })
    .onConflictDoUpdate({
      target: [
        cartItemsTable.playerId,
        cartItemsTable.productId,
      ],
      set: {
        quantity: sql`${cartItemsTable.quantity} + 1`,
      },
    })

  return {}
}
