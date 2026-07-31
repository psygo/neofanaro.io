"use server"

import { and, desc, eq, or } from "drizzle-orm"

import { db, gamesTable } from "@db"

export async function get_games_between(
  leagueId: number,
  playerAId: number,
  playerBId: number,
) {
  return db
    .select()
    .from(gamesTable)
    .where(
      and(
        eq(gamesTable.leagueId, leagueId),
        or(
          and(
            eq(gamesTable.blackId, playerAId),
            eq(gamesTable.whiteId, playerBId),
          ),
          and(
            eq(gamesTable.blackId, playerBId),
            eq(gamesTable.whiteId, playerAId),
          ),
        ),
      ),
    )
    .orderBy(desc(gamesTable.date))
}
