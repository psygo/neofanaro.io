import Image from "next/image"

import { WithReactChildren } from "@types"

type GoDiagramProps = WithReactChildren & {
  src: string
  alt?: string
  height?: number
  width?: number
  className?: string
  diaNumber: number
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
      className={`${className} flex flex-col items-center gap-3 px-4 py-3 hyphens-auto`}
    >
      <Image
        src={src}
        width={width}
        height={height}
        className={`mt-0 mb-0`}
        alt={alt}
      />
      <div className="grid grid-cols-[auto_1fr] gap-2 px-12 text-sm sm:text-base [&>p]:mt-0 [&>p]:mb-0">
        <p className="whitespace-nowrap text-gray-500">
          Dia. {diaNumber}.
        </p>
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
