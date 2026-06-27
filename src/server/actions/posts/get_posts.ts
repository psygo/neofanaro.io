"use server"

import { eq, getTableColumns } from "drizzle-orm"

import { Post } from "../../../types/post"

import { db } from "../../.."
import { postsTable } from "../../db/schema"

export async function get_post_views(path: string) {
  try {
    const viewsFromDb = await db
      .select({ ...getTableColumns(postsTable) })
      .from(postsTable)
      .where(eq(postsTable.path, path))

    return viewsFromDb[0].views
  } catch (e) {
    console.error(e)
  }
}

export async function get_posts() {
  try {
    const viewsFromDb = await db.select().from(postsTable)

    return viewsFromDb as Post[]
  } catch (e) {
    console.error(e)
  }
}
