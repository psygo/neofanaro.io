"use client"

import { useState } from "react"

import {
  DailyPageViewRow,
  get_daily_page_views,
} from "@actions/analytics/get_daily_page_views"
import {
  DailyViewRow,
  get_daily_views,
} from "@actions/analytics/get_daily_views"

import { useLang } from "@hooks"

import { ViewsLineChart } from "@components/common/viewsLineChart"

export function ArticlesViewsChartSection() {
  const lang = useLang()
  const [expanded, setExpanded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<{
    dailyViews: DailyViewRow[]
    dailyPageViews: DailyPageViewRow[]
  } | null>(null)

  async function handleToggle() {
    const next = !expanded
    setExpanded(next)
    if (next && !data) {
      setLoading(true)
      const [dailyViews, dailyPageViews] =
        await Promise.all([
          get_daily_views(),
          get_daily_page_views(),
        ])
      setData({ dailyViews, dailyPageViews })
      setLoading(false)
    }
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
      >
        {lang === "pt"
          ? "Visualizações ao longo do tempo"
          : "Views over time"}
        <svg
          className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {expanded &&
        (loading || !data ? (
          <div className="flex h-32 w-full items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            {lang === "pt" ? "Carregando…" : "Loading…"}
          </div>
        ) : (
          <ViewsLineChart
            dailyViews={data.dailyViews}
            dailyPageViews={data.dailyPageViews}
          />
        ))}
    </div>
  )
}
