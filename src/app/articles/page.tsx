import { get_articles } from "@actions"

import { ArticlesProvider } from "@providers"

import { Main } from "@components/common/main"
import { PostsSection } from "@components/posts/postsSection"
import { CpiSuspense } from "@components/common/cpiSuspense"

type Props = {
  searchParams: Promise<{ draft?: string }>
}

export default async function Articles({
  searchParams,
}: Props) {
  const { draft } = await searchParams
  const articles = await get_articles(
    undefined,
    draft === "true",
  )

  return (
    <Main>
      <CpiSuspense>
        <ArticlesProvider initialArticles={articles || []}>
          <PostsSection />
        </ArticlesProvider>
      </CpiSuspense>
    </Main>
  )
}
