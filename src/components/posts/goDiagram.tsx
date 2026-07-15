import Image from "next/image"

import { WithReactChildren } from "@types"

type GoDiagramProps = WithReactChildren & {
  src: string
  alt?: string
  height?: number
  width?: number
  diaNumber: number
}

export function GoDiagram({
  src,
  alt = "",
  height = 400,
  width = 400,
  diaNumber,
  children,
}: GoDiagramProps) {
  return (
    <div className="flex flex-col items-center gap-3 px-4 pt-3 pb-3">
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
