"use client"

import { useTransition } from "react"

import { useTheme } from "next-themes"

import { update_theme } from "@actions"

import { ThemePreference } from "@types"

import { useLang } from "@hooks"

import { Select } from "@components/common/select"

export function ThemeForm() {
  const lang = useLang()
  const { theme, setTheme } = useTheme()
  const [, startTransition] = useTransition()

  function handleChange(newValue: string) {
    const newTheme = newValue as ThemePreference
    setTheme(newTheme)
    startTransition(() => {
      update_theme(newTheme)
    })
  }

  return (
    <div className="flex w-full flex-col gap-1">
      <label className="font-semibold text-slate-700 dark:text-slate-300">
        {lang === "pt" ? "Tema" : "Theme"}
      </label>
      <Select
        value={theme ?? "system"}
        onChange={handleChange}
        options={[
          {
            value: "system",
            label: lang === "pt" ? "Sistema" : "System",
          },
          {
            value: "light",
            label: lang === "pt" ? "Claro" : "Light",
          },
          {
            value: "dark",
            label: lang === "pt" ? "Escuro" : "Dark",
          },
        ]}
      />
    </div>
  )
}
