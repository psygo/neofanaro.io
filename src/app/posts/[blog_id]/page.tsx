import { Metadata } from "next"

import { PostFromDb } from "@types"

import { generatePostMetadataHelper } from "@server"
import { get_post } from "@actions"

import { Main } from "@components/common/main"
import { CpiSuspense } from "@components/common/cpiSuspense"

import {
  DowonPairGo,
  LatexShogi,
  LittleKnifeGodBooks,
  Magi,
  OkaoigoAiArticles,
  OneYearInAsia,
  PostAiOpeningHierarchy,
  SampleSizeAndCommonSense,
  WhatIsGoAbout,
} from "@components/posts/articles/exports"

type BlogPageProps = {
  params: Promise<{ blog_id: string }>
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { blog_id } = await params

  return generatePostMetadataHelper(blog_id)
}

export default async function BlogPost({
  params,
}: BlogPageProps) {
  const { blog_id } = await params

  const post = await get_post(blog_id)

  return (
    <Main>
      <CpiSuspense>
        {post ? whichBlogPost(blog_id, post) : <></>}
      </CpiSuspense>
    </Main>
  )
}

function whichBlogPost(path: string, post: PostFromDb) {
  switch (path) {
    case "little-knife-god-books":
      return <LittleKnifeGodBooks post={post} />
    case "post-ai-opening-hierarchy":
      return <PostAiOpeningHierarchy post={post} />
    case "sample-size-and-common-sense":
      return <SampleSizeAndCommonSense post={post} />
    case "what-is-go-about":
      return <WhatIsGoAbout post={post} />
    case "magi":
      return <Magi post={post} />
    case "one-year-in-asia":
      return <OneYearInAsia post={post} />
    case "dowon-pairgo":
      return <DowonPairGo post={post} />
    case "okaoigo-ai-articles":
      return <OkaoigoAiArticles post={post} />
    case "latex-shogi":
      return <LatexShogi post={post} />
    default:
      return <></>
  }
}
