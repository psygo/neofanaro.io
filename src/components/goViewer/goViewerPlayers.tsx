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
      // Sized off this element's own width (`cqw` — see its
      // `containerType` below, deliberately set here rather than on
      // the shared <GoViewer>, which would imply CSS style
      // containment there and isolate the `dia-diagram` counter
      // <GoViewerLegend> relies on), not the viewport — the names
      // shrink with how narrow the diagram itself actually renders,
      // rather than wrapping on a narrow board. The max caps
      // at a normal reading size (matching the article's own prose
      // text) rather than staying small just because a wide board
      // happens to have room to spare — `cqw` only needs to pull the
      // size *down* below that once the container is narrower than
      // ~400px, not keep scaling it up past normal size on a wide
      // one. A 2-column grid (dot, name) rather than flex — each
      // `<li>` is `display: contents`, so its dot/name spans become
      // direct grid items sharing the *same* two column tracks across
      // both rows, keeping the dots aligned in a column underneath
      // each other instead of each row centering independently (and
      // so drifting apart whenever the two names are different
      // lengths). `justify-center` then centers that whole 2-column
      // block as a unit, same as <GoViewer>'s own centered layout.
      className={`m-0 grid max-w-full grid-cols-[auto_auto] items-center justify-center gap-x-1.5 gap-y-1 text-[clamp(0.75rem,4cqw,1rem)] text-slate-600 dark:text-slate-400 [&>li]:m-0 [&>li]:contents ${className}`}
      style={{ containerType: "inline-size" }}
    >
      {playerBlack && (
        <li>
          <span className="inline-block h-[clamp(0.625rem,3.5cqw,0.875rem)] w-[clamp(0.625rem,3.5cqw,0.875rem)] shrink-0 justify-self-end rounded-full border-[0.5px] border-white bg-[#161616] dark:border" />
          <span className="font-semibold whitespace-nowrap">
            {playerBlack}
          </span>
        </li>
      )}
      {playerWhite && (
        <li>
          <span className="inline-block h-[clamp(0.625rem,3.5cqw,0.875rem)] w-[clamp(0.625rem,3.5cqw,0.875rem)] shrink-0 justify-self-end rounded-full border border-[#161616] bg-[#f5f5f5] dark:border-[0.125px]" />
          <span className="font-semibold whitespace-nowrap">
            {playerWhite}
          </span>
        </li>
      )}
    </ul>
  )
}
