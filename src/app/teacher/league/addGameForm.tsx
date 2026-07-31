"use client"

import { useActionState, useState } from "react"

import { create_game } from "@actions"
import type { CreateGameState } from "@server"

import { useLang } from "@hooks"
import { winnerFromResult } from "@utils"

type PlayerOption = {
  id: number
  name: string
  nick: string
  rating: number
}

type AddGameFormProps = {
  leagueId: number
  players: PlayerOption[]
  prefillBlackId?: number
  prefillWhiteId?: number
}

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"
const labelClasses = "text-sm font-semibold text-slate-700"

// Standard Elo K-factor for the diff estimate. Not tuned to any
// particular rating pool, just a reasonable club-level default.
const K_FACTOR = 32
// Rough rule of thumb: one handicap stone ~= 100 rating points.
const HANDICAP_POINTS_PER_STONE = 100

function errorMessage(
  errorCode: CreateGameState["errorCode"],
  lang: string,
) {
  switch (errorCode) {
    case "not_authorized":
      return lang === "pt"
        ? "Você não tem permissão para fazer isso."
        : "You're not allowed to do that."
    case "invalid_fields":
      return lang === "pt"
        ? "Preencha os jogadores, os ratings e o resultado."
        : "Fill in the players, ratings, and result."
    default:
      return null
  }
}


export function AddGameForm({
  leagueId,
  players,
  prefillBlackId,
  prefillWhiteId,
}: AddGameFormProps) {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState(
    create_game,
    {},
  )

  const [blackId, setBlackId] = useState(
    prefillBlackId ? String(prefillBlackId) : "",
  )
  const [whiteId, setWhiteId] = useState(
    prefillWhiteId ? String(prefillWhiteId) : "",
  )
  const [handicapStones, setHandicapStones] = useState("")
  const [result, setResult] = useState("")

  const blackPlayer = players.find(
    (player) => String(player.id) === blackId,
  )
  const whitePlayer = players.find(
    (player) => String(player.id) === whiteId,
  )

  const ratingBlack = blackPlayer
    ? String(blackPlayer.rating)
    : ""
  const ratingWhite = whitePlayer
    ? String(whitePlayer.rating)
    : ""

  let ratingDiffBlack = ""
  let ratingDiffWhite = ""

  const winner = winnerFromResult(result)
  if (blackPlayer && whitePlayer && winner) {
    const handicapBoost =
      (parseInt(handicapStones, 10) || 0) *
      HANDICAP_POINTS_PER_STONE
    const effectiveBlackRating =
      blackPlayer.rating + handicapBoost

    const expectedBlack =
      1 /
      (1 +
        10 **
          ((whitePlayer.rating - effectiveBlackRating) /
            400))
    const actualBlack = winner === "B" ? 1 : 0

    const diffBlack = Math.round(
      K_FACTOR * (actualBlack - expectedBlack),
    )
    ratingDiffBlack = String(diffBlack)
    ratingDiffWhite = String(-diffBlack)
  }

  // Forces the rating/diff inputs below to pick up the freshly
  // computed defaultValue whenever an input they depend on
  // changes, while still letting a moderator hand-edit them
  // afterward without being clobbered on every keystroke.
  const computedKey = `${blackId}-${whiteId}-${handicapStones}-${result}`

  return (
    <form
      key={`${prefillBlackId ?? ""}-${prefillWhiteId ?? ""}`}
      action={formAction}
      className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4"
    >
      <input
        type="hidden"
        name="leagueId"
        value={leagueId}
      />
      <h2 className="text-lg font-bold">
        {lang === "pt" ? "Adicionar partida" : "Add game"}
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt" ? "Data" : "Date"}
          </span>
          <input
            name="date"
            type="date"
            defaultValue={new Date()
              .toLocaleDateString("en-CA")}
            required
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt" ? "Resultado" : "Result"}
          </span>
          <input
            name="result"
            type="text"
            required
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className={inputClasses}
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt" ? "Preto" : "Black"}
          </span>
          <select
            name="blackId"
            required
            value={blackId}
            onChange={(e) => setBlackId(e.target.value)}
            className={inputClasses}
          >
            <option value="" disabled>
              {lang === "pt" ? "Selecione" : "Select"}
            </option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name} ({player.nick})
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt" ? "Branco" : "White"}
          </span>
          <select
            name="whiteId"
            required
            value={whiteId}
            onChange={(e) => setWhiteId(e.target.value)}
            className={inputClasses}
          >
            <option value="" disabled>
              {lang === "pt" ? "Selecione" : "Select"}
            </option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name} ({player.nick})
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt"
              ? "Rating (Preto)"
              : "Rating (Black)"}
          </span>
          <input
            key={computedKey}
            name="ratingBlack"
            type="number"
            required
            defaultValue={ratingBlack}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt"
              ? "Diferença de rating (Preto)"
              : "Rating diff (Black)"}
          </span>
          <input
            key={computedKey}
            name="ratingDiffBlack"
            type="number"
            required
            defaultValue={ratingDiffBlack}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt"
              ? "Rating (Branco)"
              : "Rating (White)"}
          </span>
          <input
            key={computedKey}
            name="ratingWhite"
            type="number"
            required
            defaultValue={ratingWhite}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt"
              ? "Diferença de rating (Branco)"
              : "Rating diff (White)"}
          </span>
          <input
            key={computedKey}
            name="ratingDiffWhite"
            type="number"
            required
            defaultValue={ratingDiffWhite}
            className={inputClasses}
          />
        </label>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt"
              ? "Pedras de handicap"
              : "Handicap stones"}
          </span>
          <input
            name="handicapStones"
            type="number"
            value={handicapStones}
            onChange={(e) =>
              setHandicapStones(e.target.value)
            }
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt"
              ? "Pontos de handicap"
              : "Handicap points"}
          </span>
          <input
            name="handicapPoints"
            type="number"
            step="0.5"
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>Komi</span>
          <input
            name="komi"
            type="number"
            step="0.5"
            className={inputClasses}
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>OGS</span>
          <input
            name="ogsLink"
            type="url"
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>AI Sensei</span>
          <input
            name="aiSenseiLink"
            type="url"
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>YouTube</span>
          <input
            name="youtubeLink"
            type="url"
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>Twitch</span>
          <input
            name="twitchLink"
            type="url"
            className={inputClasses}
          />
        </label>
      </div>

      <label className="flex items-center gap-2">
        <input name="reviewed" type="checkbox" />
        <span className={labelClasses}>
          {lang === "pt" ? "Revisada" : "Reviewed"}
        </span>
      </label>

      {errorMessage(state.errorCode, lang) && (
        <p className="text-sm text-red-600">
          {errorMessage(state.errorCode, lang)}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer self-start rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending
          ? lang === "pt"
            ? "Salvando..."
            : "Saving..."
          : lang === "pt"
            ? "Salvar partida"
            : "Save game"}
      </button>
    </form>
  )
}
