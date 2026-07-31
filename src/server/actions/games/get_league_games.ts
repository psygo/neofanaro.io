"use server"

import { desc, eq } from "drizzle-orm"

import { db, gamesTable } from "@db"

export type LeagueGame = {
  id: number
  blackId: number
  whiteId: number
  result: string
}

export async function get_league_games(leagueId: number) {
  return db
    .select({
      id: gamesTable.id,
      blackId: gamesTable.blackId,
      whiteId: gamesTable.whiteId,
      result: gamesTable.result,
    })
    .from(gamesTable)
    .where(eq(gamesTable.leagueId, leagueId))
    .orderBy(desc(gamesTable.date))
}
