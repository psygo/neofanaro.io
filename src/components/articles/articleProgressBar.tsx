"use client"

import { useEffect, useRef, useState } from "react"

const TOOLTIP_IDLE_HIDE_MS = 800

export function ArticleProgressBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const article = ref.current?.closest("article")
    if (!article) return

    const updateProgress = () => {
      const articleTop =
        article.getBoundingClientRect().top + window.scrollY
      // How far there is left to scroll once the article's bottom
      // reaches the bottom of the viewport — not the article's full
      // height, or 100% would require scrolling its last screenful
      // past the top of the page.
      const scrollableHeight = Math.max(
        article.scrollHeight - window.innerHeight,
        1,
      )
      const scrolled = window.scrollY - articleTop
      setProgress(
        Math.min(
          1,
          Math.max(0, scrolled / scrollableHeight),
        ),
      )
    }

    let hideTimeout: ReturnType<typeof setTimeout>
    const onScroll = () => {
      updateProgress()
      setShowTooltip(true)
      clearTimeout(hideTimeout)
      hideTimeout = setTimeout(
        () => setShowTooltip(false),
        TOOLTIP_IDLE_HIDE_MS,
      )
    }

    updateProgress()
    window.addEventListener("scroll", onScroll, {
      passive: true,
    })
    window.addEventListener("resize", updateProgress)
    return () => {
      clearTimeout(hideTimeout)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  const percentage = Math.round(progress * 100)

  return (
    <div
      ref={ref}
      // Clear of a non-overlay OS/browser scrollbar (~15-17px),
      // which would otherwise render right on top of a bar placed
      // flush against the edge, hiding it entirely.
      className="not-prose fixed top-0 right-4 z-40 hidden h-screen py-16 sm:block"
    >
      <div className="relative h-full w-1.5 rounded-full bg-slate-300 dark:bg-slate-700">
        <div
          className="absolute top-0 left-0 w-full rounded-full bg-slate-600 dark:bg-slate-300"
          style={{ height: `${percentage}%` }}
        />
        <div
          className={`absolute right-full mr-2 rounded bg-slate-800 px-2 py-1 text-xs whitespace-nowrap text-white transition-opacity duration-200 dark:bg-slate-700 dark:text-slate-100 ${
            showTooltip ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: `calc(${percentage}% - 10px)` }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  )
}
