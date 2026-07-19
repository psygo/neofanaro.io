import { get_posts } from "@actions"

import { PostsProvider } from "@providers"

import { Main } from "@components/common/main"
import { PostsSection } from "@components/posts/postsSection"
import { CpiSuspense } from "@components/common/cpiSuspense"

type Props = {
  searchParams: Promise<{ draft?: string }>
}

export default async function Posts({ searchParams }: Props) {
  const { draft } = await searchParams
  const posts = await get_posts(undefined, draft === "true")

  return (
    <Main>
      <CpiSuspense>
        <PostsProvider initialPosts={posts || []}>
          <PostsSection />
        </PostsProvider>
      </CpiSuspense>
    </Main>
  )
}
