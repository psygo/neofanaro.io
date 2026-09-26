"use server"

import { revalidatePath } from "next/cache"

import { eq, sql } from "drizzle-orm"

import { db, articlesTable, dailyViewsTable } from "@db"

function todayDate() {
  return new Date().toLocaleDateString("en-CA")
}

export async function add_article_view(path: string) {
  try {
    await db
      .update(articlesTable)
      .set({ views: sql`${articlesTable.views} + 1` })
      .where(eq(articlesTable.path, path))
    await db
      .insert(dailyViewsTable)
      .values({ date: todayDate(), views: 1 })
      .onConflictDoUpdate({
        target: dailyViewsTable.date,
        set: { views: sql`${dailyViewsTable.views} + 1` },
      })
    revalidatePath("/articles")
  } catch (e) {
    console.error(e)
  }
}
