"use server"

import { eq } from "drizzle-orm"

import { db, leaguePlayersTable, players } from "@db"

export async function get_league_roster(leagueId: number) {
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
    .where(eq(leaguePlayersTable.leagueId, leagueId))
    .orderBy(players.name)
}
