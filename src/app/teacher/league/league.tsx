"use client"

import { useRef, useState } from "react"

import { useLang } from "@hooks"

import {
  LeagueTable,
  type LeaguePlayerRow,
} from "./leagueTable"
import { AddGameForm } from "./addGameForm"

type RosterEntry = {
  name: string
  nick: string
  code: string
}

const LEAGUE_ROSTER: RosterEntry[] = [
  { name: "Philippe Fanaro", nick: "psygo", code: "Ph" },
  // { name: "Dejan Vekic", nick: "mal", code: "De" },
  {
    name: "Diogo Barbosa",
    nick: "Diogo Barbosa",
    code: "Di",
  },
  // { name: "Ariel Oliveira", nick: "GOiano", code: "Ar" },
  // { name: "Gilberto Espínola", nick: "Gil", code: "Gi" },
]

type DbPlayer = {
  id: number
  name: string
  nick: string
  rating: number
}

type LeagueSectionProps = {
  isModerator: boolean
  players: DbPlayer[]
}

function buildLeagueRows(
  roster: RosterEntry[],
  dbPlayers: DbPlayer[],
): LeaguePlayerRow[] {
  return roster.map((entry) => {
    const match = dbPlayers.find(
      (p) => p.nick === entry.nick,
    )
    return {
      code: entry.code,
      name: match?.name ?? entry.name,
      rating: match?.rating ?? null,
      playerId: match?.id ?? null,
    }
  })
}

export function LeagueSection({
  isModerator,
  players,
}: LeagueSectionProps) {
  const lang = useLang()
  const leagueRows = buildLeagueRows(LEAGUE_ROSTER, players)

  const [prefill, setPrefill] = useState<{
    blackId: number
    whiteId: number
  } | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  function handleCellClick(
    blackId: number,
    whiteId: number,
  ) {
    setPrefill({ blackId, whiteId })
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">
          {lang === "pt" ? "Liga" : "League"}
        </h1>
        <LeagueTable
          players={leagueRows}
          isModerator={isModerator}
          onCellClick={handleCellClick}
        />
      </div>
      {isModerator && (
        <div ref={formRef}>
          <AddGameForm
            players={players}
            prefillBlackId={prefill?.blackId}
            prefillWhiteId={prefill?.whiteId}
          />
        </div>
      )}
    </div>
  )
}
