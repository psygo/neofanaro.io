"use server"

import { desc, eq } from "drizzle-orm"

import { db, leaguePlayersTable, players } from "@db"

export async function get_division_roster(divisionId: number) {
  return db
    .select({
      id: players.id,
      name: players.name,
      nick: players.nick,
      email: players.email,
      rating: players.rating,
    })
    .from(leaguePlayersTable)
    .innerJoin(
      players,
      eq(leaguePlayersTable.playerId, players.id),
    )
    .where(eq(leaguePlayersTable.divisionId, divisionId))
    .orderBy(desc(players.rating))
}
