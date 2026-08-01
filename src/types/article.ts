export type ArticleFromDb = {
  id: number
  path: string
  date: string
  titleEn: string
  titlePt: string
  descriptionEn: string
  descriptionPt: string
  views: number
  tags: string[]
  draft: boolean
}

export type BlogPostProps = {
  post: ArticleFromDb
}
