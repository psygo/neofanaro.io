"use client"

import { useGoViewer } from "./goViewerContext"

// Sized off the shared <GoViewer>'s own container width (`cqw`, see
// its `containerType: "inline-size"`) rather than the viewport, so
// buttons shrink with how narrow the diagram itself actually renders
// — capped at a comfortable tap-target size on a wide board, down to
// a smaller one once the container (and so the board) gets tight.
const buttonClasses =
  "flex h-[clamp(1.625rem,9cqw,2rem)] w-[clamp(1.625rem,9cqw,2rem)] cursor-pointer items-center justify-center rounded-md text-slate-700 transition duration-150 hover:bg-slate-200 active:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-40 disabled:active:bg-transparent dark:text-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600"
const moveCounterClasses =
  "min-w-[2rem] px-1 text-center text-[clamp(0.75rem,3.4cqw,0.875rem)] font-semibold text-slate-700 tabular-nums dark:text-slate-300"
const buttonIconTextClasses =
  "text-[clamp(0.75rem,3.4cqw,0.875rem)] font-semibold"

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
  return <span className={buttonIconTextClasses}>P</span>
}

function MoveNumbersIcon() {
  return <span className={buttonIconTextClasses}>#</span>
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
    // Two rows, always — nav on top, move-numbers/pass/reset below —
    // rather than a single row that only wraps once the viewport
    // gets too narrow to fit it. Its own `containerType` (rather
    // than the shared <GoViewer>'s) scopes the `cqw` units below to
    // just this element — putting it on <GoViewer> instead would
    // imply CSS style containment there, which isolates the
    // `dia-diagram` counter <GoViewerLegend> relies on and breaks
    // "Dia. N." numbering across sibling diagrams.
    <div
      className={`mx-auto flex max-w-full flex-col items-center gap-[clamp(0.125rem,1cqw,0.25rem)] rounded-lg p-1 dark:bg-slate-950 ${className}`}
      style={{ containerType: "inline-size" }}
    >
      <div className="flex items-center gap-[clamp(0.125rem,1cqw,0.25rem)]">
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
        <span className={moveCounterClasses}>
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
      <div className="flex items-center gap-[clamp(0.125rem,1cqw,0.25rem)]">
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
        <button
          type="button"
          title="Reset"
          onClick={reset}
          className={buttonClasses}
        >
          <ResetIcon />
        </button>
      </div>
    </div>
  )
}
