import Image from "next/image"

type GoDiagramProps = GoDiagramLegendProps & {
  src: string
  alt: string
  size: number
}

export function GoDiagram({
  src,
  alt,
  diaNumber,
  legend,
  size,
}: GoDiagramProps) {
  return (
    <div className="flex flex-col items-center gap-0">
      <Image
        src={src}
        width={0}
        height={0}
        className={`mt-3.5 mb-1 h-${size} w-auto px-8`}
        alt={alt}
      />
      <GoDiagramLegend
        diaNumber={diaNumber}
        legend={legend}
      />
    </div>
  )
}

type GoDiagramLegendProps = {
  diaNumber: number
  legend: string
}

export function GoDiagramLegend({
  diaNumber,
  legend,
}: GoDiagramLegendProps) {
  return (
    <p className="mt-2 mb-2 text-center text-sm">
      <em className="pr-1.5 text-gray-500">
        Dia. {diaNumber}.
      </em>{" "}
      {legend}
    </p>
  )
}
