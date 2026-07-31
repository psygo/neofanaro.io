"use server"

import { redirect } from "next/navigation"

import { eq } from "drizzle-orm"

import { db, players } from "@db"
import { createSession } from "@server/auth/session"
import { hashPassword } from "@server/auth/password"

import type { AuthFormState } from "./types"

export async function sign_up(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase()
  const nick = String(formData.get("nick") || "").trim()
  const name = String(formData.get("name") || "").trim()
  const password = String(formData.get("password") || "")

  if (!email || !nick || !password) {
    return {
      error: "Name, nickname, email, and password are required.",
    }
  }
  if (password.length < 8) {
    return {
      error: "Password must be at least 8 characters.",
    }
  }

  const [existing] = await db
    .select()
    .from(players)
    .where(eq(players.email, email))
    .limit(1)

  if (existing?.passwordHash) {
    return { error: "An account with this email already exists." }
  }

  const passwordHash = await hashPassword(password)
  let playerId: number

  if (existing) {
    const [updated] = await db
      .update(players)
      .set({ passwordHash, nick, name: name || existing.name })
      .where(eq(players.id, existing.id))
      .returning()
    playerId = updated.id
  } else {
    const [created] = await db
      .insert(players)
      .values({ email, nick, name: name || nick, passwordHash })
      .returning()
    playerId = created.id
  }

  await createSession(playerId)
  redirect("/profile")
}
