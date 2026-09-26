import { get_articles, get_articles_stats } from "@actions"

import { ArticlesProvider } from "@providers"

import { Main } from "@components/common/main"
import { ArticlesSection } from "@components/articles/articlesSection"
import { ArticlesStatsHeader } from "@components/articles/articlesStatsHeader"
import { CpiSuspense } from "@components/common/cpiSuspense"

type Props = {
  searchParams: Promise<{ draft?: string; lang?: string }>
}

export default async function Articles({
  searchParams,
}: Props) {
  const { draft, lang } = await searchParams
  const [articles, stats] = await Promise.all([
    get_articles(undefined, draft === "true"),
    get_articles_stats(),
  ])

  return (
    <Main>
      <CpiSuspense>
        <ArticlesStatsHeader
          stats={stats}
          lang={lang || "en"}
        />
        <ArticlesProvider initialArticles={articles || []}>
          <ArticlesSection />
        </ArticlesProvider>
      </CpiSuspense>
    </Main>
  )
}
