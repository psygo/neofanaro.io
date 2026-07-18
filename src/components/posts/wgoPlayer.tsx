"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    WGo: unknown
  }
}

const WGO_BASE = "/wgojs/"

type WgoPlayerProps = {
  sgf?: string
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
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
        await loadScript(`${WGO_BASE}wgo.min.js`)
        await loadScript(`${WGO_BASE}wgo.player.min.js`)
        if (cancelled || !container) return
        const isFile =
          sgf.startsWith("/") || sgf.startsWith("http")
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
    <div className="not-prose my-6">
      <div ref={containerRef} />
    </div>
  )
}
