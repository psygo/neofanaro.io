"use client"

import { useTransition } from "react"

import { sign_out } from "@actions"

export function SignOutButton() {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => sign_out())}
      disabled={isPending}
      className="w-max cursor-pointer rounded-full border border-red-500 bg-slate-100 px-4 py-2 text-red-600 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isPending ? "Signing out..." : "Sign out"}
    </button>
  )
}
