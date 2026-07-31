"use client"

import { useActionState } from "react"

import { add_league_player } from "@actions"
import type { AddLeaguePlayerState } from "@server"

import { useLang } from "@hooks"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

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
        ? "Nenhum jogador com esse email."
        : "No player with that email."
    case "already_in_league":
      return lang === "pt"
        ? "Esse jogador já está na liga."
        : "That player is already in the league."
    default:
      return null
  }
}

export function AddPlayerForm({
  leagueId,
}: {
  leagueId: number
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
          ? "Adicionar jogador à liga"
          : "Add player to league"}
      </h2>
      <input type="hidden" name="leagueId" value={leagueId} />
      <div className="flex gap-3">
        <input
          name="email"
          type="email"
          required
          placeholder={
            lang === "pt"
              ? "Email do jogador"
              : "Player's email"
          }
          className={`flex-1 ${inputClasses}`}
        />
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
      <p className="text-xs text-slate-500">
        {lang === "pt"
          ? "O jogador precisa já ter uma conta com esse email."
          : "The player needs to already have an account with that email."}
      </p>
    </form>
  )
}
