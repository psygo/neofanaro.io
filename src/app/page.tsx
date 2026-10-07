import {
  get_popular_articles_by_category,
  get_software_work_github_stars,
} from "@actions"

import { Main } from "@components/common/main"
import { ArticlesStatsHeader } from "@components/articles/articlesStatsHeader"
import { PopularArticlesSection } from "@components/home/popularArticlesSection"
import { PresentationSection } from "@components/home/presentationSection"
import { CpiSuspense } from "@components/common/cpiSuspense"

import { GoProfPresentationSection } from "./teacher/presentation/presentation"
import { SoftwareWorkSection } from "./software/software"

export default async function Home() {
  const popularArticles =
    await get_popular_articles_by_category()
  const softwareWorkStars =
    await get_software_work_github_stars()

  return (
    <Main>
      <CpiSuspense>
        <PresentationSection />
        <SoftwareWorkSection stars={softwareWorkStars} />
        <GoProfPresentationSection />
        {/* <ArticlesStatsHeader /> */}
        <PopularArticlesSection
          articles={popularArticles}
        />
      </CpiSuspense>
    </Main>
  )
}
