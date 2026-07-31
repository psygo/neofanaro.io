"use client"

import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

import { get_games_between } from "@actions"
import type { FeaturedGame } from "@server"

import { useLang } from "@hooks"

import {
  LeagueTable,
  type LeaguePlayerRow,
} from "./leagueTable"
import { AddGameForm } from "./addGameForm"
import { GamePicker } from "./gamePicker"

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
  featuredGames: FeaturedGame[]
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

type Picker = {
  playerAId: number
  playerBId: number
  games: Awaited<ReturnType<typeof get_games_between>>
  loading: boolean
}

export function LeagueSection({
  isModerator,
  players,
  featuredGames,
}: LeagueSectionProps) {
  const lang = useLang()
  const router = useRouter()
  const leagueRows = buildLeagueRows(
    LEAGUE_ROSTER_EMAILS,
    players,
  )

  const [picker, setPicker] = useState<Picker | null>(null)
  const [prefill, setPrefill] = useState<{
    blackId: number
    whiteId: number
  } | null>(null)

  const pickerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  async function handleCellClick(
    playerAId: number,
    playerBId: number,
  ) {
    setPicker({
      playerAId,
      playerBId,
      games: [],
      loading: true,
    })
    pickerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    const games = await get_games_between(
      playerAId,
      playerBId,
    )
    setPicker({ playerAId, playerBId, games, loading: false })
  }

  function handleAddNewGame() {
    if (!picker) return
    setPrefill({
      blackId: picker.playerAId,
      whiteId: picker.playerBId,
    })
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  function handleGameFeatured() {
    setPicker(null)
    router.refresh()
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
          featuredGames={featuredGames}
          onCellClick={handleCellClick}
        />
      </div>
      {isModerator && picker && (
        <div ref={pickerRef}>
          <GamePicker
            playerAId={picker.playerAId}
            playerBId={picker.playerBId}
            players={players}
            games={picker.games}
            loading={picker.loading}
            onAddNewGame={handleAddNewGame}
            onGameFeatured={handleGameFeatured}
          />
        </div>
      )}
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
