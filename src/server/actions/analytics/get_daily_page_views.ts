"use server"

import { asc } from "drizzle-orm"

import { db, dailyNonArticleViewsTable } from "@db"

export type DailyPageViewRow = {
  date: string
  views: number
}

// Same no-day-limit convention as get_daily_views: this table is
// small for a personal blog, so the whole history is returned.
export async function get_daily_page_views(): Promise<
  DailyPageViewRow[]
> {
  return db
    .select({
      date: dailyNonArticleViewsTable.date,
      views: dailyNonArticleViewsTable.views,
    })
    .from(dailyNonArticleViewsTable)
    .orderBy(asc(dailyNonArticleViewsTable.date))
}
