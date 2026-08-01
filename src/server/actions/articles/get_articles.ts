"use server"

import { and, desc, eq, sql } from "drizzle-orm"

import { ArticleFromDb, OrderBy } from "@types"

import { db, articlesTable } from "@db"

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
) {
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

    const articles = await db
      .select()
      .from(articlesTable)
      .where(condition)
      .orderBy(
        orderBy === OrderBy.date
          ? desc(articlesTable.date)
          : desc(articlesTable.views),
      )

    return articles as ArticleFromDb[]
  } catch (e) {
    console.error(e)
  }
}
