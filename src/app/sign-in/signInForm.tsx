"use client"

import { useActionState } from "react"

import Link from "next/link"

import { sign_in } from "@actions"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

export function SignInForm() {
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
        placeholder="Password"
        required
        className={inputClasses}
      />
      {state.error && (
        <p className="text-sm text-red-600">
          {state.error}
        </p>
      )}
      <div className="flex justify-between">
        <Link
          href="/sign-up"
          className="cursor-pointer rounded-lg bg-slate-50 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Sign Up
        </Link>
        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer rounded-lg bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Signing in..." : "Sign In"}
        </button>
      </div>
    </form>
  )
}
