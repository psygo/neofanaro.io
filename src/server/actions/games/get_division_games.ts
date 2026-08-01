"use server"

import { desc, eq } from "drizzle-orm"

import { db, gamesTable } from "@db"

export type DivisionGame = {
  id: number
  blackId: number
  whiteId: number
  result: string
}

export async function get_division_games(divisionId: number) {
  return db
    .select({
      id: gamesTable.id,
      blackId: gamesTable.blackId,
      whiteId: gamesTable.whiteId,
      result: gamesTable.result,
    })
    .from(gamesTable)
    .where(eq(gamesTable.divisionId, divisionId))
    .orderBy(desc(gamesTable.date))
}
