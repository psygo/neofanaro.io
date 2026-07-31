"use client"

import { useActionState } from "react"

import { sign_up } from "@actions"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

export function SignUpForm() {
  const [state, formAction, isPending] = useActionState(
    sign_up,
    {},
  )

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        className={inputClasses}
      />
      <input
        name="nick"
        type="text"
        placeholder="Nickname"
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
        placeholder="Password"
        required
        minLength={8}
        className={inputClasses}
      />
      {state.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Signing up..." : "Sign up"}
      </button>
    </form>
  )
}
