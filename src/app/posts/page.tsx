import { Suspense } from "react"

import "flag-icons/css/flag-icons.min.css"

import { Main } from "@components/common/main"

import { PostsSection } from "@components/posts/postsSection"

export default function Posts() {
  return (
    <Main>
      <Suspense fallback={<p>Loading…</p>}>
        <PostsSection />
      </Suspense>
    </Main>
  )
}
