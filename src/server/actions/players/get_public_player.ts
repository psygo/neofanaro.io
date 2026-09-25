"use server"

import { eq } from "drizzle-orm"

import { db, players } from "@db"

export type PublicPlayer = {
  id: number
  name: string
  nick: string
  rating: number
  country: string | null
  description: string | null
  ogsLink: string | null
}

export async function get_public_player(
  playerId: number,
): Promise<PublicPlayer | null> {
  const [player] = await db
    .select({
      id: players.id,
      name: players.name,
      nick: players.nick,
      rating: players.rating,
      country: players.country,
      description: players.description,
      ogsLink: players.ogsLink,
    })
    .from(players)
    .where(eq(players.id, playerId))

  return player ?? null
}
