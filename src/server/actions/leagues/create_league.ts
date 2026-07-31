"use server"

import { revalidatePath } from "next/cache"

import { db, leaguesTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type CreateLeagueState = {
  errorCode?: "not_authorized" | "invalid_fields"
}

export async function create_league(
  _prevState: CreateLeagueState,
  formData: FormData,
): Promise<CreateLeagueState> {
  const player = await getCurrentPlayer()
  if (!player?.moderator) {
    return { errorCode: "not_authorized" }
  }

  const title = String(formData.get("title") || "").trim()
  if (!title) {
    return { errorCode: "invalid_fields" }
  }

  const startDate = String(
    formData.get("startDate") || "",
  ).trim()

  await db.insert(leaguesTable).values({
    title,
    startDate: startDate || undefined,
  })

  revalidatePath("/teacher/league")
  return {}
}
