"use server"

import { desc, eq } from "drizzle-orm"

import { CommentWithAuthor } from "@types"

import { db, commentsTable, players } from "@db"
import { getCurrentPlayer, Player } from "@server/auth/session"
import { getCommentVoteSummaries } from "@server/utils/voteSummary"

export async function get_article_comments(
  articleId: number,
): Promise<{
  comments: CommentWithAuthor[]
  currentPlayer: Player | null
}> {
  const [rows, currentPlayer] = await Promise.all([
    db
      .select({
        id: commentsTable.id,
        articleId: commentsTable.articleId,
        playerId: commentsTable.playerId,
        content: commentsTable.content,
        createdAt: commentsTable.createdAt,
        editedAt: commentsTable.editedAt,
        playerName: players.name,
        playerNick: players.nick,
      })
      .from(commentsTable)
      .innerJoin(
        players,
        eq(commentsTable.playerId, players.id),
      )
      .where(eq(commentsTable.articleId, articleId))
      .orderBy(desc(commentsTable.createdAt)),
    getCurrentPlayer(),
  ])

  const voteSummaries = await getCommentVoteSummaries(
    rows.map((row) => row.id),
    currentPlayer?.id,
  )

  const comments = rows.map((row) => ({
    ...row,
    ...(voteSummaries.get(row.id) ?? {
      upvotes: 0,
      downvotes: 0,
      myVote: 0 as const,
    }),
  }))

  return { comments, currentPlayer }
}
