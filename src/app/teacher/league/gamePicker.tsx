"use client"

import { useActionState, useState } from "react"

import { get_games_between, update_game_links } from "@actions"
import type { UpdateGameLinksState } from "@server"

import { useLang } from "@hooks"

type GameRow = Awaited<
  ReturnType<typeof get_games_between>
>[number]

type PlayerOption = {
  id: number
  name: string
  nick: string
}

type GamePickerProps = {
  playerAId: number
  playerBId: number
  players: PlayerOption[]
  games: GameRow[]
  loading: boolean
  onAddNewGame: () => void
}

function playerLabel(
  players: PlayerOption[],
  id: number,
) {
  const player = players.find((p) => p.id === id)
  return player ? `${player.name} (${player.nick})` : "?"
}

export function GamePicker({
  playerAId,
  playerBId,
  players,
  games,
  loading,
  onAddNewGame,
}: GamePickerProps) {
  const lang = useLang()
  const [expandedGameId, setExpandedGameId] = useState<
    number | null
  >(null)

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4">
      <h2 className="text-lg font-bold">
        {playerLabel(players, playerAId)} vs{" "}
        {playerLabel(players, playerBId)}
      </h2>

      {loading && (
        <p className="text-sm text-slate-500">
          {lang === "pt" ? "Carregando..." : "Loading..."}
        </p>
      )}

      {!loading && games.length === 0 && (
        <p className="text-sm text-slate-500">
          {lang === "pt"
            ? "Nenhuma partida encontrada entre esses jogadores."
            : "No games found between these players."}
        </p>
      )}

      {!loading && games.length > 0 && (
        <ul className="flex flex-col gap-2">
          {games.map((game) => (
            <li
              key={game.id}
              className="rounded-lg border border-slate-200"
            >
              <button
                type="button"
                onClick={() =>
                  setExpandedGameId((current) =>
                    current === game.id ? null : game.id,
                  )
                }
                className="flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-sm transition duration-300 hover:bg-slate-100"
              >
                <span>
                  {game.date} &middot;{" "}
                  {playerLabel(players, game.blackId)}{" "}
                  {lang === "pt" ? "(Preto)" : "(Black)"} vs{" "}
                  {playerLabel(players, game.whiteId)}{" "}
                  {lang === "pt" ? "(Branco)" : "(White)"}{" "}
                  &middot; {game.result}
                </span>
              </button>
              {expandedGameId === game.id && (
                <div className="border-t border-slate-200 p-3">
                  <GameLinksForm game={game} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={onAddNewGame}
        className="cursor-pointer self-start rounded-full bg-slate-100 px-4 py-2 text-sm ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200"
      >
        {lang === "pt"
          ? "+ Nova partida entre eles"
          : "+ New game between them"}
      </button>
    </div>
  )
}

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"
const labelClasses = "text-sm font-semibold text-slate-700"

function linksErrorMessage(
  errorCode: UpdateGameLinksState["errorCode"],
  lang: string,
) {
  switch (errorCode) {
    case "not_authorized":
      return lang === "pt"
        ? "Você não tem permissão para fazer isso."
        : "You're not allowed to do that."
    case "invalid_fields":
      return lang === "pt"
        ? "Não foi possível identificar a partida."
        : "Couldn't identify the game."
    default:
      return null
  }
}

function GameLinksForm({ game }: { game: GameRow }) {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState(
    update_game_links,
    {},
  )

  return (
    <form
      action={formAction}
      className="flex flex-col gap-3"
    >
      <input type="hidden" name="gameId" value={game.id} />
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>OGS</span>
          <input
            name="ogsLink"
            type="url"
            defaultValue={game.ogsLink ?? ""}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>AI Sensei</span>
          <input
            name="aiSenseiLink"
            type="url"
            defaultValue={game.aiSenseiLink ?? ""}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>YouTube</span>
          <input
            name="youtubeLink"
            type="url"
            defaultValue={game.youtubeLink ?? ""}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>Twitch</span>
          <input
            name="twitchLink"
            type="url"
            defaultValue={game.twitchLink ?? ""}
            className={inputClasses}
          />
        </label>
      </div>
      {linksErrorMessage(state.errorCode, lang) && (
        <p className="text-sm text-red-600">
          {linksErrorMessage(state.errorCode, lang)}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer self-start rounded-full bg-slate-100 px-4 py-2 text-sm ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending
          ? lang === "pt"
            ? "Salvando..."
            : "Saving..."
          : lang === "pt"
            ? "Salvar links"
            : "Save links"}
      </button>
    </form>
  )
}
