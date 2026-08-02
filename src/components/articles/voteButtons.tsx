"use client"

import { VoteValue } from "@types"

type VoteButtonsProps = {
  upvotes: number
  downvotes: number
  myVote: VoteValue | 0
  onVote?: (value: VoteValue) => void
  readOnly?: boolean
  className?: string
}

export function VoteButtons({
  upvotes,
  downvotes,
  myVote,
  onVote,
  readOnly = false,
  className = "",
}: VoteButtonsProps) {
  if (readOnly) {
    return (
      <div
        className={`flex items-center gap-0.5 ${className}`}
      >
        <span
          className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-sm ${
            myVote === 1
              ? "bg-emerald-100 text-emerald-700"
              : "text-slate-500"
          }`}
        >
          <span aria-hidden>▲</span>
          <span>{upvotes}</span>
        </span>
        <span
          className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-sm ${
            myVote === -1
              ? "bg-red-100 text-red-700"
              : "text-slate-500"
          }`}
        >
          <span aria-hidden>▼</span>
          <span>{downvotes}</span>
        </span>
      </div>
    )
  }

  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          onVote?.(1)
        }}
        aria-label="Upvote"
        className={`flex cursor-pointer items-center gap-1 rounded-full px-2 py-0.5 text-sm transition duration-300 ${
          myVote === 1
            ? "bg-emerald-100 text-emerald-700"
            : "text-slate-500 hover:bg-slate-200"
        }`}
      >
        <span aria-hidden>▲</span>
        <span>{upvotes}</span>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          onVote?.(-1)
        }}
        aria-label="Downvote"
        className={`flex cursor-pointer items-center gap-1 rounded-full px-2 py-0.5 text-sm transition duration-300 ${
          myVote === -1
            ? "bg-red-100 text-red-700"
            : "text-slate-500 hover:bg-slate-200"
        }`}
      >
        <span aria-hidden>▼</span>
        <span>{downvotes}</span>
      </button>
    </div>
  )
}
