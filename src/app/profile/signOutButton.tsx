"use client"

import { useTransition } from "react"

import { sign_out } from "@actions"

export function SignOutButton() {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => sign_out())}
      disabled={isPending}
      className="cursor-pointer rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isPending ? "Signing out..." : "Sign out"}
    </button>
  )
}
