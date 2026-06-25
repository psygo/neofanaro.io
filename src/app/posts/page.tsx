import "flag-icons/css/flag-icons.min.css"

import { Main } from "@components/common/main"

import { PostsSection } from "@components/posts/postsSection"
import { CpiSuspense } from "@components/common/cpiSuspense"

export default function Posts() {
  return (
    <Main>
      <CpiSuspense>
        <PostsSection />
      </CpiSuspense>
    </Main>
  )
}
