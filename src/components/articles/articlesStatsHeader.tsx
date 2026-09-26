"use client"

import { useEffect, useRef, useState } from "react"

import { get_articles_stats } from "@actions"

import { ArticlesStats } from "@server"

import { useLang } from "@hooks"

import { ArticlesViewsChartSection } from "./articlesViewsChartSection"

function StatCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex w-36 flex-col gap-1 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
      <span className="text-sm text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <span className="text-2xl font-black tabular-nums">
        {value}
      </span>
    </div>
  )
}

export function ArticlesStatsHeader() {
  const lang = useLang()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [stats, setStats] = useState<ArticlesStats | null>(
    null,
  )

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          get_articles_stats().then(setStats)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" },
    )
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const totalViews = stats
    ? stats.totalArticleViews + stats.totalNonArticleViews
    : 0
  const averageViews =
    stats && stats.articleCount > 0
      ? stats.totalArticleViews / stats.articleCount
      : 0

  return (
    <div
      ref={sectionRef}
      className="flex w-full flex-col items-center gap-6 px-6"
    >
      <h2 className="text-3xl font-black">
        {lang === "pt"
          ? "Estatísticas do site"
          : "Site stats"}
      </h2>
      {stats && (
        <div className="flex flex-wrap justify-center gap-3">
          <StatCard
            label={
              lang === "pt"
                ? "Visualizações de artigos"
                : "Total article views"
            }
            value={stats.totalArticleViews.toLocaleString()}
          />
          <StatCard
            label={
              lang === "pt"
                ? "Visualizações de outras páginas"
                : "Total non-article views"
            }
            value={stats.totalNonArticleViews.toLocaleString()}
          />
          <StatCard
            label={
              lang === "pt"
                ? "Visualizações totais"
                : "Total views"
            }
            value={totalViews.toLocaleString()}
          />
          <StatCard
            label={lang === "pt" ? "Artigos" : "Articles"}
            value={stats.articleCount.toLocaleString()}
          />
          <StatCard
            label={
              lang === "pt"
                ? "Média por artigo"
                : "Average views per article"
            }
            value={Math.round(averageViews).toString()}
          />
        </div>
      )}
      <ArticlesViewsChartSection />
    </div>
  )
}
