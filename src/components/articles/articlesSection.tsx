"use client"

import { useEffect, useState } from "react"

import { VoteSummary } from "@types"

import {
  get_article_votes_batch,
  get_articles,
} from "@actions"

import { useLang } from "@hooks/useLang"

import { useArticles } from "@providers/articlesProvider"

import { MultiSelect } from "@components/common/multiSelect"

import { ArticleCard } from "./articleCard"

export function ArticlesSection() {
  const lang = useLang()
  const { articles, setArticles, allTags } = useArticles()
  const [selectedTags, setSelectedTags] = useState<
    string[]
  >([])
  const [votes, setVotes] = useState<
    Record<number, VoteSummary>
  >({})

  useEffect(() => {
    let cancelled = false

    get_article_votes_batch(
      articles.map((post) => post.id),
    ).then((data) => {
      if (!cancelled) setVotes(data)
    })

    return () => {
      cancelled = true
    }
  }, [articles])

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
        {articles.map((post) => (
          <ArticleCard
            key={post.id}
            post={post}
            votes={votes[post.id]}
          />
        ))}
      </div>
    </section>
  )
}
