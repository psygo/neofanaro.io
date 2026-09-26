"use client"

import Link from "next/link"

import type {
  AnalyticsOverview,
  DailyPageViewRow,
  DailyViewRow,
} from "@server"

import { useLang } from "@hooks"

import { ViewsLineChart } from "@components/common/viewsLineChart"

type AnalyticsDashboardProps = {
  overview: AnalyticsOverview
  dailyViews: DailyViewRow[]
  dailyPageViews: DailyPageViewRow[]
}

function StatCard({
  label,
  value,
  formatted,
}: {
  label: string
  value: number
  formatted?: string
}) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
      <span className="text-sm text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <span className="text-2xl font-black tabular-nums">
        {formatted ?? value.toLocaleString()}
      </span>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex w-full flex-col gap-3">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </section>
  )
}

const thClasses =
  "border-b border-slate-200 px-3 py-2 text-left dark:border-slate-700"
const tdClasses = "px-3 py-2"
const tableWrapperClasses =
  "overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700"
const rowClasses =
  "divide-x divide-slate-200 odd:bg-white even:bg-slate-50 dark:divide-slate-700 dark:odd:bg-slate-900 dark:even:bg-slate-800"

export function AnalyticsDashboard({
  overview,
  dailyViews,
  dailyPageViews,
}: AnalyticsDashboardProps) {
  const lang = useLang()
  const averageViewsPerArticle =
    overview.publishedArticleCount > 0
      ? overview.totalArticleViews /
        overview.publishedArticleCount
      : 0

  return (
    <div className="flex w-full max-w-4xl flex-col gap-10">
      <h1 className="text-3xl font-black">
        {lang === "pt" ? "Analytics" : "Analytics"}
      </h1>

      <Section
        title={lang === "pt" ? "Visão geral" : "Overview"}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <StatCard
            label={
              lang === "pt"
                ? "Visualizações totais"
                : "Total article views"
            }
            value={overview.totalArticleViews}
          />
          <StatCard
            label={
              lang === "pt"
                ? "Artigos publicados"
                : "Published articles"
            }
            value={overview.publishedArticleCount}
          />
          <StatCard
            label={
              lang === "pt"
                ? "Média de visualizações por artigo"
                : "Average views per article"
            }
            value={averageViewsPerArticle}
            formatted={Math.round(
              averageViewsPerArticle,
            ).toString()}
          />
          <StatCard
            label={lang === "pt" ? "Rascunhos" : "Drafts"}
            value={overview.draftArticleCount}
          />
          <StatCard
            label={lang === "pt" ? "Jogadores" : "Players"}
            value={overview.totalPlayers}
          />
          <StatCard
            label={
              lang === "pt" ? "Moderadores" : "Moderators"
            }
            value={overview.moderatorCount}
          />
          <StatCard
            label={
              lang === "pt" ? "Comentários" : "Comments"
            }
            value={overview.totalComments}
          />
          <StatCard
            label={
              lang === "pt"
                ? "Comentários (7 dias)"
                : "Comments (7 days)"
            }
            value={overview.commentsLast7Days}
          />
          <StatCard
            label={
              lang === "pt"
                ? "Comentários (30 dias)"
                : "Comments (30 days)"
            }
            value={overview.commentsLast30Days}
          />
          <StatCard
            label={
              lang === "pt"
                ? "Votos em artigos"
                : "Article votes"
            }
            value={overview.totalArticleVotes}
          />
          <StatCard
            label={
              lang === "pt"
                ? "Votos em comentários"
                : "Comment votes"
            }
            value={overview.totalCommentVotes}
          />
          <StatCard
            label={lang === "pt" ? "Ligas" : "Leagues"}
            value={overview.totalLeagues}
          />
          <StatCard
            label={lang === "pt" ? "Partidas" : "Games"}
            value={overview.totalGames}
          />
        </div>
      </Section>

      <Section
        title={
          lang === "pt"
            ? "Visualizações do site ao longo do tempo"
            : "Site views over time"
        }
      >
        <ViewsLineChart
          dailyViews={dailyViews}
          dailyPageViews={dailyPageViews}
        />
      </Section>

      <Section
        title={
          lang === "pt"
            ? "Artigos mais vistos"
            : "Most viewed articles"
        }
      >
        <div className={tableWrapperClasses}>
          <table className="w-full text-sm">
            <thead>
              <tr className="divide-x divide-slate-200 bg-slate-100 dark:divide-slate-700 dark:bg-slate-800">
                <th className={thClasses}>
                  {lang === "pt" ? "Título" : "Title"}
                </th>
                <th className={thClasses}>
                  {lang === "pt"
                    ? "Visualizações"
                    : "Views"}
                </th>
                <th className={thClasses}>
                  {lang === "pt"
                    ? "Comentários"
                    : "Comments"}
                </th>
                <th className={thClasses}>
                  {lang === "pt" ? "Votos" : "Votes"}
                </th>
              </tr>
            </thead>
            <tbody>
              {overview.topArticlesByViews.map(
                (article) => (
                  <tr
                    key={article.id}
                    className={rowClasses}
                  >
                    <td
                      className={`${tdClasses} font-semibold`}
                    >
                      <Link
                        href={`/articles/${article.path}`}
                        className="hover:underline"
                      >
                        {lang === "pt"
                          ? article.titlePt ||
                            article.titleEn
                          : article.titleEn}
                      </Link>
                    </td>
                    <td
                      className={`${tdClasses} tabular-nums`}
                    >
                      {article.views.toLocaleString()}
                    </td>
                    <td
                      className={`${tdClasses} tabular-nums`}
                    >
                      {article.commentCount}
                    </td>
                    <td
                      className={`${tdClasses} tabular-nums`}
                    >
                      <span className="text-green-700 dark:text-green-400">
                        +{article.upvotes}
                      </span>{" "}
                      <span className="text-red-600 dark:text-red-400">
                        -{article.downvotes}
                      </span>
                    </td>
                  </tr>
                ),
              )}
              {overview.topArticlesByViews.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className={`${tdClasses} text-center text-slate-500 dark:text-slate-400`}
                  >
                    {lang === "pt"
                      ? "Nenhum artigo ainda."
                      : "No articles yet."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title={
          lang === "pt"
            ? "Artigos mais comentados"
            : "Most commented articles"
        }
      >
        <div className={tableWrapperClasses}>
          <table className="w-full text-sm">
            <thead>
              <tr className="divide-x divide-slate-200 bg-slate-100 dark:divide-slate-700 dark:bg-slate-800">
                <th className={thClasses}>
                  {lang === "pt" ? "Título" : "Title"}
                </th>
                <th className={thClasses}>
                  {lang === "pt"
                    ? "Comentários"
                    : "Comments"}
                </th>
              </tr>
            </thead>
            <tbody>
              {overview.topArticlesByComments.map(
                (article) => (
                  <tr
                    key={article.id}
                    className={rowClasses}
                  >
                    <td
                      className={`${tdClasses} font-semibold`}
                    >
                      <Link
                        href={`/articles/${article.path}`}
                        className="hover:underline"
                      >
                        {lang === "pt"
                          ? article.titlePt ||
                            article.titleEn
                          : article.titleEn}
                      </Link>
                    </td>
                    <td
                      className={`${tdClasses} tabular-nums`}
                    >
                      {article.commentCount}
                    </td>
                  </tr>
                ),
              )}
              {overview.topArticlesByComments.length ===
                0 && (
                <tr>
                  <td
                    colSpan={2}
                    className={`${tdClasses} text-center text-slate-500 dark:text-slate-400`}
                  >
                    {lang === "pt"
                      ? "Nenhum comentário ainda."
                      : "No comments yet."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title={
          lang === "pt"
            ? "Maiores comentaristas"
            : "Top commenters"
        }
      >
        <div className={tableWrapperClasses}>
          <table className="w-full text-sm">
            <thead>
              <tr className="divide-x divide-slate-200 bg-slate-100 dark:divide-slate-700 dark:bg-slate-800">
                <th className={thClasses}>
                  {lang === "pt" ? "Jogador" : "Player"}
                </th>
                <th className={thClasses}>
                  {lang === "pt"
                    ? "Comentários"
                    : "Comments"}
                </th>
              </tr>
            </thead>
            <tbody>
              {overview.topCommenters.map((commenter) => (
                <tr
                  key={commenter.playerId}
                  className={rowClasses}
                >
                  <td
                    className={`${tdClasses} font-semibold`}
                  >
                    <Link
                      href={`/player/${commenter.playerId}`}
                      className="hover:underline"
                    >
                      {commenter.name || commenter.nick}
                    </Link>
                  </td>
                  <td
                    className={`${tdClasses} tabular-nums`}
                  >
                    {commenter.commentCount}
                  </td>
                </tr>
              ))}
              {overview.topCommenters.length === 0 && (
                <tr>
                  <td
                    colSpan={2}
                    className={`${tdClasses} text-center text-slate-500 dark:text-slate-400`}
                  >
                    {lang === "pt"
                      ? "Nenhum comentário ainda."
                      : "No comments yet."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  )
}
