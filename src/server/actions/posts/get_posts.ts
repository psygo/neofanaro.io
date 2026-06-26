"use server"

import { eq } from "drizzle-orm"

import { PostWithViews } from "../../../types/post"

import { db } from "../../.."
import { postsTable } from "../../db/schema"

export async function get_post_views(path: string) {
  try {
    const viewsFromDb = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.path, path))

    return viewsFromDb[0].views
  } catch (e) {
    console.error(e)
  }
}

export async function get_posts_views() {
  try {
    const viewsFromDb = await db.select().from(postsTable)

    return viewsFromDb as PostWithViews[]
  } catch (e) {
    console.error(e)
  }
}
