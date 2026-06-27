import "flag-icons/css/flag-icons.min.css"

import { get_posts } from "@server/actions/posts/get_posts"

import { Main } from "@components/common/main"
import { PostsSection } from "@components/posts/postsSection"
import { CpiSuspense } from "@components/common/cpiSuspense"

export default async function Posts() {
  const posts = await get_posts()
  console.log(posts)

  return (
    <Main>
      <CpiSuspense>
        <PostsSection />
      </CpiSuspense>
    </Main>
  )
}
