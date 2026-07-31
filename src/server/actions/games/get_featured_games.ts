"use server"

import { eq } from "drizzle-orm"

import { db, gamesTable } from "@db"

export type FeaturedGame = {
  id: number
  blackId: number
  whiteId: number
  result: string
}

export async function get_featured_games() {
  return db
    .select({
      id: gamesTable.id,
      blackId: gamesTable.blackId,
      whiteId: gamesTable.whiteId,
      result: gamesTable.result,
    })
    .from(gamesTable)
    .where(eq(gamesTable.leagueFeatured, true))
}
