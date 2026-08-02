"use server"

import { and, eq } from "drizzle-orm"

import { VoteActionResult, VoteValue } from "@types"

import { db, articleVotesTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"
import { getArticleVoteSummary } from "@server/utils/voteSummary"

export async function vote_article(
  articleId: number,
  value: VoteValue,
): Promise<VoteActionResult> {
  const player = await getCurrentPlayer()
  if (!player) return { errorCode: "not_signed_in" }

  const [existing] = await db
    .select()
    .from(articleVotesTable)
    .where(
      and(
        eq(articleVotesTable.articleId, articleId),
        eq(articleVotesTable.playerId, player.id),
      ),
    )
    .limit(1)

  if (existing && existing.value === value) {
    await db
      .delete(articleVotesTable)
      .where(eq(articleVotesTable.id, existing.id))
  } else if (existing) {
    await db
      .update(articleVotesTable)
      .set({ value })
      .where(eq(articleVotesTable.id, existing.id))
  } else {
    await db
      .insert(articleVotesTable)
      .values({ articleId, playerId: player.id, value })
  }

  return getArticleVoteSummary(articleId, player.id)
}
