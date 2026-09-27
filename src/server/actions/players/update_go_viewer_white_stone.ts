"use server"

import { revalidatePath } from "next/cache"

import { eq } from "drizzle-orm"

import { GoViewerStonePreference } from "@types"

import { db, players } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type UpdateGoViewerWhiteStoneState = {
  errorCode?: "not_signed_in"
}

export async function update_go_viewer_white_stone(
  goViewerWhiteStone: GoViewerStonePreference,
): Promise<UpdateGoViewerWhiteStoneState> {
  const player = await getCurrentPlayer()
  if (!player) {
    return { errorCode: "not_signed_in" }
  }

  await db
    .update(players)
    .set({ goViewerWhiteStone })
    .where(eq(players.id, player.id))

  revalidatePath("/profile")
  revalidatePath("/articles/[article_id]", "page")

  return {}
}
