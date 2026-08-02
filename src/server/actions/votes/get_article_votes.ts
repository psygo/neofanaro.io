"use server"

import { VoteSummary } from "@types"

import { getCurrentPlayer } from "@server/auth/session"
import { getArticleVoteSummary } from "@server/utils/voteSummary"

export async function get_article_votes(
  articleId: number,
): Promise<VoteSummary> {
  const player = await getCurrentPlayer()
  return getArticleVoteSummary(articleId, player?.id)
}
