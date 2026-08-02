"use server"

import { and, eq } from "drizzle-orm"

import { VoteActionResult, VoteValue } from "@types"

import { db, commentVotesTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"
import { getCommentVoteSummary } from "@server/utils/voteSummary"

export async function vote_comment(
  commentId: number,
  value: VoteValue,
): Promise<VoteActionResult> {
  const player = await getCurrentPlayer()
  if (!player) return { errorCode: "not_signed_in" }

  const [existing] = await db
    .select()
    .from(commentVotesTable)
    .where(
      and(
        eq(commentVotesTable.commentId, commentId),
        eq(commentVotesTable.playerId, player.id),
      ),
    )
    .limit(1)

  if (existing && existing.value === value) {
    await db
      .delete(commentVotesTable)
      .where(eq(commentVotesTable.id, existing.id))
  } else if (existing) {
    await db
      .update(commentVotesTable)
      .set({ value })
      .where(eq(commentVotesTable.id, existing.id))
  } else {
    await db
      .insert(commentVotesTable)
      .values({ commentId, playerId: player.id, value })
  }

  return getCommentVoteSummary(commentId, player.id)
}
