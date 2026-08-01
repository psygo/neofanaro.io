import { Metadata } from "next"

import { ArticleFromDb } from "@types"

import { generateArticleMetadataHelper } from "@server"
import { get_article } from "@actions"

import { Main } from "@components/common/main"
import { CpiSuspense } from "@components/common/cpiSuspense"

import {
  DowonPairGo,
  GobanWeb,
  IngCupSuicide,
  Lang101,
  LatexBackgammon,
  LatexShogi,
  LittleKnifeGodBooks,
  Magi,
  OkaoigoAiArticles,
  OneYearInAsia,
  PostAiOpeningHierarchy,
  Pumu,
  SampleSizeAndCommonSense,
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
      return <DowonPairGo post={post} />
    case "goban-web":
      return <GobanWeb post={post} />
    case "ing-cup-suicide":
      return <IngCupSuicide post={post} />
    case "lang101":
      return <Lang101 post={post} />
    case "latex-backgammon":
      return <LatexBackgammon post={post} />
    case "latex-shogi":
      return <LatexShogi post={post} />
    case "little-knife-god-books":
      return <LittleKnifeGodBooks post={post} />
    case "magi":
      return <Magi post={post} />
    case "okaoigo-ai-articles":
      return <OkaoigoAiArticles post={post} />
    case "one-year-in-asia":
      return <OneYearInAsia post={post} />
    case "post-ai-opening-hierarchy":
      return <PostAiOpeningHierarchy post={post} />
    case "pumu":
      return <Pumu post={post} />
    case "tennozan-league":
      return <TennozanLeague post={post} />
    case "tewari-delight-2":
      return <TewariDelight2 post={post} />
    case "sample-size-and-common-sense":
      return <SampleSizeAndCommonSense post={post} />
    case "what-is-go-about":
      return <WhatIsGoAbout post={post} />
    default:
      return <></>
  }
}
