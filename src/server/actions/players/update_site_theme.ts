"use server"

import { eq } from "drizzle-orm"

import { SiteTheme } from "@types"

import { db, players } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type UpdateSiteThemeState = {
  errorCode?: "not_signed_in"
}

export async function update_site_theme(
  siteTheme: SiteTheme,
): Promise<UpdateSiteThemeState> {
  const player = await getCurrentPlayer()
  if (!player) {
    return { errorCode: "not_signed_in" }
  }

  await db
    .update(players)
    .set({ siteTheme })
    .where(eq(players.id, player.id))

  return {}
}
