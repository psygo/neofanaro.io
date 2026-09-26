"use client"

import { useState, useTransition } from "react"

import { update_article_font_size } from "@actions"

import { ArticleFontSize } from "@types"

import { useLang } from "@hooks"

import { Select } from "@components/common/select"

export function ArticleFontSizeForm({
  articleFontSize,
}: {
  articleFontSize: string
}) {
  const lang = useLang()
  const knownSizes: ArticleFontSize[] = [
    "small",
    "medium",
    "large",
  ]
  const [value, setValue] = useState<ArticleFontSize>(
    knownSizes.includes(articleFontSize as ArticleFontSize)
      ? (articleFontSize as ArticleFontSize)
      : "medium",
  )
  const [, startTransition] = useTransition()

  function handleChange(newValue: string) {
    const newSize = newValue as ArticleFontSize
    setValue(newSize)
    startTransition(() => {
      update_article_font_size(newSize)
    })
  }

  return (
    <div className="flex w-full flex-col gap-1">
      <label className="font-semibold text-slate-700 dark:text-slate-300">
        {lang === "pt"
          ? "Tamanho da fonte dos artigos"
          : "Article font size"}
      </label>
      <Select
        value={value}
        onChange={handleChange}
        options={[
          {
            value: "small",
            label: lang === "pt" ? "Pequena" : "Small",
          },
          {
            value: "medium",
            label: lang === "pt" ? "Média" : "Medium",
          },
          {
            value: "large",
            label: lang === "pt" ? "Grande" : "Large",
          },
        ]}
      />
    </div>
  )
}
