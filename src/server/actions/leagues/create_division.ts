"use server"

import { revalidatePath } from "next/cache"

import { db, divisionsTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type CreateDivisionState = {
  errorCode?: "not_authorized" | "invalid_fields"
}

export async function create_division(
  _prevState: CreateDivisionState,
  formData: FormData,
): Promise<CreateDivisionState> {
  const player = await getCurrentPlayer()
  if (!player?.moderator) {
    return { errorCode: "not_authorized" }
  }

  const leagueId = parseInt(
    String(formData.get("leagueId") || ""),
    10,
  )
  const title = String(formData.get("title") || "").trim()
  if (!leagueId || !title) {
    return { errorCode: "invalid_fields" }
  }

  await db.insert(divisionsTable).values({ leagueId, title })

  revalidatePath("/teacher/league")
  return {}
}
