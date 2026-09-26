import { Metadata } from "next"
import { redirect } from "next/navigation"

import {
  get_analytics_overview,
  get_daily_page_views,
  get_daily_views,
  getCurrentPlayer,
} from "@server"

import { AnalyticsDashboard } from "./analyticsDashboard"

export const metadata: Metadata = {
  title: "Analytics",
}

export default async function AnalyticsPage() {
  const player = await getCurrentPlayer()
  if (!player?.moderator) redirect("/")

  const [overview, dailyViews, dailyPageViews] =
    await Promise.all([
      get_analytics_overview(),
      get_daily_views(),
      get_daily_page_views(),
    ])

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <AnalyticsDashboard
        overview={overview}
        dailyViews={dailyViews}
        dailyPageViews={dailyPageViews}
      />
    </div>
  )
}
