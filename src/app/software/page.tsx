import { get_software_work_github_stars } from "@actions"

import { Main } from "@/src/components/common/main"

import { SoftwareWorkSection } from "./software"

export default async function Software() {
  const stars = await get_software_work_github_stars()

  return (
    <Main>
      <SoftwareWorkSection stars={stars} />
    </Main>
  )
}
