"use client"

import { useLang } from "@hooks"

import { useGoViewer } from "./goViewerContext"

export type GoViewerInfoProps = {
  className?: string
}

const illegalReasonLabel: Record<
  string,
  { en: string; pt: string }
> = {
  occupied: {
    en: "That point is already occupied.",
    pt: "Essa interseção já está ocupada.",
  },
  suicide: {
    en: "That move would leave the group with no liberties.",
    pt: "Essa jogada deixaria o grupo sem liberdades.",
  },
  ko: {
    en: "That point is forbidden by the ko rule for one move.",
    pt: "Essa interseção está proibida pela regra do ko por uma jogada.",
  },
}

// Also detached from the board: it only reads the shared context, so
// it can sit in a sidebar, above the board, wherever the article needs.
export function GoViewerInfo({
  className = "",
}: GoViewerInfoProps) {
  const lang = useLang()
  const {
    toMove,
    captures,
    passCount,
    moveNumber,
    totalMoves,
    lastIllegalReason,
  } = useGoViewer()

  const toMoveLabel =
    toMove === "B"
      ? lang === "pt"
        ? "Preto"
        : "Black"
      : lang === "pt"
        ? "Branco"
        : "White"

  const illegal = lastIllegalReason
    ? illegalReasonLabel[lastIllegalReason]
    : null

  return (
    <div
      className={`flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-300 ${className}`}
    >
      <p className="m-0">
        {lang === "pt" ? "Jogada" : "Move"} {moveNumber}
        {totalMoves > 0 && ` / ${totalMoves}`} —{" "}
        {lang === "pt" ? "vez de" : "to move:"}{" "}
        <span className="font-semibold">{toMoveLabel}</span>
      </p>
      <p className="m-0">
        {lang === "pt" ? "Capturas" : "Captures"} —{" "}
        {lang === "pt" ? "Preto" : "Black"}:{" "}
        <span className="font-semibold">{captures.B}</span>,{" "}
        {lang === "pt" ? "Branco" : "White"}:{" "}
        <span className="font-semibold">{captures.W}</span>
      </p>
      {passCount >= 2 && (
        <p className="m-0 text-amber-600 dark:text-amber-400">
          {lang === "pt"
            ? "Ambos os jogadores passaram — a partida provavelmente acabou."
            : "Both players passed — the game is likely over."}
        </p>
      )}
      {illegal && (
        <p className="m-0 text-red-600 dark:text-red-400">
          {lang === "pt" ? illegal.pt : illegal.en}
        </p>
      )}
    </div>
  )
}
