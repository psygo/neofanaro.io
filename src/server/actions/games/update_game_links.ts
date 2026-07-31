"use server"

import { revalidatePath } from "next/cache"

import { eq } from "drizzle-orm"

import { db, gamesTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type UpdateGameLinksState = {
  errorCode?: "not_authorized" | "invalid_fields"
}

function optionalText(value: FormDataEntryValue | null) {
  const str = String(value ?? "").trim()
  return str || null
}

export async function update_game_links(
  _prevState: UpdateGameLinksState,
  formData: FormData,
): Promise<UpdateGameLinksState> {
  const player = await getCurrentPlayer()
  if (!player?.moderator) {
    return { errorCode: "not_authorized" }
  }

  const gameId = parseInt(
    String(formData.get("gameId") || ""),
    10,
  )
  if (!gameId) {
    return { errorCode: "invalid_fields" }
  }

  await db
    .update(gamesTable)
    .set({
      ogsLink: optionalText(formData.get("ogsLink")),
      aiSenseiLink: optionalText(
        formData.get("aiSenseiLink"),
      ),
      youtubeLink: optionalText(formData.get("youtubeLink")),
      twitchLink: optionalText(formData.get("twitchLink")),
    })
    .where(eq(gamesTable.id, gameId))

  revalidatePath("/teacher/league")
  return {}
}
