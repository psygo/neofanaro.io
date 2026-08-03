import { VoteSummary } from "./vote"

export type ArticleFromDb = {
  id: number
  path: string
  date: string
  langs: string[]
  titleEn: string
  titlePt: string
  descriptionEn: string
  descriptionPt: string
  views: number
  tags: string[]
  draft: boolean
}

export type ArticleWithVotes = ArticleFromDb & VoteSummary

export type ArticleProps = {
  article: ArticleFromDb
}
