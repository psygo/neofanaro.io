"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    WGo: {
      Board: unknown
      BasicPlayer: new (
        el: HTMLElement,
        config: Record<string, unknown>,
      ) => void
    }
  }
}

const WGO_BASE = "/software/wgojs/"

type WgoPlayerProps = {
  sgf?: string
}

function loadScript(
  src: string,
  isLoaded: () => boolean,
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isLoaded()) {
      resolve()
      return
    }
    const existing = document.querySelector(
      `script[src="${src}"]`,
    )
    if (existing) {
      existing.addEventListener("load", () => resolve(), {
        once: true,
      })
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load: ${src}`)),
        { once: true },
      )
      return
    }
    const el = document.createElement("script")
    el.src = src
    el.onload = () => resolve()
    el.onerror = () =>
      reject(new Error(`Failed to load: ${src}`))
    document.head.appendChild(el)
  })
}

function loadCss(href: string) {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const el = document.createElement("link")
    el.rel = "stylesheet"
    el.href = href
    document.head.appendChild(el)
  }
}

export function WgoPlayer({
  sgf = "(;GM[1]SZ[19])",
}: WgoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let cancelled = false

    const init = async () => {
      try {
        loadCss(`${WGO_BASE}wgo.player.css`)
        await loadScript(
          `${WGO_BASE}wgo.min.js`,
          () => !!window.WGo?.Board,
        )
        await loadScript(
          `${WGO_BASE}wgo.player.min.js`,
          () => !!window.WGo?.BasicPlayer,
        )
        if (cancelled || !container) return
        const isFile =
          sgf.startsWith("/") || sgf.startsWith("http")
        new window.WGo.BasicPlayer(container, {
          ...(isFile ? { sgfFile: sgf } : { sgf }),
          move: 1,
          layout: {
            top: [],
            right: ["CommentBox"],
            bottom: ["Control", "InfoBox"],
            left: [],
          },
        })
      } catch (err) {
        console.error("wgo.js failed to load:", err)
      }
    }

    init()

    return () => {
      cancelled = true
      container.innerHTML = ""
    }
  }, [sgf])

  return (
    <div className="not-prose">
      <div ref={containerRef} />
    </div>
  )
}
