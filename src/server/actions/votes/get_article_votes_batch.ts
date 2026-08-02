"use server"

import { VoteSummary } from "@types"

import { getCurrentPlayer } from "@server/auth/session"
import { getArticleVoteSummaries } from "@server/utils/voteSummary"

export async function get_article_votes_batch(
  articleIds: number[],
): Promise<Record<number, VoteSummary>> {
  const player = await getCurrentPlayer()
  const summaries = await getArticleVoteSummaries(
    articleIds,
    player?.id,
  )

  return Object.fromEntries(summaries)
}
