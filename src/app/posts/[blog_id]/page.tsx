import { Metadata } from "next"

import { get_post } from "@server/actions/posts/get_posts"

import { PostFromDb } from "../../../types/post"

import { generatePostMetadataHelper } from "@server/utils/generatePostMetadataHelper"

import { Main } from "@components/common/main"
import { CpiSuspense } from "@components/common/cpiSuspense"
import { PostLittleKnifeGodBooks } from "@components/posts/articles/postLittleKnifeGodBooks"
import { PostAiOpeningHierarchy } from "@components/posts/articles/postAiOpeningHierarchy"
import { SampleSizeAndCommonSense } from "@components/posts/articles/sampleSizeAndCommonSense"
import { WhatIsGoAbout } from "@components/posts/articles/whatIsGoAbout"

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
  console.log(blog_id)
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
    default:
      return <></>
  }
}
