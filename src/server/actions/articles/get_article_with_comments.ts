"use server"

import { desc, eq, sql } from "drizzle-orm"

import { ArticleWithComments, CommentWithAuthor } from "@types"

import { getCurrentPlayer } from "@server/auth/session"
import {
  db,
  articlesTable,
  commentsTable,
  commentVotesTable,
  players,
} from "@db"

export async function get_article_with_comments(
  path: string,
): Promise<ArticleWithComments | undefined> {
  try {
    const [article] = await db
      .select()
      .from(articlesTable)
      .where(eq(articlesTable.path, path))
      .limit(1)

    if (!article) return undefined

    const currentPlayer = await getCurrentPlayer()

    const upvotes = sql<number>`count(*) filter (where ${commentVotesTable.value} = 1)`.mapWith(
      Number,
    )
    const downvotes = sql<number>`count(*) filter (where ${commentVotesTable.value} = -1)`.mapWith(
      Number,
    )
    const myVote = sql<number>`coalesce(max(${commentVotesTable.value}) filter (where ${commentVotesTable.playerId} = ${currentPlayer?.id ?? -1}), 0)`.mapWith(
      Number,
    )

    const comments = await db
      .select({
        id: commentsTable.id,
        articleId: commentsTable.articleId,
        playerId: commentsTable.playerId,
        content: commentsTable.content,
        createdAt: commentsTable.createdAt,
        editedAt: commentsTable.editedAt,
        playerName: players.name,
        playerNick: players.nick,
        upvotes,
        downvotes,
        myVote,
      })
      .from(commentsTable)
      .innerJoin(
        players,
        eq(commentsTable.playerId, players.id),
      )
      .leftJoin(
        commentVotesTable,
        eq(commentVotesTable.commentId, commentsTable.id),
      )
      .where(eq(commentsTable.articleId, article.id))
      .groupBy(commentsTable.id, players.id)
      .orderBy(desc(commentsTable.createdAt))

    return {
      ...article,
      comments: comments as CommentWithAuthor[],
      currentPlayer,
    } as ArticleWithComments
  } catch (e) {
    console.error(e)
  }
}
