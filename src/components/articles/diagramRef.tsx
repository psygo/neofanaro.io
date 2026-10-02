"use client"

import { useLayoutEffect, useRef, useState } from "react"

type DiagramRefProps = {
  // Must match some <GoDiagram label="..."/> or
  // <GoViewerLegend label="..."/> elsewhere in the article.
  label: string
}

// TeX-style \ref: prints a diagram's current number by looking up
// where the <GoDiagram>/<GoViewerLegend> carrying this same `label`
// actually landed in the rendered article, instead of a number
// typed by hand — reordering, inserting, or deleting diagrams can't
// leave a stale "Dia. 4" sitting in the article text anymore.
export function DiagramRef({ label }: DiagramRefProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [number, setNumber] = useState<number | null>(null)

  useLayoutEffect(() => {
    const article = ref.current?.closest("article")
    // Every diagram, not just labeled ones — numbering is
    // positional (same order the .go-diagram CSS counter counts
    // in), so an unlabeled diagram in between still has to occupy
    // a slot for the count to line up with what's on screen.
    const diagrams = Array.from(
      article?.querySelectorAll<HTMLElement>(
        ".go-diagram",
      ) ?? [],
    )
    const index = diagrams.findIndex(
      (diagram) => diagram.dataset.diaKey === label,
    )
    setNumber(index === -1 ? null : index + 1)
  }, [label])

  return <span ref={ref}>{number ?? "?"}</span>
}
