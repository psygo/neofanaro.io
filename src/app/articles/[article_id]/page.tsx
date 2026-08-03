import { Metadata } from "next"

import { ArticleFromDb } from "@types"

import { generateArticleMetadataHelper } from "@server"
import { get_article } from "@actions"

import { Main } from "@components/common/main"
import { CpiSuspense } from "@components/common/cpiSuspense"

import {
  DowonPairGo,
  GobanWeb,
  Haengma3,
  IngCupSuicide,
  Lang101,
  LatexBackgammon,
  LatexShogi,
  LittleKnifeGodBooks,
  Magi,
  MinCJKForGo,
  OkaoigoAiArticles,
  OneYearInAsia,
  PostAiOpeningHierarchy,
  Pumu,
  SampleSizeAndCommonSense,
  Sugeundaesajeon,
  TennozanLeague,
  TewariDelight2,
  WhatIsGoAbout,
} from "@components/articles/entries/exports"

type ArticlePageProps = {
  params: Promise<{ article_id: string }>
  searchParams: Promise<{ lang?: string }>
}

export async function generateMetadata({
  params,
  searchParams,
}: ArticlePageProps): Promise<Metadata> {
  const { article_id } = await params
  const { lang } = await searchParams

  return generateArticleMetadataHelper(article_id, lang)
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { article_id } = await params

  const article = await get_article(article_id)

  return (
    <Main>
      <CpiSuspense>
        {article ? (
          whichArticle(article_id, article)
        ) : (
          <></>
        )}
      </CpiSuspense>
    </Main>
  )
}

function whichArticle(path: string, post: ArticleFromDb) {
  switch (path) {
    case "dowon-pairgo":
      return <DowonPairGo article={post} />
    case "goban-web":
      return <GobanWeb article={post} />
    case "haengma3":
      return <Haengma3 article={post} />
    case "ing-cup-suicide":
      return <IngCupSuicide article={post} />
    case "lang101":
      return <Lang101 article={post} />
    case "latex-backgammon":
      return <LatexBackgammon article={post} />
    case "latex-shogi":
      return <LatexShogi article={post} />
    case "little-knife-god-books":
      return <LittleKnifeGodBooks article={post} />
    case "magi":
      return <Magi article={post} />
    case "min-cjk-for-go":
      return <MinCJKForGo article={post} />
    case "okaoigo-ai-articles":
      return <OkaoigoAiArticles article={post} />
    case "one-year-in-asia":
      return <OneYearInAsia article={post} />
    case "post-ai-opening-hierarchy":
      return <PostAiOpeningHierarchy article={post} />
    case "pumu":
      return <Pumu article={post} />
    case "tennozan-league":
      return <TennozanLeague article={post} />
    case "tewari-delight-2":
      return <TewariDelight2 article={post} />
    case "sample-size-and-common-sense":
      return <SampleSizeAndCommonSense article={post} />
    case "sugeundaesajeon":
      return <Sugeundaesajeon article={post} />
    case "what-is-go-about":
      return <WhatIsGoAbout article={post} />
    default:
      return <></>
  }
}
