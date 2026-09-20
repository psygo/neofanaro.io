import Image from "next/image"

import { WithReactChildren } from "@types"

// Numbering is a CSS counter (.go-diagram-scope/.go-diagram in
// globals.css), not a JS tree-walk: GoDiagram elements are
// authored in Server Component articles but rendered through a
// Client Component boundary, where their element `type` no
// longer matches this module's own `GoDiagram` reference.
type GoDiagramProps = WithReactChildren & {
  src: string
  alt?: string
  height?: number
  width?: number
  className?: string
  diaNumber?: number
}

export function GoDiagram({
  src,
  alt = "",
  height = 400,
  width = 400,
  diaNumber,
  children,
  className = "",
}: GoDiagramProps) {
  return (
    <div
      className={`${className} go-diagram my-8 flex flex-col items-center gap-3 px-4 hyphens-auto`}
    >
      <Image
        src={src}
        width={width}
        height={height}
        className={`mt-0 mb-0`}
        alt={alt}
      />
      <div className="grid grid-cols-[auto_1fr] gap-2 px-12 text-sm sm:text-base [&>p]:mt-0 [&>p]:mb-0">
        {diaNumber !== undefined ? (
          <p className="whitespace-nowrap text-gray-500">
            Dia. {diaNumber}.
          </p>
        ) : (
          <p className="go-diagram-number whitespace-nowrap text-gray-500" />
        )}
        {children}
      </div>
    </div>
  )
}

type GoDiagramLegendProps = WithReactChildren & {
  textAlign?: React.CSSProperties["textAlign"]
}

export function GoDiagramLegend({
  children,
  textAlign = "left",
}: GoDiagramLegendProps) {
  return (
    <p className="hyphens-auto" style={{ textAlign }}>
      {children}
    </p>
  )
}
