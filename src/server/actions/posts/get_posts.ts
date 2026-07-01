"use server"

import { desc, eq } from "drizzle-orm"

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
) {
  try {
    const posts = await db
      .select()
      .from(postsTable)
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
