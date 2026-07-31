"use client"

import { usePathname } from "next/navigation"

import { useLang } from "@hooks"

import { LangLink } from "@components/common/langLink"

const tabs = [
  {
    href: "/teacher/presentation",
    label: { en: "Teaching", pt: "Aulas" },
  },
  {
    href: "/teacher/league",
    label: { en: "League", pt: "Liga" },
  },
]

export function TeacherTabs() {
  const pathname = usePathname() || "/"
  const lang = useLang()

  const activeIndex = Math.max(
    tabs.findIndex((tab) => pathname.includes(tab.href)),
    0,
  )

  return (
    <div className="relative mx-auto flex w-50 gap-2 rounded-full bg-slate-100 p-1.5 ring-1 ring-slate-200">
      <div
        className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-slate-950/5 transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      {tabs.map((tab) => (
        <LangLink
          key={tab.href}
          href={tab.href}
          className="relative z-10 flex-1 rounded-full px-2 py-1.5 text-center text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-200/60"
        >
          {lang === "pt" ? tab.label.pt : tab.label.en}
        </LangLink>
      ))}
    </div>
  )
}
