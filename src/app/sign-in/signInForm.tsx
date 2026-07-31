"use client"

import { useActionState } from "react"

import { sign_in } from "@actions"
import type { AuthErrorCode } from "@server"

import { useLang } from "@hooks"

import { LangLink } from "@components/common/langLink"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

function errorMessage(
  errorCode: AuthErrorCode | undefined,
  lang: string,
) {
  switch (errorCode) {
    case "missing_fields":
      return lang === "pt"
        ? "Email e senha são obrigatórios."
        : "Email and password are required."
    case "invalid_credentials":
      return lang === "pt"
        ? "Email ou senha inválidos."
        : "Invalid email or password."
    default:
      return null
  }
}

export function SignInForm() {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState(
    sign_in,
    {},
  )

  return (
    <form
      action={formAction}
      className="flex w-70 flex-col gap-3"
    >
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className={inputClasses}
      />
      <input
        name="password"
        type="password"
        placeholder={lang === "pt" ? "Senha" : "Password"}
        required
        className={inputClasses}
      />
      {errorMessage(state.errorCode, lang) && (
        <p className="text-sm text-red-600">
          {errorMessage(state.errorCode, lang)}
        </p>
      )}
      <div className="flex justify-between">
        <LangLink
          href="/sign-up"
          className="cursor-pointer rounded-lg bg-slate-50 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {lang === "pt" ? "Cadastrar" : "Sign Up"}
        </LangLink>
        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer rounded-lg bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending
            ? lang === "pt"
              ? "Entrando..."
              : "Signing in..."
            : lang === "pt"
              ? "Entrar"
              : "Sign In"}
        </button>
      </div>
    </form>
  )
}
