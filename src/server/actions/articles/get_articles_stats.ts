"use server"

import { eq, sql } from "drizzle-orm"

import {
  db,
  articlesTable,
  dailyNonArticleViewsTable,
} from "@db"

export type ArticlesStats = {
  totalArticleViews: number
  totalNonArticleViews: number
  articleCount: number
}

export async function get_articles_stats(): Promise<ArticlesStats> {
  const [[articleRow], [nonArticleRow]] = await Promise.all(
    [
      db
        .select({
          totalArticleViews:
            sql<number>`coalesce(sum(${articlesTable.views}), 0)`.mapWith(
              Number,
            ),
          articleCount: sql<number>`count(*)`.mapWith(
            Number,
          ),
        })
        .from(articlesTable)
        .where(eq(articlesTable.draft, false)),
      db
        .select({
          totalNonArticleViews:
            sql<number>`coalesce(sum(${dailyNonArticleViewsTable.views}), 0)`.mapWith(
              Number,
            ),
        })
        .from(dailyNonArticleViewsTable),
    ],
  )

  return {
    totalArticleViews: articleRow.totalArticleViews,
    totalNonArticleViews:
      nonArticleRow.totalNonArticleViews,
    articleCount: articleRow.articleCount,
  }
}
