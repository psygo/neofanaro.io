"use server"

import { and, asc, desc, eq, sql } from "drizzle-orm"

import {
  ArticleFromDb,
  ArticleWithVotes,
  OrderBy,
  SortDirection,
} from "@types"

import { getCurrentPlayer } from "@server/auth/session"
import { db, articlesTable, articleVotesTable } from "@db"

export async function get_article(path: string) {
  try {
    const article = await db
      .select()
      .from(articlesTable)
      .where(eq(articlesTable.path, path))
      .limit(1)

    return article.first() as ArticleFromDb
  } catch (e) {
    console.error(e)
  }
}

export async function get_articles(
  orderBy: OrderBy = OrderBy.date,
  includeDrafts = false,
  tags?: string[],
  direction: SortDirection = "desc",
): Promise<ArticleWithVotes[] | undefined> {
  try {
    const draftCondition = includeDrafts
      ? undefined
      : eq(articlesTable.draft, false)

    const tagCondition =
      tags && tags.length > 0
        ? sql`${articlesTable.tags}::jsonb @> ${JSON.stringify(tags)}::jsonb`
        : undefined

    const condition =
      draftCondition && tagCondition
        ? and(draftCondition, tagCondition)
        : (draftCondition ?? tagCondition)

    const player = await getCurrentPlayer()

    const sortColumn =
      orderBy === OrderBy.date
        ? articlesTable.date
        : articlesTable.views

    const upvotes =
      sql<number>`count(*) filter (where ${articleVotesTable.value} = 1)`.mapWith(
        Number,
      )
    const downvotes =
      sql<number>`count(*) filter (where ${articleVotesTable.value} = -1)`.mapWith(
        Number,
      )
    const myVote =
      sql<number>`coalesce(max(${articleVotesTable.value}) filter (where ${articleVotesTable.playerId} = ${player?.id ?? -1}), 0)`.mapWith(
        Number,
      )

    const articles = await db
      .select({
        id: articlesTable.id,
        path: articlesTable.path,
        date: articlesTable.date,
        langs: articlesTable.langs,
        titleEn: articlesTable.titleEn,
        titlePt: articlesTable.titlePt,
        descriptionEn: articlesTable.descriptionEn,
        descriptionPt: articlesTable.descriptionPt,
        views: articlesTable.views,
        tags: articlesTable.tags,
        draft: articlesTable.draft,
        upvotes,
        downvotes,
        myVote,
      })
      .from(articlesTable)
      .leftJoin(
        articleVotesTable,
        eq(articleVotesTable.articleId, articlesTable.id),
      )
      .where(condition)
      .groupBy(articlesTable.id)
      .orderBy(
        direction === "asc"
          ? asc(sortColumn)
          : desc(sortColumn),
      )

    return articles as ArticleWithVotes[]
  } catch (e) {
    console.error(e)
  }
}
