import { get_posts } from "@actions"

import { PostsProvider } from "@providers"

import { Main } from "@components/common/main"
import { PostsSection } from "@components/posts/postsSection"
import { CpiSuspense } from "@components/common/cpiSuspense"

export default async function Posts() {
  const posts = await get_posts()

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
