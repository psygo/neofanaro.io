"use client"

import { useActionState } from "react"

import { create_league } from "@actions"
import type { CreateLeagueState } from "@server"

import { useLang } from "@hooks"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"
const labelClasses = "text-sm font-semibold text-slate-700"

function errorMessage(
  errorCode: CreateLeagueState["errorCode"],
  lang: string,
) {
  switch (errorCode) {
    case "not_authorized":
      return lang === "pt"
        ? "Você não tem permissão para fazer isso."
        : "You're not allowed to do that."
    case "invalid_fields":
      return lang === "pt"
        ? "Informe um título para a liga."
        : "Give the league a title."
    default:
      return null
  }
}

export function CreateLeagueForm() {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState(
    create_league,
    {},
  )

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4"
    >
      <h2 className="text-lg font-bold">
        {lang === "pt"
          ? "Criar liga"
          : "Create a league"}
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt" ? "Título" : "Title"}
          </span>
          <input
            name="title"
            type="text"
            required
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClasses}>
            {lang === "pt"
              ? "Data de início"
              : "Start date"}
          </span>
          <input
            name="startDate"
            type="date"
            className={inputClasses}
          />
        </label>
      </div>
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
            ? "Criando..."
            : "Creating..."
          : lang === "pt"
            ? "Criar liga"
            : "Create league"}
      </button>
    </form>
  )
}
