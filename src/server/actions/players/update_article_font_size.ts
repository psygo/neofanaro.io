"use server"

import { revalidatePath } from "next/cache"

import { eq } from "drizzle-orm"

import { ArticleFontSize } from "@types"

import { db, players } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type UpdateArticleFontSizeState = {
  errorCode?: "not_signed_in"
}

export async function update_article_font_size(
  articleFontSize: ArticleFontSize,
): Promise<UpdateArticleFontSizeState> {
  const player = await getCurrentPlayer()
  if (!player) {
    return { errorCode: "not_signed_in" }
  }

  await db
    .update(players)
    .set({ articleFontSize })
    .where(eq(players.id, player.id))

  revalidatePath("/profile")
  revalidatePath("/articles/[article_id]", "page")

  return {}
}
