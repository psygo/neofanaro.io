"use server"

import { eq } from "drizzle-orm"

import { ThemePreference } from "@types"

import { db, players } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type UpdateThemeState = {
  errorCode?: "not_signed_in"
}

export async function update_theme(
  theme: ThemePreference,
): Promise<UpdateThemeState> {
  const player = await getCurrentPlayer()
  if (!player) {
    return { errorCode: "not_signed_in" }
  }

  await db
    .update(players)
    .set({ theme })
    .where(eq(players.id, player.id))

  return {}
}
