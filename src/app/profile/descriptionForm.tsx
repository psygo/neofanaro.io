"use client"

import { useActionState } from "react"

import { update_description } from "@actions"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

export function DescriptionForm({
  description,
}: {
  description: string | null
}) {
  const [state, formAction, isPending] = useActionState(
    update_description,
    {},
  )

  return (
    <form
      action={formAction}
      className="flex flex-col gap-2"
    >
      <label
        htmlFor="description"
        className="font-semibold text-slate-700"
      >
        Description
      </label>
      <textarea
        id="description"
        name="description"
        defaultValue={description ?? ""}
        rows={4}
        placeholder="Tell us a bit about yourself..."
        className={inputClasses}
      />
      {state.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer self-start rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Saving..." : "Save"}
      </button>
    </form>
  )
}
