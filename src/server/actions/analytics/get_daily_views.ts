"use server"

import { asc } from "drizzle-orm"

import { db, dailyViewsTable } from "@db"

export type DailyViewRow = {
  date: string
  views: number
}

// No day-limit window: history is backfilled from each article's
// publish date (see the one-off backfill run when this table was
// introduced), so real data can already span months on a brand new
// table. The row count stays small for a personal blog either way.
export async function get_daily_views(): Promise<
  DailyViewRow[]
> {
  return db
    .select({
      date: dailyViewsTable.date,
      views: dailyViewsTable.views,
    })
    .from(dailyViewsTable)
    .orderBy(asc(dailyViewsTable.date))
}
