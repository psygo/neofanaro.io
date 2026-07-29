"use server"

import { and, desc, eq, sql } from "drizzle-orm"

import { OrderBy, PostFromDb } from "@types"

import { db, postsTable } from "@db"

export async function get_post(path: string) {
  try {
    const post = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.path, path))
      .limit(1)

    return post.first() as PostFromDb
  } catch (e) {
    console.error(e)
  }
}

export async function get_posts(
  orderBy: OrderBy = OrderBy.date,
  includeDrafts = false,
  tags?: string[],
) {
  try {
    const draftCondition = includeDrafts
      ? undefined
      : eq(postsTable.draft, false)

    const tagCondition =
      tags && tags.length > 0
        ? sql`${postsTable.tags}::jsonb @> ${JSON.stringify(tags)}::jsonb`
        : undefined

    const condition =
      draftCondition && tagCondition
        ? and(draftCondition, tagCondition)
        : (draftCondition ?? tagCondition)

    const posts = await db
      .select()
      .from(postsTable)
      .where(condition)
      .orderBy(
        orderBy === OrderBy.date
          ? desc(postsTable.date)
          : desc(postsTable.views),
      )

    return posts as PostFromDb[]
  } catch (e) {
    console.error(e)
  }
}
