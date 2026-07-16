"use server"

import { revalidatePath } from "next/cache"

import { eq, sql } from "drizzle-orm"

import { db, postsTable } from "@db"

export async function post_view(path: string) {
  try {
    await db
      .update(postsTable)
      .set({ views: sql`${postsTable.views} + 1` })
      .where(eq(postsTable.path, path))
    revalidatePath("/posts")
  } catch (e) {
    console.error(e)
  }
}
