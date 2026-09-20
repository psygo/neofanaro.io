"use client"

import { useState } from "react"

import { get_articles } from "@actions"

import { OrderBy, SortDirection } from "@types"

import { useLang } from "@hooks/useLang"

import { useArticles } from "@providers/articlesProvider"

import { Modal } from "@components/common/modal"
import { MultiSelect } from "@components/common/multiSelect"
import { Select } from "@components/common/select"

import { ArticleCard } from "./articleCard"

export function ArticlesSection() {
  const lang = useLang()
  const { articles, setArticles, allTags } = useArticles()
  const [selectedTags, setSelectedTags] = useState<
    string[]
  >([])
  const [orderBy, setOrderBy] = useState(OrderBy.date)
  const [direction, setDirection] =
    useState<SortDirection>("desc")
  const [filtersOpen, setFiltersOpen] = useState(false)

  async function refetch(
    tags: string[],
    newOrderBy: OrderBy,
    newDirection: SortDirection,
  ) {
    const filtered = await get_articles(
      newOrderBy,
      false,
      tags.length > 0 ? tags : undefined,
      newDirection,
    )
    if (filtered) setArticles(filtered)
  }

  function handleTagsChange(tags: string[]) {
    setSelectedTags(tags)
    refetch(tags, orderBy, direction)
  }

  function handleOrderByChange(value: string) {
    const newOrderBy =
      value === "views" ? OrderBy.views : OrderBy.date
    setOrderBy(newOrderBy)
    refetch(selectedTags, newOrderBy, direction)
  }

  function handleDirectionChange(value: string) {
    const newDirection = value as SortDirection
    setDirection(newDirection)
    refetch(selectedTags, orderBy, newDirection)
  }

  return (
    <section className="flex flex-col items-center gap-3">
      <div className="flex w-full flex-row items-center justify-between px-6">
        <h2 className="text-2xl font-black">
          {lang === "pt" ? "Artigos" : "Articles"}
        </h2>
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          title={lang === "pt" ? "Filtros" : "Filters"}
          className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-600 hover:bg-gray-100"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
          </svg>
        </button>
      </div>
      <Modal
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        title={lang === "pt" ? "Filtros" : "Filters"}
      >
        <Select
          value={
            orderBy === OrderBy.views ? "views" : "date"
          }
          onChange={handleOrderByChange}
          options={[
            {
              value: "date",
              label: lang === "pt" ? "Data" : "Date",
            },
            {
              value: "views",
              label:
                lang === "pt" ? "Visualizações" : "Views",
            },
          ]}
        />
        <Select
          value={direction}
          onChange={handleDirectionChange}
          options={[
            {
              value: "desc",
              label:
                lang === "pt"
                  ? "Decrescente"
                  : "Descending",
            },
            {
              value: "asc",
              label:
                lang === "pt" ? "Crescente" : "Ascending",
            },
          ]}
        />
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
      </Modal>
      <div className="flex flex-col gap-3">
        {articles.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
