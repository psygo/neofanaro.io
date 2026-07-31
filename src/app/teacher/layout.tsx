import { WithReactChildren } from "@types"

import { Main } from "@components/common/main"
import { CpiSuspense } from "@components/common/cpiSuspense"

import { TeacherTabs } from "./teacherTabs"

export default function TeacherLayout({
  children,
}: WithReactChildren) {
  return (
    <Main>
      <CpiSuspense>
        <TeacherTabs />
        {children}
      </CpiSuspense>
    </Main>
  )
}
