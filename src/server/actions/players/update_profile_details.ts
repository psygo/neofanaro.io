"use server"

import { revalidatePath } from "next/cache"

import { eq } from "drizzle-orm"

import { db, players } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type UpdateProfileDetailsState = {
  errorCode?: "not_signed_in"
}

export async function update_profile_details(
  _prevState: UpdateProfileDetailsState,
  formData: FormData,
): Promise<UpdateProfileDetailsState> {
  const player = await getCurrentPlayer()
  if (!player) {
    return { errorCode: "not_signed_in" }
  }

  const country = String(formData.get("country") || "").trim()
  const nick = String(formData.get("nick") || "").trim()
  const ogsLink = String(formData.get("ogsLink") || "").trim()

  await db
    .update(players)
    .set({
      country: country || null,
      nick,
      ogsLink: ogsLink || null,
    })
    .where(eq(players.id, player.id))

  revalidatePath("/profile")
  return {}
}
