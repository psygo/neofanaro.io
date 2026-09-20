import { get_popular_articles_by_category } from "@actions"

import { Main } from "@components/common/main"
import { PopularArticlesSection } from "@components/home/popularArticlesSection"
import { PresentationSection } from "@components/home/presentationSection"
import { CpiSuspense } from "@components/common/cpiSuspense"

import { GoProfPresentationSection } from "./teacher/presentation/presentation"
import { SoftwareWorkSection } from "./software/software"

export default async function Home() {
  const popularArticles =
    await get_popular_articles_by_category()

  return (
    <Main>
      <CpiSuspense>
        <PresentationSection />
        <SoftwareWorkSection />
        <GoProfPresentationSection />
        <PopularArticlesSection
          articles={popularArticles}
        />
      </CpiSuspense>
    </Main>
  )
}
