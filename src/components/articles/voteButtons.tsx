"use client"

import { VoteValue } from "@types"

type VoteButtonsProps = {
  upvotes: number
  downvotes: number
  myVote: VoteValue | 0
  onVote: (value: VoteValue) => void
  className?: string
}

export function VoteButtons({
  upvotes,
  downvotes,
  myVote,
  onVote,
  className = "",
}: VoteButtonsProps) {
  return (
    <div
      className={`flex items-center gap-2 px-1 ${className}`}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          onVote(1)
        }}
        aria-label="Upvote"
        className={`flex cursor-pointer items-center gap-1 rounded-full py-0.5 text-sm transition duration-300 ${
          myVote === 1
            ? "bg-emerald-100 text-emerald-700"
            : "text-slate-500 hover:bg-slate-100"
        }`}
      >
        <span aria-hidden>▲</span>
        <span>{upvotes}</span>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          onVote(-1)
        }}
        aria-label="Downvote"
        className={`flex cursor-pointer items-center gap-1 rounded-full px-2 py-0.5 text-sm transition duration-300 ${
          myVote === -1
            ? "bg-red-100 text-red-700"
            : "text-slate-500 hover:bg-slate-100"
        }`}
      >
        <span aria-hidden>▼</span>
        <span>{downvotes}</span>
      </button>
    </div>
  )
}
