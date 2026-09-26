"use client"

import { useState } from "react"

import type {
  DailyPageViewRow,
  DailyViewRow,
} from "@server"

import { useLang } from "@hooks"

const CHART_WIDTH = 600
const CHART_HEIGHT = 220
const CHART_PADDING = {
  top: 12,
  right: 12,
  bottom: 28,
  left: 34,
}
const AXIS_LABEL_COUNT = 5
const Y_TICK_COUNT = 4

// "Nice" round numbers make better axis ticks than exact fractions
// of the data range (e.g. steps of 5/10/25/50 rather than 7.3).
function niceStep(roughStep: number): number {
  if (roughStep <= 0) return 1
  const magnitude = 10 ** Math.floor(Math.log10(roughStep))
  const normalized = roughStep / magnitude
  const niceNormalized =
    normalized <= 1
      ? 1
      : normalized <= 2
        ? 2
        : normalized <= 5
          ? 5
          : 10
  return niceNormalized * magnitude
}

// Merges two daily-rollup series onto a shared, sorted x-axis of
// dates. A date present in only one series is treated as 0 on the
// other, rather than being skipped, so both lines stay aligned.
function mergeSeriesByDate(
  seriesA: DailyViewRow[],
  seriesB: DailyPageViewRow[],
) {
  const dates = Array.from(
    new Set([
      ...seriesA.map((row) => row.date),
      ...seriesB.map((row) => row.date),
    ]),
  ).sort()

  const aByDate = new Map(
    seriesA.map((row) => [row.date, row.views]),
  )
  const bByDate = new Map(
    seriesB.map((row) => [row.date, row.views]),
  )

  return dates.map((date) => ({
    date,
    articleViews: aByDate.get(date) ?? 0,
    pageViews: bByDate.get(date) ?? 0,
  }))
}

