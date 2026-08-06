import { eq } from "drizzle-orm"

import { VoteSummary } from "@types"

import {
  db,
  articleVotesTable,
  commentVotesTable,
} from "@db"

function summarizeVotes(
  rows: { playerId: number; value: number }[],
  currentPlayerId?: number,
): VoteSummary {
  const upvotes = rows.filter((r) => r.value === 1).length
  const downvotes = rows.filter(
    (r) => r.value === -1,
  ).length
  const myVote = (currentPlayerId
    ? (rows.find((r) => r.playerId === currentPlayerId)
        ?.value ?? 0)
    : 0) as VoteSummary["myVote"]

  return { upvotes, downvotes, myVote }
}

export async function getArticleVoteSummary(
  articleId: number,
  currentPlayerId?: number,
): Promise<VoteSummary> {
  const rows = await db
    .select({
      playerId: articleVotesTable.playerId,
      value: articleVotesTable.value,
    })
    .from(articleVotesTable)
    .where(eq(articleVotesTable.articleId, articleId))

  return summarizeVotes(rows, currentPlayerId)
}

export async function getCommentVoteSummary(
  commentId: number,
  currentPlayerId?: number,
): Promise<VoteSummary> {
  const rows = await db
    .select({
      playerId: commentVotesTable.playerId,
      value: commentVotesTable.value,
    })
    .from(commentVotesTable)
    .where(eq(commentVotesTable.commentId, commentId))

  return summarizeVotes(rows, currentPlayerId)
}
