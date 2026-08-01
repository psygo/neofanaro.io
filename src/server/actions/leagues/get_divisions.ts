"use server"

import { eq } from "drizzle-orm"

import { db, divisionsTable } from "@db"

export async function get_divisions(leagueId: number) {
  return db
    .select()
    .from(divisionsTable)
    .where(eq(divisionsTable.leagueId, leagueId))
    .orderBy(divisionsTable.id)
}
