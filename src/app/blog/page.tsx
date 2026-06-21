import { Suspense } from "react"

import "flag-icons/css/flag-icons.min.css"

import { Main } from "@/src/components/common/main"

import { ArticlesSection } from "./blog"

export default function Blog() {
  return (
    <Main>
      <Suspense fallback={<p>Loading…</p>}>
        <ArticlesSection />
      </Suspense>
    </Main>
  )
}
