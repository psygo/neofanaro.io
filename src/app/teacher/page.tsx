import { redirect } from "next/navigation"

type TeacherPageProps = {
  searchParams: Promise<{ lang?: string }>
}

export default async function TeacherPage({
  searchParams,
}: TeacherPageProps) {
  const { lang } = await searchParams
  redirect(
    `/teacher/presentation${
      lang && lang !== "en" ? `?lang=${lang}` : ""
    }`,
  )
}
