"use server"

import { revalidatePath } from "next/cache"

import { eq, sql } from "drizzle-orm"

import { db, gamesTable, players } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type CreateGameState = {
  errorCode?: "not_authorized" | "invalid_fields"
}

function optionalInt(value: FormDataEntryValue | null) {
  const str = String(value ?? "").trim()
  return str ? parseInt(str, 10) : undefined
}

function optionalFloat(value: FormDataEntryValue | null) {
  const str = String(value ?? "").trim()
  return str ? parseFloat(str) : undefined
}

function optionalText(value: FormDataEntryValue | null) {
  const str = String(value ?? "").trim()
  return str || undefined
}

export async function create_game(
  _prevState: CreateGameState,
  formData: FormData,
): Promise<CreateGameState> {
  const player = await getCurrentPlayer()
  if (!player?.moderator) {
    return { errorCode: "not_authorized" }
  }

  const blackId = optionalInt(formData.get("blackId"))
  const whiteId = optionalInt(formData.get("whiteId"))
  const ratingBlack = optionalInt(formData.get("ratingBlack"))
  const ratingDiffBlack = optionalInt(
    formData.get("ratingDiffBlack"),
  )
  const ratingWhite = optionalInt(formData.get("ratingWhite"))
  const ratingDiffWhite = optionalInt(
    formData.get("ratingDiffWhite"),
  )
  const result = optionalText(formData.get("result"))
  const date = optionalText(formData.get("date"))

  if (
    !blackId ||
    !whiteId ||
    ratingBlack === undefined ||
    ratingDiffBlack === undefined ||
    ratingWhite === undefined ||
    ratingDiffWhite === undefined ||
    !result
  ) {
    return { errorCode: "invalid_fields" }
  }

  await db.insert(gamesTable).values({
    date,
    blackId,
    whiteId,
    ratingBlack,
    ratingDiffBlack,
    ratingWhite,
    ratingDiffWhite,
    handicapStones: optionalInt(
      formData.get("handicapStones"),
    ),
    handicapPoints: optionalFloat(
      formData.get("handicapPoints"),
    ),
    komi: optionalFloat(formData.get("komi")),
    result,
    ogsLink: optionalText(formData.get("ogsLink")),
    aiSenseiLink: optionalText(formData.get("aiSenseiLink")),
    youtubeLink: optionalText(formData.get("youtubeLink")),
    twitchLink: optionalText(formData.get("twitchLink")),
    reviewed: formData.get("reviewed") === "on",
  })

  await db
    .update(players)
    .set({ rating: sql`${players.rating} + ${ratingDiffBlack}` })
    .where(eq(players.id, blackId))
  await db
    .update(players)
    .set({ rating: sql`${players.rating} + ${ratingDiffWhite}` })
    .where(eq(players.id, whiteId))

  revalidatePath("/teacher/league")
  return {}
}
