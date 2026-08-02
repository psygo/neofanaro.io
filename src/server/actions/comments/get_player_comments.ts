"use server"

import { desc, eq } from "drizzle-orm"

import { CommentWithArticle } from "@types"

import { db, articlesTable, commentsTable } from "@db"

export async function get_player_comments(
  playerId: number,
): Promise<CommentWithArticle[]> {
  return db
    .select({
      id: commentsTable.id,
      articleId: commentsTable.articleId,
      playerId: commentsTable.playerId,
      content: commentsTable.content,
      createdAt: commentsTable.createdAt,
      articlePath: articlesTable.path,
      articleTitleEn: articlesTable.titleEn,
      articleTitlePt: articlesTable.titlePt,
    })
    .from(commentsTable)
    .innerJoin(
      articlesTable,
      eq(commentsTable.articleId, articlesTable.id),
    )
    .where(eq(commentsTable.playerId, playerId))
    .orderBy(desc(commentsTable.createdAt))
}
