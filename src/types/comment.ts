import { VoteSummary } from "./vote"

export type CommentFromDb = {
  id: number
  articleId: number
  playerId: number
  content: string
  createdAt: Date
  editedAt: Date | null
}

export type CommentWithAuthor = CommentFromDb &
  VoteSummary & {
    playerName: string
    playerNick: string
  }

export type CommentWithArticle = CommentFromDb & {
  articlePath: string
  articleTitleEn: string
  articleTitlePt: string
}
