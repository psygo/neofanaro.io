"use server"

import { db, players } from "@db"

export async function get_players() {
  return db
    .select({
      id: players.id,
      name: players.name,
      nick: players.nick,
      email: players.email,
      rating: players.rating,
    })
    .from(players)
    .orderBy(players.name)
}
