"use server"

import { and, eq } from "drizzle-orm"

import { db, cartItemsTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type SetCartQuantityResult = {
  errorCode?: "not_signed_in"
}

export async function set_cart_quantity(
  productId: number,
  quantity: number,
): Promise<SetCartQuantityResult> {
  const player = await getCurrentPlayer()
  if (!player) return { errorCode: "not_signed_in" }

  if (quantity <= 0) {
    await db
      .delete(cartItemsTable)
      .where(
        and(
          eq(cartItemsTable.playerId, player.id),
          eq(cartItemsTable.productId, productId),
        ),
      )
    return {}
  }

  await db
    .insert(cartItemsTable)
    .values({ playerId: player.id, productId, quantity })
    .onConflictDoUpdate({
      target: [
        cartItemsTable.playerId,
        cartItemsTable.productId,
      ],
      set: { quantity },
    })

  return {}
}
