import { get_articles } from "@actions"

import { ArticlesProvider } from "@providers"

import { Main } from "@components/common/main"
import { ArticlesSection } from "@components/articles/articlesSection"
import { CpiSuspense } from "@components/common/cpiSuspense"

type Props = {
  searchParams: Promise<{ draft?: string; lang?: string }>
}

export default async function Articles({
  searchParams,
}: Props) {
  const { draft } = await searchParams
  // "?draft" alone (no "=true") still means true — Next hands that
  // through as an empty string, not undefined, so only an explicit
  // "false" should actually disable it.
  const includeDrafts =
    draft !== undefined && draft !== "false"
  const articles = await get_articles(
    undefined,
    includeDrafts,
  )

  return (
    <Main>
      <CpiSuspense>
        <ArticlesProvider initialArticles={articles || []}>
          <ArticlesSection />
        </ArticlesProvider>
      </CpiSuspense>
    </Main>
  )
}
