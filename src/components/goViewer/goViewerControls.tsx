"use client"

import { useGoViewer } from "./goViewerContext"

const buttonClasses =
  "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-slate-700 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40 dark:text-slate-300 dark:hover:bg-slate-700"

function Triangle({
  direction,
}: {
  direction: "left" | "right"
}) {
  const points =
    direction === "left"
      ? "11,3 4,8 11,13"
      : "5,3 12,8 5,13"
  return <polygon points={points} fill="currentColor" />
}

function Bar({ x }: { x: number }) {
  return (
    <rect
      x={x}
      y={3}
      width={1.6}
      height={10}
      fill="currentColor"
    />
  )
}

function StepBackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <Triangle direction="left" />
    </svg>
  )
}

function StepForwardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <Triangle direction="right" />
    </svg>
  )
}

function JumpBackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <polygon points="9,3 2,8 9,13" fill="currentColor" />
      <polygon
        points="14,3 7,8 14,13"
        fill="currentColor"
      />
    </svg>
  )
}

function JumpForwardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <polygon points="2,3 9,8 2,13" fill="currentColor" />
      <polygon points="7,3 14,8 7,13" fill="currentColor" />
    </svg>
  )
}

function SkipStartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <Bar x={2.4} />
      <polygon
        points="13,3 6,8 13,13"
        fill="currentColor"
      />
    </svg>
  )
}

function SkipEndIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <polygon points="3,3 10,8 3,13" fill="currentColor" />
      <Bar x={12} />
    </svg>
  )
}

function ResetIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.5 8A5.5 5.5 0 1 1 10.8 3.4" />
      <path d="M11 1.5 11 4.5 8 4.5" />
    </svg>
  )
}

function PassIcon() {
  return <span className="text-sm font-semibold">P</span>
}

function MoveNumbersIcon() {
  return <span className="text-sm font-semibold">#</span>
}

export type GoViewerControlsProps = {
  jumpSteps?: number
  className?: string
}

// Arrow-based move navigation — first/jump-back/back, a move
// counter, forward/jump-forward/last — in the style of common kifu
// (game record) players like wgo-player. Purely acts on the shared
// context, so it can be placed anywhere relative to the board.
export function GoViewerControls({
  jumpSteps = 10,
  className = "",
}: GoViewerControlsProps) {
  const {
    moveNumber,
    totalMoves,
    goToStart,
    goToEnd,
    stepBack,
    stepForward,
    jumpBack,
    jumpForward,
    pass,
    showMoveNumbers,
    toggleShowMoveNumbers,
    reset,
  } = useGoViewer()

  const atStart = moveNumber === 0
  const atEnd = moveNumber === totalMoves

  return (
    // 3 separately-orderable flex children — nav, move-numbers/pass,
    // reset — plus a forced line-break spacer (`basis-full`, only
    // present below `sm`) between nav and the other two. Below `sm`
    // that spacer always pushes move-numbers/pass/reset onto their
    // own second line (order 3, after nav's order 1), regardless of
    // whether they'd have technically fit — a deterministic break
    // rather than the arbitrary mid-row wrap plain `flex-wrap` would
    // produce. At `sm` and up the spacer disappears and `sm:order-*`
    // puts move-numbers/pass back on the left of nav and reset back
    // on the right, matching the original single-row layout.
    <div
      className={`mx-auto flex max-w-full flex-wrap items-center justify-center gap-1 rounded-lg p-1 dark:bg-slate-950 ${className}`}
    >
      <div className="order-1 flex items-center gap-1 sm:order-2">
        <button
          type="button"
          title="Go to start"
          onClick={goToStart}
          disabled={atStart}
          className={buttonClasses}
        >
          <SkipStartIcon />
        </button>
        <button
          type="button"
          title={`Back ${jumpSteps} moves`}
          onClick={() => jumpBack(jumpSteps)}
          disabled={atStart}
          className={buttonClasses}
        >
          <JumpBackIcon />
        </button>
        <button
          type="button"
          title="Previous move"
          onClick={stepBack}
          disabled={atStart}
          className={buttonClasses}
        >
          <StepBackIcon />
        </button>
        <span className="min-w-8 px-1 text-center text-sm font-semibold text-slate-700 tabular-nums dark:text-slate-300">
          {moveNumber}
        </span>
        <button
          type="button"
          title="Next move"
          onClick={stepForward}
          disabled={atEnd}
          className={buttonClasses}
        >
          <StepForwardIcon />
        </button>
        <button
          type="button"
          title={`Forward ${jumpSteps} moves`}
          onClick={() => jumpForward(jumpSteps)}
          disabled={atEnd}
          className={buttonClasses}
        >
          <JumpForwardIcon />
        </button>
        <button
          type="button"
          title="Go to end"
          onClick={goToEnd}
          disabled={atEnd}
          className={buttonClasses}
        >
          <SkipEndIcon />
        </button>
      </div>
      <div
        aria-hidden
        className="order-2 basis-full sm:hidden"
      />
      <div className="order-3 flex items-center gap-1 sm:order-1">
        <button
          type="button"
          title={
            showMoveNumbers
              ? "Hide move numbers"
              : "Show move numbers"
          }
          onClick={toggleShowMoveNumbers}
          className={buttonClasses}
        >
          <MoveNumbersIcon />
        </button>
        <button
          type="button"
          title="Pass"
          onClick={pass}
          className={buttonClasses}
        >
          <PassIcon />
        </button>
      </div>
      <button
        type="button"
        title="Reset"
        onClick={reset}
        className={`order-3 ${buttonClasses}`}
      >
        <ResetIcon />
      </button>
    </div>
  )
}
