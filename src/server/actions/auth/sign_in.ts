"use server"

import { redirect } from "next/navigation"

import { eq } from "drizzle-orm"

import { db, players } from "@db"
import { createSession } from "@server/auth/session"
import { verifyPassword } from "@server/auth/password"

import type { AuthFormState } from "./types"

export async function sign_in(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase()
  const password = String(formData.get("password") || "")

  if (!email || !password) {
    return { error: "Email and password are required." }
  }

  const [player] = await db
    .select()
    .from(players)
    .where(eq(players.email, email))
    .limit(1)

  if (!player?.passwordHash) {
    return { error: "Invalid email or password." }
  }

  const valid = await verifyPassword(
    password,
    player.passwordHash,
  )
  if (!valid) {
    return { error: "Invalid email or password." }
  }

  await createSession(player.id)
  redirect("/profile")
}
