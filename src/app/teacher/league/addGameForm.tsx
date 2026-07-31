"use client"

import { useActionState } from "react"

import { create_game } from "@actions"
import type { CreateGameState } from "@server"

import { useLang } from "@hooks"

type PlayerOption = {
  id: number
  name: string
  nick: string
}

type AddGameFormProps = {
  players: PlayerOption[]
  prefillBlackId?: number
  prefillWhiteId?: number
}

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"
const labelClasses = "text-sm font-semibold text-slate-700"

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
  players,
  prefillBlackId,
  prefillWhiteId,
}: AddGameFormProps) {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState(
    create_game,
    {},
  )

  return (
    <form
      key={`${prefillBlackId ?? ""}-${prefillWhiteId ?? ""}`}
      action={formAction}
      className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4"
    >
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
            defaultValue={prefillBlackId ?? ""}
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
            defaultValue={prefillWhiteId ?? ""}
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
            name="ratingBlack"
            type="number"
            required
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
            name="ratingDiffBlack"
            type="number"
            required
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
            name="ratingWhite"
            type="number"
            required
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
            name="ratingDiffWhite"
            type="number"
            required
            className={inputClasses}
          />
        </label>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt" ? "Pedras de handicap" : "Handicap stones"}
          </span>
          <input
            name="handicapStones"
            type="number"
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt" ? "Pontos de handicap" : "Handicap points"}
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
