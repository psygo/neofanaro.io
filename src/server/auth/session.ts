import crypto from "node:crypto"

import { cookies } from "next/headers"
import { cache } from "react"

import { and, eq, gt } from "drizzle-orm"

import { db, players, sessionsTable } from "@db"

export type Player = typeof players.$inferSelect

const SESSION_COOKIE = "session_token"
const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

export async function createSession(playerId: number) {
  const token = crypto.randomBytes(32).toString("base64url")
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS)

  await db.insert(sessionsTable).values({
    token,
    playerId,
    expiresAt,
  })

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
  })
}

export const getCurrentPlayer = cache(
  async (): Promise<Player | null> => {
    const cookieStore = await cookies()
    const token = cookieStore.get(SESSION_COOKIE)?.value
    if (!token) return null

    const [session] = await db
      .select()
      .from(sessionsTable)
      .where(
        and(
          eq(sessionsTable.token, token),
          gt(sessionsTable.expiresAt, new Date()),
        ),
      )
      .limit(1)
    if (!session) return null

    const [player] = await db
      .select()
      .from(players)
      .where(eq(players.id, session.playerId))
      .limit(1)

    return player ?? null
  },
)

export async function destroySession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value

  if (token) {
    await db
      .delete(sessionsTable)
      .where(eq(sessionsTable.token, token))
  }

  cookieStore.set(SESSION_COOKIE, "", { maxAge: 0 })
}
