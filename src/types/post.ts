export type PostFromDb = {
  id: number
  path: string
  date: string
  title: string
  description: string
  lang: string
  views: number
  tags: string[]
  draft: boolean
}

export type BlogPostProps = {
  post: PostFromDb
}
