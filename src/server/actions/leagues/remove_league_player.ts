"use server"

import { revalidatePath } from "next/cache"

import { and, eq } from "drizzle-orm"

import { db, leaguePlayersTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export async function remove_league_player(
  divisionId: number,
  playerId: number,
) {
  const player = await getCurrentPlayer()
  if (!player?.moderator) return

  await db
    .delete(leaguePlayersTable)
    .where(
      and(
        eq(leaguePlayersTable.divisionId, divisionId),
        eq(leaguePlayersTable.playerId, playerId),
      ),
    )

  revalidatePath("/teacher/league")
}
