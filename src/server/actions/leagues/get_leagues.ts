"use server"

import { db, leaguesTable } from "@db"

export async function get_leagues() {
  return db.select().from(leaguesTable).orderBy(leaguesTable.id)
}
