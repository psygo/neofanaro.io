export type CommentFromDb = {
  id: number
  articleId: number
  playerId: number
  content: string
  createdAt: Date
}

export type CommentWithAuthor = CommentFromDb & {
  playerName: string
  playerNick: string
}

export type CommentWithArticle = CommentFromDb & {
  articlePath: string
  articleTitleEn: string
  articleTitlePt: string
}
