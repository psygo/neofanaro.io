"use client"

import { useLang } from "@hooks"

import { LangLink } from "@components/common/langLink"

import { SignUpForm } from "./signUpForm"

export function SignUpSection() {
  const lang = useLang()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        {lang === "pt" ? "Cadastrar" : "Sign up"}
      </h1>
      <SignUpForm />
      <p className="text-slate-600">
        {lang === "pt"
          ? "Já tem uma conta?"
          : "Already have an account?"}{" "}
        <LangLink href="/sign-in" className="underline">
          {lang === "pt" ? "Entrar" : "Sign in"}
        </LangLink>
        .
      </p>
    </div>
  )
}
