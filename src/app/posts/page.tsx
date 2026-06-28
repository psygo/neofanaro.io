import "flag-icons/css/flag-icons.min.css"

import { Main } from "@components/common/main"
import { PostsSection } from "@components/posts/postsSection"
import { CpiSuspense } from "@components/common/cpiSuspense"
import { PostsProvider } from "../../providers/postsProvider"
import { get_posts } from "../../server/actions/posts/get_posts"

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
