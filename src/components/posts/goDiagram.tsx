import Image from "next/image"

import { WithReactChildren } from "@types"

type GoDiagramProps = WithReactChildren & {
  src: string
  alt?: string
  maxHeight: number
  diaNumber: number
}

export function GoDiagram({
  src,
  alt = "",
  maxHeight,
  diaNumber,
  children,
}: GoDiagramProps) {
  return (
    <div className="mx-auto flex w-fit flex-col">
      <Image
        src={src}
        width={0}
        height={0}
        className={`mt-3.5 mb-1 max-h-${maxHeight} w-auto px-3 sm:h-100 sm:px-7`}
        alt={alt}
      />
      <div className="-mt-3 -mb-2 grid grid-cols-[auto_1fr] gap-2 px-12 text-sm sm:text-base">
        <p className="whitespace-nowrap text-gray-500">
          Dia. {diaNumber}.
        </p>
        {children}
      </div>
    </div>
  )
}
