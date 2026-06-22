"use client"

import { Goban as PreactGoban } from "@sabaki/shudan"
import {
  render,
  createElement,
  ContainerNode,
} from "preact"
import { useCallback } from "react"

import "@sabaki/shudan/css/goban.css"

export function Goban(props: unknown) {
  const callback = useCallback(
    (element: ContainerNode) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      render(createElement(PreactGoban, props), element)

      return () => render(null, element)
    },
    [props],
  )

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <div ref={callback} />
}

type GobanProps = {
  size: number
  signMap: number[][]
  children: React.ReactNode
}

export function WrappedGoban({
  size,
  signMap,
  children,
}: GobanProps) {
  return (
    <div className="flex flex-col items-center gap-0 pt-3">
      <Goban
        // @ts-expect-error This hasn't been properly typed in TS
        vertexSize={size}
        className="rounded-lg"
        signMap={signMap}
      />
      {children}
    </div>
  )
}

type GobanLegendProps = {
  diaNumber: number
  legend: string
}

export function GobanLegend({
  diaNumber,
  legend,
}: GobanLegendProps) {
  return (
    <p className="mt-2 mb-2">
      <em className="pr-1.5 text-gray-500">
        Dia. {diaNumber}.
      </em>{" "}
      {legend}
    </p>
  )
}
