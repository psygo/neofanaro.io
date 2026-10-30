"use client"

import { useTransition } from "react"

import { sign_out } from "@actions"

import { useLang } from "@hooks"

export function SignOutButton() {
  const lang = useLang()
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => sign_out())}
      disabled={isPending}
      className="w-max cursor-pointer rounded-full bg-red-600 px-4 py-2 text-white transition duration-300 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-red-600 dark:hover:bg-red-500"
    >
      {isPending
        ? lang === "pt"
          ? "Saindo..."
          : "Signing out..."
        : lang === "pt"
          ? "Sair"
          : "Sign out"}
    </button>
  )
}