export function ViewsLineChart({
  dailyViews,
  dailyPageViews,
}: {
  dailyViews: DailyViewRow[]
  dailyPageViews: DailyPageViewRow[]
}) {
  const lang = useLang()
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null)

  const merged = mergeSeriesByDate(
    dailyViews,
    dailyPageViews,
  )
  // Page-view tracking only started recently — dates before its
  // first real row are defaulted to 0 by mergeSeriesByDate for axis
  // alignment, but drawing the blue line across all of them would
  // read as "zero views" rather than "not tracked yet", so the line
  // (and its dots) only start at that first real date.
  const firstPageViewDate = dailyPageViews[0]?.date

  if (merged.length < 2) {
    return (
      <div className="flex h-32 w-full items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
        {lang === "pt"
          ? "Ainda não há dados suficientes."
          : "Not enough data yet."}
      </div>
    )
  }

  const innerWidth =
    CHART_WIDTH - CHART_PADDING.left - CHART_PADDING.right
  const innerHeight =
    CHART_HEIGHT - CHART_PADDING.top - CHART_PADDING.bottom

  const maxViews = Math.max(
    ...merged.map((row) =>
      Math.max(row.articleViews, row.pageViews),
    ),
  )
  const minViews = 0

  const step = niceStep(
    (maxViews - minViews) / Y_TICK_COUNT || 1,
  )
  const axisMax = Math.max(
    step,
    Math.ceil(maxViews / step) * step,
  )
  const viewsRange = axisMax - minViews

  const yTicks: number[] = []
  for (
    let value = minViews;
    value <= axisMax;
    value += step
  ) {
    yTicks.push(value)
  }

  const yForViews = (views: number) =>
    CHART_PADDING.top +
    innerHeight -
    ((views - minViews) / viewsRange) * innerHeight

  const xForIndex = (index: number) =>
    CHART_PADDING.left +
    (index / (merged.length - 1)) * innerWidth

  const articlePoints = merged.map((row, index) => ({
    x: xForIndex(index),
    y: yForViews(row.articleViews),
    row,
  }))
  const pagePoints = merged
    .map((row, index) => ({
      x: xForIndex(index),
      y: yForViews(row.pageViews),
      row,
      index,
    }))
    .filter(
      (point) =>
        firstPageViewDate !== undefined &&
        point.row.date >= firstPageViewDate,
    )

  const linePathFor = (
    points: { x: number; y: number }[],
  ) =>
    points
      .map(
        (point, index) =>
          `${index === 0 ? "M" : "L"}${point.x.toFixed(2)},${point.y.toFixed(2)}`,
      )
      .join(" ")

  const areaPathFor = (
    points: { x: number; y: number }[],
  ) =>
    `${linePathFor(points)} L${points[points.length - 1].x.toFixed(2)},${(CHART_PADDING.top + innerHeight).toFixed(2)} L${points[0].x.toFixed(2)},${(CHART_PADDING.top + innerHeight).toFixed(2)} Z`

  const articleLinePath = linePathFor(articlePoints)
  const articleAreaPath = areaPathFor(articlePoints)
  const pageLinePath = linePathFor(pagePoints)

  const labelIndices = new Set<number>()
  const xStep = Math.max(
    1,
    Math.round(
      (merged.length - 1) / (AXIS_LABEL_COUNT - 1),
    ),
  )
  for (let i = 0; i < merged.length; i += xStep) {
    labelIndices.add(i)
  }
  labelIndices.add(merged.length - 1)

  const formatDate = (date: string, short = true) =>
    new Date(`${date}T00:00:00`).toLocaleDateString(
      lang === "pt" ? "pt-BR" : "en-US",
      short
        ? { month: "short", day: "numeric" }
        : {
            month: "long",
            day: "numeric",
            year: "numeric",
          },
    )

  const hoveredRow =
    hoveredIndex !== null ? merged[hoveredIndex] : null
  const hoveredHasPageViews =
    hoveredRow !== null &&
    firstPageViewDate !== undefined &&
    hoveredRow.date >= firstPageViewDate
  const hoveredX =
    hoveredIndex !== null ? xForIndex(hoveredIndex) : 0
  const tooltipWidth = 120
  const tooltipHeight = 46
  const tooltipX = hoveredRow
    ? Math.min(
        Math.max(hoveredX - tooltipWidth / 2, 2),
        CHART_WIDTH - tooltipWidth - 2,
      )
    : 0
  const hoveredTopY = hoveredRow
    ? hoveredHasPageViews
      ? Math.min(
          yForViews(hoveredRow.articleViews),
          yForViews(hoveredRow.pageViews),
        )
      : yForViews(hoveredRow.articleViews)
    : 0
  // Always above the point (never below, where it would sit on top
  // of the chart itself) — clamped so it can't render off the top
  // edge of the SVG when the point is very close to it.
  const tooltipY = hoveredRow
    ? Math.max(2, hoveredTopY - tooltipHeight - 18)
    : 0

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-700 dark:bg-slate-300" />
          {lang === "pt"
            ? "Visualizações de artigos"
            : "Article views"}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-600 dark:bg-sky-400" />
          {lang === "pt"
            ? "Outras páginas"
            : "Non-article pages"}
        </span>
      </div>
      <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
        <svg
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
          className="h-auto w-full min-w-70"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={
            lang === "pt"
              ? "Gráfico de visualizações do site ao longo do tempo"
              : "Line chart of site views over time"
          }
        >
          {yTicks.map((tick) => (
            <g key={tick}>
              <line
                x1={CHART_PADDING.left}
                x2={CHART_WIDTH - CHART_PADDING.right}
                y1={yForViews(tick)}
                y2={yForViews(tick)}
                className="stroke-slate-200 dark:stroke-slate-800"
                strokeWidth={1}
              />
              <text
                x={CHART_PADDING.left - 6}
                y={yForViews(tick)}
                dominantBaseline="middle"
                textAnchor="end"
                className="fill-slate-500 text-[10px] tabular-nums dark:fill-slate-400"
              >
                {tick.toLocaleString()}
              </text>
            </g>
          ))}
          <path
            d={articleAreaPath}
            className="fill-slate-900/5 dark:fill-slate-100/10"
          />
          <path
            d={pageLinePath}
            fill="none"
            strokeWidth={hoveredHasPageViews ? 3 : 2}
            className={`transition-[stroke-width] duration-150 ${
              hoveredHasPageViews
                ? "stroke-sky-700 dark:stroke-sky-300"
                : "stroke-sky-600 dark:stroke-sky-400"
            }`}
          />
          <path
            d={articleLinePath}
            fill="none"
            strokeWidth={hoveredIndex !== null ? 3 : 2}
            className={`transition-[stroke-width] duration-150 ${
              hoveredIndex !== null
                ? "stroke-slate-900 dark:stroke-white"
                : "stroke-slate-700 dark:stroke-slate-300"
            }`}
          />
          {pagePoints.map((point) => (
            <circle
              key={`page-${point.row.date}`}
              cx={point.x}
              cy={point.y}
              r={hoveredIndex === point.index ? 4.5 : 2.5}
              className={`transition-[r] duration-150 ${
                hoveredIndex === point.index
                  ? "fill-sky-700 dark:fill-sky-300"
                  : "fill-sky-600 dark:fill-sky-400"
              }`}
            />
          ))}
          {articlePoints.map((point, index) => (
            <circle
              key={`article-${point.row.date}`}
              cx={point.x}
              cy={point.y}
              r={hoveredIndex === index ? 4.5 : 2.5}
              className={`transition-[r] duration-150 ${
                hoveredIndex === index
                  ? "fill-slate-700 dark:fill-white"
                  : "fill-slate-700 dark:fill-slate-300"
              }`}
            />
          ))}
          {articlePoints.map((point, index) => (
            <circle
              key={`hit-${point.row.date}`}
              cx={point.x}
              cy={point.y}
              r={10}
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() =>
                setHoveredIndex((current) =>
                  current === index ? null : current,
                )
              }
            />
          ))}
          {articlePoints
            .filter((_, index) => labelIndices.has(index))
            .map((point, filteredIndex, filtered) => (
              <text
                key={point.row.date}
                x={point.x}
                y={CHART_HEIGHT - 8}
                textAnchor={
                  filteredIndex === 0
                    ? "start"
                    : filteredIndex === filtered.length - 1
                      ? "end"
                      : "middle"
                }
                className="fill-slate-500 text-[10px] dark:fill-slate-400"
              >
                {formatDate(point.row.date)}
              </text>
            ))}
          {hoveredRow && (
            <g pointerEvents="none">
              <line
                x1={hoveredX}
                x2={hoveredX}
                y1={CHART_PADDING.top}
                y2={CHART_PADDING.top + innerHeight}
                className="stroke-slate-400 dark:stroke-slate-600"
                strokeWidth={1}
                strokeDasharray="2,2"
              />
              <rect
                x={tooltipX}
                y={tooltipY}
                width={tooltipWidth}
                height={tooltipHeight}
                rx={6}
                className="fill-white stroke-slate-200 dark:fill-slate-800 dark:stroke-slate-700"
                strokeWidth={1}
              />
              <text
                x={tooltipX + tooltipWidth / 2}
                y={tooltipY + 13}
                textAnchor="middle"
                className="fill-slate-500 text-[9px] dark:fill-slate-400"
              >
                {formatDate(hoveredRow.date, false)}
              </text>
              <text
                x={tooltipX + tooltipWidth / 2}
                y={tooltipY + 26}
                textAnchor="middle"
                className="fill-slate-900 text-[11px] font-semibold tabular-nums dark:fill-slate-100"
              >
                {hoveredRow.articleViews.toLocaleString()}{" "}
                {lang === "pt" ? "artigos" : "articles"}
              </text>
              {hoveredHasPageViews && (
                <text
                  x={tooltipX + tooltipWidth / 2}
                  y={tooltipY + 39}
                  textAnchor="middle"
                  className="fill-sky-600 text-[11px] font-semibold tabular-nums dark:fill-sky-400"
                >
                  {hoveredRow.pageViews.toLocaleString()}{" "}
                  {lang === "pt"
                    ? "outras páginas"
                    : "other"}
                </text>
              )}
            </g>
          )}
        </svg>
      </div>
    </div>
  )
}
