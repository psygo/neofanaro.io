"use client"

import { useLang } from "@hooks"

import {
  LeagueTable,
  type LeaguePlayerRow,
} from "./leagueTable"

const leaguePlayers: LeaguePlayerRow[] = [
  { name: "Philippe", nick: "psygo", code: "Ph" },
  { name: "Dejan", nick: "mal", code: "De" },
  { name: "Diogo", nick: "Diogo Barbosa", code: "Di" },
  { name: "Ariel", nick: "GOiano", code: "Ar" },
  { name: "Gilberto", nick: "Gil", code: "Gi" },
]

export function LeagueSection() {
  const lang = useLang()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-2xl font-bold">
        {lang === "pt" ? "Liga" : "League"}
      </h1>
      <LeagueTable players={leaguePlayers} />
    </div>
  )
}
