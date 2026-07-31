"use client"

import { usePathname } from "next/navigation"

import { useLang } from "@hooks"

import { LangLink } from "@components/common/langLink"

const activeTabClasses = "bg-slate-950/5 text-slate-950"
const inactiveTabClasses = "bg-transparent text-slate-700"

type TeacherTabProps = {
  href: string
  label: string
}

function TeacherTab({ href, label }: TeacherTabProps) {
  const pathname = usePathname() || "/"
  const isActive = pathname.includes(href)

  return (
    <LangLink
      href={href}
      className={`${isActive ? activeTabClasses : inactiveTabClasses} rounded-full px-4 py-1.5 text-sm font-semibold transition duration-300 hover:bg-slate-200`}
    >
      {label}
    </LangLink>
  )
}

export function TeacherTabs() {
  const lang = useLang()

  return (
    <div className="mx-auto flex gap-1.5 rounded-full bg-slate-100 p-1.5 ring-1 ring-slate-200">
      <TeacherTab
        href="/teacher/presentation"
        label={lang === "pt" ? "Aulas" : "Teaching"}
      />
      <TeacherTab
        href="/teacher/league"
        label={lang === "pt" ? "Liga" : "League"}
      />
    </div>
  )
}
