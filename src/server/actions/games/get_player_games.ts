"use server"

import { desc, eq, or } from "drizzle-orm"
import { alias } from "drizzle-orm/pg-core"

import {
  db,
  divisionsTable,
  gamesTable,
  leaguesTable,
  players,
} from "@db"

export type PlayerGame = {
  id: number
  date: string
  result: string
  color: "B" | "W"
  opponentName: string
  opponentNick: string
  divisionTitle: string
  leagueTitleEn: string
  leagueTitlePt: string
  ogsLink: string | null
  aiSenseiLink: string | null
  youtubeLink: string | null
}

export async function get_player_games(
  playerId: number,
): Promise<PlayerGame[]> {
  const black = alias(players, "black")
  const white = alias(players, "white")

  const rows = await db
    .select({
      id: gamesTable.id,
      date: gamesTable.date,
      result: gamesTable.result,
      ogsLink: gamesTable.ogsLink,
      aiSenseiLink: gamesTable.aiSenseiLink,
      youtubeLink: gamesTable.youtubeLink,
      blackId: gamesTable.blackId,
      whiteId: gamesTable.whiteId,
      blackName: black.name,
      blackNick: black.nick,
      whiteName: white.name,
      whiteNick: white.nick,
      divisionTitle: divisionsTable.title,
      leagueTitleEn: leaguesTable.titleEn,
      leagueTitlePt: leaguesTable.titlePt,
    })
    .from(gamesTable)
    .innerJoin(black, eq(gamesTable.blackId, black.id))
    .innerJoin(white, eq(gamesTable.whiteId, white.id))
    .innerJoin(
      divisionsTable,
      eq(gamesTable.divisionId, divisionsTable.id),
    )
    .innerJoin(
      leaguesTable,
      eq(divisionsTable.leagueId, leaguesTable.id),
    )
    .where(
      or(
        eq(gamesTable.blackId, playerId),
        eq(gamesTable.whiteId, playerId),
      ),
    )
    .orderBy(desc(gamesTable.date))

  return rows.map((row) => {
    const isBlack = row.blackId === playerId
    return {
      id: row.id,
      date: row.date,
      result: row.result,
      ogsLink: row.ogsLink,
      aiSenseiLink: row.aiSenseiLink,
      youtubeLink: row.youtubeLink,
      color: isBlack ? "B" : "W",
      opponentName: isBlack ? row.whiteName : row.blackName,
      opponentNick: isBlack ? row.whiteNick : row.blackNick,
      divisionTitle: row.divisionTitle,
      leagueTitleEn: row.leagueTitleEn,
      leagueTitlePt: row.leagueTitlePt,
    }
  })
}
