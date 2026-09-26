import { ArticlesStats } from "@server"

import { ArticlesViewsChartSection } from "./articlesViewsChartSection"

function StatCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
      <span className="text-sm text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <span className="text-2xl font-black tabular-nums">
        {value}
      </span>
    </div>
  )
}

export function ArticlesStatsHeader({
  stats,
  lang,
}: {
  stats: ArticlesStats
  lang: string
}) {
  const averageViews =
    stats.articleCount > 0
      ? stats.totalViews / stats.articleCount
      : 0

  return (
    <div className="flex w-full flex-col gap-3 px-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard
          label={
            lang === "pt"
              ? "Visualizações totais"
              : "Total views"
          }
          value={stats.totalViews.toLocaleString()}
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
          value={averageViews.toFixed(1)}
        />
      </div>
      <ArticlesViewsChartSection />
    </div>
  )
}
