"use client"

import { useTransition } from "react"

import { update_site_theme } from "@actions"

import { SiteTheme } from "@types"

import { useLang } from "@hooks"

import { useSiteTheme } from "@components/common/siteThemeProvider"
import { Select } from "@components/common/select"

export function SiteThemeForm() {
  const lang = useLang()
  const { siteTheme, setSiteTheme } = useSiteTheme()
  const [, startTransition] = useTransition()

  function handleChange(newValue: string) {
    const newSiteTheme = newValue as SiteTheme
    setSiteTheme(newSiteTheme)
    startTransition(() => {
      update_site_theme(newSiteTheme)
    })
  }

  return (
    <div className="flex w-full flex-col gap-1">
      <label className="font-semibold text-slate-700 dark:text-slate-300">
        {lang === "pt" ? "Tema" : "Theme"}
      </label>
      <Select
        value={siteTheme}
        onChange={handleChange}
        options={[
          {
            value: "default",
            label: lang === "pt" ? "Padrão" : "Default",
          },
          {
            value: "neobrutalist",
            label: "Neobrutalist",
          },
        ]}
      />
    </div>
  )
}
