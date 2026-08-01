"use client"

import { useActionState } from "react"

import { create_division } from "@actions"
import type { CreateDivisionState } from "@server"

import { useLang } from "@hooks"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

function errorMessage(
  errorCode: CreateDivisionState["errorCode"],
  lang: string,
) {
  switch (errorCode) {
    case "not_authorized":
      return lang === "pt"
        ? "Você não tem permissão para fazer isso."
        : "You're not allowed to do that."
    case "invalid_fields":
      return lang === "pt"
        ? "Informe um título para a divisão."
        : "Give the division a title."
    default:
      return null
  }
}

export function CreateDivisionForm({
  leagueId,
}: {
  leagueId: number
}) {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState(
    create_division,
    {},
  )

  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4"
    >
      <h2 className="text-lg font-bold">
        {lang === "pt"
          ? "Criar divisão"
          : "Create a division"}
      </h2>
      <input type="hidden" name="leagueId" value={leagueId} />
      <div className="flex gap-3">
        <input
          name="title"
          type="text"
          required
          placeholder={
            lang === "pt" ? "Ex: S, A, B..." : "E.g. S, A, B..."
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
              ? "Criando..."
              : "Creating..."
            : lang === "pt"
              ? "Criar"
              : "Create"}
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
