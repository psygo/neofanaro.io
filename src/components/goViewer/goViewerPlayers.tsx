"use client"

import { useGoViewer } from "./goViewerContext"

export type GoViewerPlayersProps = {
  // Override the SGF's own PB/PW — e.g. for a board with no `sgf`,
  // or to show something other than what the SGF has set.
  playerBlack?: string
  playerWhite?: string
  className?: string
}

// Reads the SGF's own PB/PW — nothing to show when neither that nor
// an override above is given.
export function GoViewerPlayers({
  playerBlack: playerBlackOverride,
  playerWhite: playerWhiteOverride,
  className = "",
}: GoViewerPlayersProps) {
  const {
    playerBlack: playerBlackFromSgf,
    playerWhite: playerWhiteFromSgf,
  } = useGoViewer()

  const playerBlack =
    playerBlackOverride ?? playerBlackFromSgf
  const playerWhite =
    playerWhiteOverride ?? playerWhiteFromSgf

  if (!playerBlack && !playerWhite) return null

  return (
    <ul
      className={`m-0 flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-600 dark:text-slate-400 [&>li]:m-0 [&>li]:flex [&>li]:list-none [&>li]:items-center [&>li]:gap-1.5 ${className}`}
    >
      {playerBlack && (
        <li>
          <span className="inline-block h-3.5 w-3.5 rounded-full border-[0.5px] border-white bg-[#161616]" />
          <span className="font-semibold">
            {playerBlack}
          </span>
        </li>
      )}
      {playerWhite && (
        <li>
          <span className="inline-block h-3.5 w-3.5 rounded-full border-[0.5px] border-[#161616] bg-[#f5f5f5]" />
          <span className="font-semibold">
            {playerWhite}
          </span>
        </li>
      )}
    </ul>
  )
}
