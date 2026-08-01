"use server"

import { revalidatePath } from "next/cache"

import { and, eq } from "drizzle-orm"

import { db, leaguePlayersTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type AddLeaguePlayerState = {
  errorCode?:
    | "not_authorized"
    | "player_not_found"
    | "already_in_division"
}

export async function add_league_player(
  _prevState: AddLeaguePlayerState,
  formData: FormData,
): Promise<AddLeaguePlayerState> {
  const player = await getCurrentPlayer()
  if (!player?.moderator) {
    return { errorCode: "not_authorized" }
  }

  const divisionId = parseInt(
    String(formData.get("divisionId") || ""),
    10,
  )
  const playerId = parseInt(
    String(formData.get("playerId") || ""),
    10,
  )
  if (!divisionId || !playerId) {
    return { errorCode: "player_not_found" }
  }

  const [existing] = await db
    .select()
    .from(leaguePlayersTable)
    .where(
      and(
        eq(leaguePlayersTable.divisionId, divisionId),
        eq(leaguePlayersTable.playerId, playerId),
      ),
    )
    .limit(1)

  if (existing) {
    return { errorCode: "already_in_division" }
  }

  await db.insert(leaguePlayersTable).values({
    divisionId,
    playerId,
  })

  revalidatePath("/teacher/league")
  return {}
}
