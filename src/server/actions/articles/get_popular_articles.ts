"use server"

import { and, desc, eq, sql, type SQL } from "drizzle-orm"

import { ArticleWithVotes } from "@types"

import { getCurrentPlayer } from "@server/auth/session"
import { db, articlesTable, articleVotesTable } from "@db"

const ARTICLES_PER_CATEGORY = 3

export type PopularArticlesByCategory = {
  baduk: ArticleWithVotes[]
  software: ArticleWithVotes[]
  other: ArticleWithVotes[]
}

async function get_most_viewed(
  categoryCondition: SQL,
  playerId: number,
) {
  const upvotes =
    sql<number>`count(*) filter (where ${articleVotesTable.value} = 1)`.mapWith(
      Number,
    )
  const downvotes =
    sql<number>`count(*) filter (where ${articleVotesTable.value} = -1)`.mapWith(
      Number,
    )
  const myVote =
    sql<number>`coalesce(max(${articleVotesTable.value}) filter (where ${articleVotesTable.playerId} = ${playerId}), 0)`.mapWith(
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
    .where(
      and(
        eq(articlesTable.draft, false),
        categoryCondition,
      ),
    )
    .groupBy(articlesTable.id)
    .orderBy(desc(articlesTable.views))
    .limit(ARTICLES_PER_CATEGORY)

  return articles as ArticleWithVotes[]
}

export async function get_popular_articles_by_category(): Promise<PopularArticlesByCategory> {
  const player = await getCurrentPlayer()
  const playerId = player?.id ?? -1

  const isBaduk = sql`${articlesTable.tags}::jsonb @> '["baduk"]'::jsonb`
  const isSoftware = sql`${articlesTable.tags}::jsonb @> '["software"]'::jsonb`
  const isOther = sql`not (${isBaduk}) and not (${isSoftware})`

  const [baduk, software, other] = await Promise.all([
    get_most_viewed(isBaduk, playerId),
    get_most_viewed(isSoftware, playerId),
    get_most_viewed(isOther, playerId),
  ])

  return { baduk, software, other }
}
