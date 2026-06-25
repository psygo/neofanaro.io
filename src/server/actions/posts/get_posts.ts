"use server"

import { eq } from "drizzle-orm"

import { db } from "../../.."
import { postsTable } from "../../db/schema"

export async function get_views(path: string) {
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
