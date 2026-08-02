"use client"

import { useEffect, useState } from "react"

import { VoteSummary, VoteValue } from "@types"

import { get_article_votes, vote_article } from "@actions"

import { VoteButtons } from "./voteButtons"

type ArticleVoteWidgetProps = {
  articleId: number
  readOnly?: boolean
  className?: string
}

export function ArticleVoteWidget({
  articleId,
  readOnly = false,
  className = "",
}: ArticleVoteWidgetProps) {
  const [summary, setSummary] = useState<VoteSummary>({
    upvotes: 0,
    downvotes: 0,
    myVote: 0,
  })

  useEffect(() => {
    let cancelled = false

    get_article_votes(articleId).then((data) => {
      if (!cancelled) setSummary(data)
    })

    return () => {
      cancelled = true
    }
  }, [articleId])

  async function handleVote(value: VoteValue) {
    if (readOnly) return
    const result = await vote_article(articleId, value)
    if (!("errorCode" in result)) setSummary(result)
  }

  return (
    <VoteButtons
      {...summary}
      onVote={handleVote}
      readOnly={readOnly}
      className={className}
    />
  )
}
