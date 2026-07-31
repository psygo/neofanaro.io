"use client"

import { useActionState } from "react"

import { sign_up } from "@actions"
import type { AuthErrorCode } from "@server"

import { useLang } from "@hooks"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

function errorMessage(
  errorCode: AuthErrorCode | undefined,
  lang: string,
) {
  switch (errorCode) {
    case "missing_fields":
      return lang === "pt"
        ? "Nome, apelido, email e senha são obrigatórios."
        : "Name, nickname, email, and password are required."
    case "password_too_short":
      return lang === "pt"
        ? "A senha deve ter pelo menos 8 caracteres."
        : "Password must be at least 8 characters."
    case "email_taken":
      return lang === "pt"
        ? "Já existe uma conta com este email."
        : "An account with this email already exists."
    default:
      return null
  }
}

export function SignUpForm() {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState(
    sign_up,
    {},
  )

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input
        name="name"
        type="text"
        placeholder={lang === "pt" ? "Nome" : "Name"}
        required
        className={inputClasses}
      />
      <input
        name="nick"
        type="text"
        placeholder={lang === "pt" ? "Apelido" : "Nickname"}
        required
        className={inputClasses}
      />
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
        minLength={8}
        className={inputClasses}
      />
      {errorMessage(state.errorCode, lang) && (
        <p className="text-sm text-red-600">
          {errorMessage(state.errorCode, lang)}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending
          ? lang === "pt"
            ? "Cadastrando..."
            : "Signing up..."
          : lang === "pt"
            ? "Cadastrar"
            : "Sign up"}
      </button>
    </form>
  )
}
