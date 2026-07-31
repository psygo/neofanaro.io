"use server"

import { eq } from "drizzle-orm"

import { db, gamesTable, players } from "@db"

export async function get_game(gameId: number) {
  const [game] = await db
    .select()
    .from(gamesTable)
    .where(eq(gamesTable.id, gameId))
    .limit(1)
  if (!game) return null

  const [black] = await db
    .select()
    .from(players)
    .where(eq(players.id, game.blackId))
    .limit(1)
  const [white] = await db
    .select()
    .from(players)
    .where(eq(players.id, game.whiteId))
    .limit(1)

  return { ...game, black, white }
}
