"use client"

import { useActionState } from "react"

import { update_description } from "@actions"

import { useLang } from "@hooks"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

export function DescriptionForm({
  description,
}: {
  description: string | null
}) {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState(
    update_description,
    {},
  )

  return (
    <form
      action={formAction}
      className="flex w-full flex-col gap-2"
    >
      <label
        htmlFor="description"
        className="font-semibold text-slate-700"
      >
        {lang === "pt" ? "Descrição" : "Description"}
      </label>
      <textarea
        id="description"
        name="description"
        defaultValue={description ?? ""}
        rows={4}
        placeholder={
          lang === "pt"
            ? "Conte um pouco sobre você..."
            : "Tell us a bit about yourself..."
        }
        className={inputClasses}
      />
      {state.errorCode && (
        <p className="text-sm text-red-600">
          {lang === "pt"
            ? "Você precisa entrar na sua conta."
            : "You need to sign in."}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer self-end rounded-lg bg-slate-100 px-4 py-1 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending
          ? lang === "pt"
            ? "Salvando..."
            : "Saving..."
          : lang === "pt"
            ? "Salvar"
            : "Save"}
      </button>
    </form>
  )
}
