"use server"

import { revalidatePath } from "next/cache"

import { and, eq, or } from "drizzle-orm"

import { db, gamesTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type SetFeaturedGameState = {
  errorCode?: "not_authorized" | "invalid_fields"
}

export async function set_featured_game(
  _prevState: SetFeaturedGameState,
  formData: FormData,
): Promise<SetFeaturedGameState> {
  const player = await getCurrentPlayer()
  if (!player?.moderator) {
    return { errorCode: "not_authorized" }
  }

  const gameId = parseInt(
    String(formData.get("gameId") || ""),
    10,
  )
  const blackId = parseInt(
    String(formData.get("blackId") || ""),
    10,
  )
  const whiteId = parseInt(
    String(formData.get("whiteId") || ""),
    10,
  )
  if (!gameId || !blackId || !whiteId) {
    return { errorCode: "invalid_fields" }
  }

  // Only one game can represent this pairing on the league
  // table, so clear any previous pick between these two first.
  await db
    .update(gamesTable)
    .set({ leagueFeatured: false })
    .where(
      or(
        and(
          eq(gamesTable.blackId, blackId),
          eq(gamesTable.whiteId, whiteId),
        ),
        and(
          eq(gamesTable.blackId, whiteId),
          eq(gamesTable.whiteId, blackId),
        ),
      ),
    )

  await db
    .update(gamesTable)
    .set({ leagueFeatured: true })
    .where(eq(gamesTable.id, gameId))

  revalidatePath("/teacher/league")
  return {}
}
