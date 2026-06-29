import { Metadata } from "next"

import { PostFromDb } from "@types"

import { generatePostMetadataHelper } from "@server"
import { get_post } from "@actions"

import { Main } from "@components/common/main"
import { CpiSuspense } from "@components/common/cpiSuspense"
import { PostLittleKnifeGodBooks } from "@components/posts/articles/postLittleKnifeGodBooks"
import { PostAiOpeningHierarchy } from "@components/posts/articles/postAiOpeningHierarchy"
import { SampleSizeAndCommonSense } from "@components/posts/articles/sampleSizeAndCommonSense"
import { WhatIsGoAbout } from "@components/posts/articles/whatIsGoAbout"
import { Magi } from "@components/posts/articles/magi"

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
      return <PostLittleKnifeGodBooks post={post} />
    case "post-ai-opening-hierarchy":
      return <PostAiOpeningHierarchy post={post} />
    case "sample-size-and-common-sense":
      return <SampleSizeAndCommonSense post={post} />
    case "what-is-go-about":
      return <WhatIsGoAbout post={post} />
    case "magi":
      return <Magi post={post} />
    default:
      return <></>
  }
}
