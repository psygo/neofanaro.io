"use server"

import { sql } from "drizzle-orm"

import {
  db,
  dailyNonArticleViewsTable,
  dailySiteViewsTable,
} from "@db"

function todayDate() {
  return new Date().toLocaleDateString("en-CA")
}

export async function add_page_view(path: string) {
  try {
    await db
      .insert(dailySiteViewsTable)
      .values({ date: todayDate(), views: 1 })
      .onConflictDoUpdate({
        target: dailySiteViewsTable.date,
        set: {
          views: sql`${dailySiteViewsTable.views} + 1`,
        },
      })

    if (!path.startsWith("/articles/")) {
      await db
        .insert(dailyNonArticleViewsTable)
        .values({ date: todayDate(), views: 1 })
        .onConflictDoUpdate({
          target: dailyNonArticleViewsTable.date,
          set: {
            views: sql`${dailyNonArticleViewsTable.views} + 1`,
          },
        })
    }
  } catch (e) {
    console.error(e)
  }
}
