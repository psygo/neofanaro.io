"use server"

import { revalidatePath } from "next/cache"

import { eq, sql } from "drizzle-orm"

import { db, articlesTable } from "@db"

export async function add_article_view(path: string) {
  try {
    await db
      .update(articlesTable)
      .set({ views: sql`${articlesTable.views} + 1` })
      .where(eq(articlesTable.path, path))
    revalidatePath("/articles")
  } catch (e) {
    console.error(e)
  }
}
