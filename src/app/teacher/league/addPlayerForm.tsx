"use client"

import { useActionState } from "react"

import { add_league_player } from "@actions"
import type { AddLeaguePlayerState } from "@server"

import { useLang } from "@hooks"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

type DivisionOption = {
  id: number
  title: string
}

type PlayerOption = {
  id: number
  name: string
  nick: string
}

function errorMessage(
  errorCode: AddLeaguePlayerState["errorCode"],
  lang: string,
) {
  switch (errorCode) {
    case "not_authorized":
      return lang === "pt"
        ? "Você não tem permissão para fazer isso."
        : "You're not allowed to do that."
    case "player_not_found":
      return lang === "pt"
        ? "Selecione uma divisão e um jogador."
        : "Select a division and a player."
    case "already_in_division":
      return lang === "pt"
        ? "Esse jogador já está nessa divisão."
        : "That player is already in that division."
    default:
      return null
  }
}

export function AddPlayerForm({
  divisions,
  allPlayers,
}: {
  divisions: DivisionOption[]
  allPlayers: PlayerOption[]
}) {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState(
    add_league_player,
    {},
  )

  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4"
    >
      <h2 className="text-lg font-bold">
        {lang === "pt"
          ? "Adicionar jogador à divisão"
          : "Add player to division"}
      </h2>
      <div className="flex flex-wrap gap-3">
        <select
          name="divisionId"
          required
          defaultValue=""
          className={inputClasses}
        >
          <option value="" disabled>
            {lang === "pt" ? "Divisão" : "Division"}
          </option>
          {divisions.map((division) => (
            <option key={division.id} value={division.id}>
              {division.title}
            </option>
          ))}
        </select>
        <select
          name="playerId"
          required
          defaultValue=""
          className={`flex-1 ${inputClasses}`}
        >
          <option value="" disabled>
            {lang === "pt" ? "Jogador" : "Player"}
          </option>
          {allPlayers.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name} ({player.nick})
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending
            ? lang === "pt"
              ? "Adicionando..."
              : "Adding..."
            : lang === "pt"
              ? "Adicionar"
              : "Add"}
        </button>
      </div>
      {errorMessage(state.errorCode, lang) && (
        <p className="text-sm text-red-600">
          {errorMessage(state.errorCode, lang)}
        </p>
      )}
    </form>
  )
}
