"use server"

import { desc, eq } from "drizzle-orm"

import { CommentWithAuthor } from "@types"

import { db, commentsTable, players } from "@db"
import { getCurrentPlayer, Player } from "@server/auth/session"

export async function get_article_comments(
  articleId: number,
): Promise<{
  comments: CommentWithAuthor[]
  currentPlayer: Player | null
}> {
  const [comments, currentPlayer] = await Promise.all([
    db
      .select({
        id: commentsTable.id,
        articleId: commentsTable.articleId,
        playerId: commentsTable.playerId,
        content: commentsTable.content,
        createdAt: commentsTable.createdAt,
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

  return { comments, currentPlayer }
}
