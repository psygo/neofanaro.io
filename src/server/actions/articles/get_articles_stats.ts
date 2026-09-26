"use server"

import { eq, sql } from "drizzle-orm"

import { db, articlesTable } from "@db"

export type ArticlesStats = {
  totalViews: number
  articleCount: number
}

export async function get_articles_stats(): Promise<ArticlesStats> {
  const [row] = await db
    .select({
      totalViews:
        sql<number>`coalesce(sum(${articlesTable.views}), 0)`.mapWith(
          Number,
        ),
      articleCount: sql<number>`count(*)`.mapWith(Number),
    })
    .from(articlesTable)
    .where(eq(articlesTable.draft, false))

  return row
}
