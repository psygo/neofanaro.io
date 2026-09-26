"use client"

import { useState, useTransition } from "react"

import { update_article_font } from "@actions"

import { ArticleFont } from "@types"

import { useLang } from "@hooks"

import { Select } from "@components/common/select"

export function ArticleFontForm({
  articleFont,
}: {
  articleFont: string
}) {
  const lang = useLang()
  const knownFonts: ArticleFont[] = [
    "geist",
    "latex",
    "newcm",
    "garamond",
  ]
  const [value, setValue] = useState<ArticleFont>(
    knownFonts.includes(articleFont as ArticleFont)
      ? (articleFont as ArticleFont)
      : "geist",
  )
  const [, startTransition] = useTransition()

  function handleChange(newValue: string) {
    const newFont = newValue as ArticleFont
    setValue(newFont)
    startTransition(() => {
      update_article_font(newFont)
    })
  }

  return (
    <div className="flex w-full flex-col gap-1">
      <label className="font-semibold text-slate-700 dark:text-slate-300">
        {lang === "pt"
          ? "Fonte dos artigos"
          : "Article font"}
      </label>
      <Select
        value={value}
        onChange={handleChange}
        options={[
          {
            value: "geist",
            label: "Geist",
          },
          {
            value: "latex",
            label: "LaTeX",
          },
          {
            value: "newcm",
            label: "New Computer Modern",
          },
          {
            value: "garamond",
            label: "Adobe Garamond Pro",
          },
        ]}
      />
    </div>
  )
}
