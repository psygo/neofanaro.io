import { WithReactChildren } from "@types"

// Mirrors <GoDiagram>'s own numbering + caption grid (see
// go-diagram/go-diagram-number/go-diagram-scope in globals.css) —
// dropping this in as a <GoViewer> child gives an interactive
// diagram the same auto-incrementing "Dia. N." caption a static
// <GoDiagram> gets, continuing the same counter (shared via the
// article's .go-diagram-scope ancestor) unless `diaNumber` is given.
export type GoViewerLegendProps = WithReactChildren & {
  diaNumber?: number
  textAlign?: React.CSSProperties["textAlign"]
  className?: string
}

export function GoViewerLegend({
  diaNumber,
  textAlign = "left",
  className = "",
  children,
}: GoViewerLegendProps) {
  return (
    <div
      className={`go-diagram grid w-full grid-cols-[auto_1fr] gap-2 px-12 text-sm sm:text-base [&>p]:mt-0 [&>p]:mb-0 ${className}`}
    >
      {diaNumber !== undefined ? (
        <p className="whitespace-nowrap text-gray-500 dark:text-slate-400">
          Dia. {diaNumber}.
        </p>
      ) : (
        <p className="go-diagram-number whitespace-nowrap text-gray-500 dark:text-slate-400" />
      )}
      <p className="hyphens-auto" style={{ textAlign }}>
        {children}
      </p>
    </div>
  )
}
