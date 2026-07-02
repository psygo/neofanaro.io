import Image from "next/image"

type GoDiagramProps = GoDiagramLegendProps & {
  src: string
  size: number
}

export function GoDiagram({
  src,
  diaNumber,
  legend,
  size,
}: GoDiagramProps) {
  return (
    <div className="mx-auto flex w-fit flex-col">
      <Image
        src={src}
        width={0}
        height={0}
        className={`mt-3.5 mb-1 h-${size} w-auto px-7`}
        alt={legend}
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
    <div className="-mt-3 -mb-2 grid grid-cols-[auto_1fr] items-baseline gap-2 px-12 text-sm">
      <p className="whitespace-nowrap text-gray-500">
        Dia. {diaNumber}.
      </p>
      <p>{legend}</p>
    </div>
  )
}
