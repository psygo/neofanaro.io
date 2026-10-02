"use client"

import { GoViewerProvider } from "./goViewerContext"
import type { SgfLabel } from "./goSgf"
import type { Stone } from "./goRules"

export type GoViewerProps = {
  boardSize?: number
  // Either raw SGF text to load as the initial position/move
  // sequence (supports AB/AW/AE "edited stones" for the starting
  // setup, plus the main line of B/W moves for the arrow controls
  // to step through), or a path under /public (e.g.
  // "/articles/foo/1.sgf") to fetch that text from — see
  // GoViewerProvider's own doc for how the two are told apart.
  // Takes precedence over `boardSize` when given (the board size
  // comes from the SGF's own SZ property).
  sgf?: string
  // Static point labels (e.g. "A", "1") for boards not loaded from
  // an SGF — ignored when `sgf` is given, since its own LB labels
  // take over.
  labels?: SgfLabel[]
  // Only relevant with `sgf` — see GoViewerProvider's own doc.
  // Defaults to "start" (a game record to step through); pass "end"
  // for a finished position/problem solution, especially when this
  // board has no <GoViewerControls> to step forward with.
  startAt?: "start" | "end"
  // Who moves first — see GoViewerProvider's own doc. Overrides the
  // SGF's PL property (or Black-first default) without needing to
  // edit the SGF text itself.
  firstToMove?: Stone
  // See GoViewerProvider's own doc.
  label?: string
  className?: string
  children: React.ReactNode
}

// The top-level container only provides game state — it renders no
// board, controls, or info itself. <GoViewerBoard>, <GoViewerControls>,
// <GoViewerInfo>, <GoViewerKey> (the black/white/last-move/ko color
// key), and <GoViewerLegend> (a numbered "Dia. N." caption, mirroring
// <GoDiagramLegend>) are meant to be composed as children wherever
// the layout needs them (side by side, stacked, controls detached
// into a sidebar, etc.), all sharing this context.
export function GoViewer({
  boardSize = 19,
  sgf,
  labels,
  startAt,
  firstToMove,
  label,
  className = "",
  children,
}: GoViewerProps) {
  return (
    <GoViewerProvider
      boardSize={boardSize}
      sgf={sgf}
      labels={labels}
      startAt={startAt}
      firstToMove={firstToMove}
      label={label}
    >
      <div
        className={`not-prose flex flex-col items-center gap-4 px-4 py-4 ${className}`}
      >
        {children}
      </div>
    </GoViewerProvider>
  )
}
