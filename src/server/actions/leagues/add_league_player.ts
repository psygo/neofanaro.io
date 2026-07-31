"use server"

import { revalidatePath } from "next/cache"

import { and, eq } from "drizzle-orm"

import { db, leaguePlayersTable, players } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type AddLeaguePlayerState = {
  errorCode?:
    | "not_authorized"
    | "player_not_found"
    | "already_in_league"
}

export async function add_league_player(
  _prevState: AddLeaguePlayerState,
  formData: FormData,
): Promise<AddLeaguePlayerState> {
  const player = await getCurrentPlayer()
  if (!player?.moderator) {
    return { errorCode: "not_authorized" }
  }

  const leagueId = parseInt(
    String(formData.get("leagueId") || ""),
    10,
  )
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase()
  if (!leagueId || !email) {
    return { errorCode: "player_not_found" }
  }

  const [targetPlayer] = await db
    .select()
    .from(players)
    .where(eq(players.email, email))
    .limit(1)

  if (!targetPlayer) {
    return { errorCode: "player_not_found" }
  }

  const [existing] = await db
    .select()
    .from(leaguePlayersTable)
    .where(
      and(
        eq(leaguePlayersTable.leagueId, leagueId),
        eq(leaguePlayersTable.playerId, targetPlayer.id),
      ),
    )
    .limit(1)

  if (existing) {
    return { errorCode: "already_in_league" }
  }

  await db.insert(leaguePlayersTable).values({
    leagueId,
    playerId: targetPlayer.id,
  })

  revalidatePath("/teacher/league")
  return {}
}
