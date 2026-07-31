"use client"

import { useLang } from "@hooks"

import { SignInForm } from "./signInForm"

export function SignInSection() {
  const lang = useLang()

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">
        {lang === "pt" ? "Entrar" : "Sign in"}
      </h1>
      <SignInForm />
    </div>
  )
}
