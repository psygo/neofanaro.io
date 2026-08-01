"use client"

import { useRef, useState } from "react"

import {
  get_games_between,
  remove_league_player,
} from "@actions"
import type { DivisionGame } from "@server"

import { useLang } from "@hooks"

import {
  LeagueTable,
  type LeaguePlayerRow,
} from "./leagueTable"
import { AddGameForm } from "./addGameForm"
import { AddPlayerForm } from "./addPlayerForm"
import { CreateDivisionForm } from "./createDivisionForm"
import { CreateLeagueForm } from "./createLeagueForm"
import { DivisionTabs } from "./divisionTabs"
import { GamePicker } from "./gamePicker"

type League = {
  id: number
  titleEn: string
  titlePt: string
  startDate: string | null
}

type Division = {
  id: number
  leagueId: number
  title: string
}

type RosterPlayer = {
  id: number
  name: string
  nick: string
  email: string | null
  rating: number
}

type DivisionData = {
  division: Division
  roster: RosterPlayer[]
  games: DivisionGame[]
}

type PlayerOption = {
  id: number
  name: string
  nick: string
  email: string | null
  rating: number
}

type LeagueSectionProps = {
  isModerator: boolean
  league: League | null
  divisions: DivisionData[]
  allPlayers: PlayerOption[]
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
  divisionId: number
  playerAId: number
  playerBId: number
  games: Awaited<ReturnType<typeof get_games_between>>
  loading: boolean
}

export function LeagueSection({
  isModerator,
  league,
  divisions,
  allPlayers,
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
      divisions={divisions}
      allPlayers={allPlayers}
    />
  )
}

function LeagueContent({
  isModerator,
  league,
  divisions,
  allPlayers,
}: {
  isModerator: boolean
  league: League
  divisions: DivisionData[]
  allPlayers: PlayerOption[]
}) {
  const lang = useLang()

  const [selectedDivisionId, setSelectedDivisionId] = useState<
    number | null
  >(divisions[0]?.division.id ?? null)
  const [picker, setPicker] = useState<Picker | null>(null)
  const [prefill, setPrefill] = useState<{
    divisionId: number
    blackId: number
    whiteId: number
  } | null>(null)
  const [showAddPlayerForm, setShowAddPlayerForm] =
    useState(false)
  const [showCreateDivisionForm, setShowCreateDivisionForm] =
    useState(false)
  const [showCreateLeagueForm, setShowCreateLeagueForm] =
    useState(false)

  const pickerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  async function handleCellClick(
    divisionId: number,
    playerAId: number,
    playerBId: number,
  ) {
    setPicker({
      divisionId,
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
      divisionId,
      playerAId,
      playerBId,
    )
    setPicker({
      divisionId,
      playerAId,
      playerBId,
      games,
      loading: false,
    })
  }

  async function handleRemovePlayer(
    divisionId: number,
    playerId: number,
  ) {
    const confirmed = window.confirm(
      lang === "pt"
        ? "Remover este jogador da divisão?"
        : "Remove this player from the division?",
    )
    if (!confirmed) return
    await remove_league_player(divisionId, playerId)
  }

  function handleAddNewGame() {
    if (!picker) return
    setPrefill({
      divisionId: picker.divisionId,
      blackId: picker.playerAId,
      whiteId: picker.playerBId,
    })
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const visibleDivision =
    divisions.find(
      (entry) => entry.division.id === selectedDivisionId,
    ) ?? divisions[0]

  const activeDivisionId =
    prefill?.divisionId ??
    picker?.divisionId ??
    visibleDivision?.division.id
  const activeRoster =
    divisions.find(
      (entry) => entry.division.id === activeDivisionId,
    )?.roster ?? []

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-2xl font-bold">
        {lang === "pt" ? league.titlePt : league.titleEn}
      </h1>

      {divisions.length === 0 && (
        <p className="text-center text-slate-500">
          {lang === "pt"
            ? "Ainda não há divisões nesta liga."
            : "There are no divisions in this league yet."}
        </p>
      )}

      {visibleDivision && (
        <div className="flex flex-col gap-4">
          <DivisionTabs
            divisions={divisions.map(
              (entry) => entry.division,
            )}
            activeDivisionId={visibleDivision.division.id}
            onSelect={setSelectedDivisionId}
          />
          <LeagueTable
            players={buildLeagueRows(
              visibleDivision.roster,
            )}
            isModerator={isModerator}
            games={visibleDivision.games}
            onCellClick={(playerAId, playerBId) =>
              handleCellClick(
                visibleDivision.division.id,
                playerAId,
                playerBId,
              )
            }
            onRemovePlayer={(playerId) =>
              handleRemovePlayer(
                visibleDivision.division.id,
                playerId,
              )
            }
          />
        </div>
      )}

      {isModerator && (
        <div className="flex flex-wrap gap-3">
          {showAddPlayerForm ? (
            <AddPlayerForm
              divisions={divisions.map(
                (entry) => entry.division,
              )}
              allPlayers={allPlayers}
            />
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
          )}
          {showCreateDivisionForm ? (
            <CreateDivisionForm leagueId={league.id} />
          ) : (
            <button
              type="button"
              onClick={() => setShowCreateDivisionForm(true)}
              className="cursor-pointer self-start rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200"
            >
              {lang === "pt"
                ? "+ Criar divisão"
                : "+ Create division"}
            </button>
          )}
        </div>
      )}

      {isModerator && picker && (
        <div ref={pickerRef}>
          <GamePicker
            playerAId={picker.playerAId}
            playerBId={picker.playerBId}
            players={activeRoster}
            games={picker.games}
            loading={picker.loading}
            onAddNewGame={handleAddNewGame}
          />
        </div>
      )}

      {isModerator && activeDivisionId && (
        <div ref={formRef}>
          <AddGameForm
            divisionId={activeDivisionId}
            players={activeRoster}
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
