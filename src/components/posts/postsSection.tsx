"use client"

import { useState } from "react"

import { get_articles } from "@actions"

import { useLang } from "@hooks/useLang"

import { useArticles } from "@providers/articlesProvider"

import { MultiSelect } from "@components/common/multiSelect"

import { PostCard } from "./postCard"

export function PostsSection() {
  const lang = useLang()
  const { articles, setArticles, allTags } = useArticles()
  const [selectedTags, setSelectedTags] = useState<
    string[]
  >([])

  async function handleTagsChange(tags: string[]) {
    setSelectedTags(tags)
    const filtered = await get_articles(
      undefined,
      false,
      tags.length > 0 ? tags : undefined,
    )
    if (filtered) setArticles(filtered)
  }

  return (
    <section className="flex flex-col items-center gap-3">
      <div className="flex w-full flex-row justify-between px-6">
        <h2 className="text-2xl font-black">
          {lang === "pt" ? "Artigos" : "Articles"}
        </h2>
        <MultiSelect
          options={allTags}
          selected={selectedTags}
          onChange={handleTagsChange}
          placeholder={
            lang === "pt"
              ? "Todos os Tópicos"
              : "All topics"
          }
        />
      </div>
      <div className="flex flex-col gap-3">
        {articles.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </section>
  )
}
