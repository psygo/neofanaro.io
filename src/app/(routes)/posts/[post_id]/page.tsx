import { articlesDb } from "@posts"

import { Post } from "@components"

type ArticlePageProps = {
  params: { post_id: string }
}

export default function ArticlePage({
  params,
}: ArticlePageProps) {
  const article = articlesDb[params.post_id]

  if (!article) return

  return <Post postData={article} />
}
