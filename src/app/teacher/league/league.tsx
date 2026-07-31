"use client"

import { useRef, useState } from "react"

import { get_games_between } from "@actions"
import type { LeagueGame } from "@server"

import { useLang } from "@hooks"

import {
  LeagueTable,
  type LeaguePlayerRow,
} from "./leagueTable"
import { AddGameForm } from "./addGameForm"
import { AddPlayerForm } from "./addPlayerForm"
import { CreateLeagueForm } from "./createLeagueForm"
import { GamePicker } from "./gamePicker"

type League = {
  id: number
  title: string
  startDate: string | null
}

type RosterPlayer = {
  id: number
  name: string
  nick: string
  email: string | null
  rating: number
}

type LeagueSectionProps = {
  isModerator: boolean
  league: League | null
  roster: RosterPlayer[]
  games: LeagueGame[]
}

function buildLeagueRows(
  roster: RosterPlayer[],
): LeaguePlayerRow[] {
  return roster.map((player) => ({
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
  league,
  roster,
  games,
}: LeagueSectionProps) {
  const lang = useLang()
  const [showCreateLeagueForm, setShowCreateLeagueForm] =
    useState(false)

  if (!league) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-2xl font-bold">
          {lang === "pt" ? "Liga" : "League"}
        </h1>
        {isModerator ? (
          showCreateLeagueForm ? (
            <CreateLeagueForm />
          ) : (
            <button
              type="button"
              onClick={() => setShowCreateLeagueForm(true)}
              className="cursor-pointer rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200"
            >
              {lang === "pt"
                ? "+ Criar liga"
                : "+ Create league"}
            </button>
          )
        ) : (
          <p className="text-center text-slate-500">
            {lang === "pt"
              ? "Ainda não há uma liga criada."
              : "There's no league yet."}
          </p>
        )}
      </div>
    )
  }

  return (
    <LeagueContent
      isModerator={isModerator}
      league={league}
      roster={roster}
      games={games}
    />
  )
}

function LeagueContent({
  isModerator,
  league,
  roster,
  games,
}: {
  isModerator: boolean
  league: League
  roster: RosterPlayer[]
  games: LeagueGame[]
}) {
  const lang = useLang()
  const leagueRows = buildLeagueRows(roster)

  const [picker, setPicker] = useState<Picker | null>(null)
  const [prefill, setPrefill] = useState<{
    blackId: number
    whiteId: number
  } | null>(null)
  const [showAddPlayerForm, setShowAddPlayerForm] =
    useState(false)
  const [showCreateLeagueForm, setShowCreateLeagueForm] =
    useState(false)

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
      league.id,
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

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">
          {league.title}
        </h1>
        <LeagueTable
          players={leagueRows}
          isModerator={isModerator}
          games={games}
          onCellClick={handleCellClick}
        />
        {isModerator &&
          (showAddPlayerForm ? (
            <AddPlayerForm leagueId={league.id} />
          ) : (
            <button
              type="button"
              onClick={() => setShowAddPlayerForm(true)}
              className="cursor-pointer self-start rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200"
            >
              {lang === "pt"
                ? "+ Adicionar jogador"
                : "+ Add player"}
            </button>
          ))}
      </div>
      {isModerator && picker && (
        <div ref={pickerRef}>
          <GamePicker
            playerAId={picker.playerAId}
            playerBId={picker.playerBId}
            players={roster}
            games={picker.games}
            loading={picker.loading}
            onAddNewGame={handleAddNewGame}
          />
        </div>
      )}
      {isModerator && (
        <div ref={formRef}>
          <AddGameForm
            leagueId={league.id}
            players={roster}
            prefillBlackId={prefill?.blackId}
            prefillWhiteId={prefill?.whiteId}
          />
        </div>
      )}
      {isModerator &&
        (showCreateLeagueForm ? (
          <CreateLeagueForm />
        ) : (
          <button
            type="button"
            onClick={() => setShowCreateLeagueForm(true)}
            className="cursor-pointer self-start rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200"
          >
            {lang === "pt"
              ? "+ Criar liga"
              : "+ Create league"}
          </button>
        ))}
    </div>
  )
}
