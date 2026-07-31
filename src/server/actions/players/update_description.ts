"use server"

import { revalidatePath } from "next/cache"

import { eq } from "drizzle-orm"

import { db, players } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type UpdateDescriptionState = {
  error?: string
}

export async function update_description(
  _prevState: UpdateDescriptionState,
  formData: FormData,
): Promise<UpdateDescriptionState> {
  const player = await getCurrentPlayer()
  if (!player) {
    return { error: "You need to sign in." }
  }

  const description = String(
    formData.get("description") || "",
  ).trim()

  await db
    .update(players)
    .set({ description: description || null })
    .where(eq(players.id, player.id))

  revalidatePath("/profile")
  return {}
}
