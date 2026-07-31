"use client"

import { useRef, useState } from "react"

import { useLang } from "@hooks"

import {
  LeagueTable,
  type LeaguePlayerRow,
} from "./leagueTable"
import { AddGameForm } from "./addGameForm"

// Emails of this league's participants. A moderator maintains
// this list by hand, keyed by email since it's the one unique,
// stable identifier every player row is guaranteed to have.
const LEAGUE_ROSTER_EMAILS: string[] = [
  "philippefanaro@gmail.com",
  // "dejan@example.com",
  // "diogo@example.com",
  "di@gmail.com",
  // "ariel@example.com",
  // "gilberto@example.com",
]

type DbPlayer = {
  id: number
  name: string
  nick: string
  email: string | null
  rating: number
}

type LeagueSectionProps = {
  isModerator: boolean
  players: DbPlayer[]
}

function buildLeagueRows(
  rosterEmails: string[],
  dbPlayers: DbPlayer[],
): LeaguePlayerRow[] {
  return rosterEmails
    .map((email) =>
      dbPlayers.find((player) => player.email === email),
    )
    .filter((player): player is DbPlayer => player != null)
    .map((player) => ({
      playerId: player.id,
      code: player.name.slice(0, 2),
      name: player.name,
      nick: player.nick,
      rating: player.rating,
    }))
}

export function LeagueSection({
  isModerator,
  players,
}: LeagueSectionProps) {
  const lang = useLang()
  const leagueRows = buildLeagueRows(
    LEAGUE_ROSTER_EMAILS,
    players,
  )

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
