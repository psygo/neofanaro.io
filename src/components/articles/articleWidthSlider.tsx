"use client"

import { useEffect, useRef } from "react"

export type ArticleWidthSliderProps = {
  maxWidth: number
  setMaxWidth: (w: number) => void
  setIsDragging: (v: boolean) => void
}

export function ArticleWidthSlider({
  maxWidth,
  setMaxWidth,
  setIsDragging,
}: ArticleWidthSliderProps) {
  const dragState = useRef<{
    startX: number
    startWidth: number
  } | null>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragState.current) return
      const delta =
        (e.clientX - dragState.current.startX) / 16
      setMaxWidth(
        Math.min(
          56,
          Math.max(
            20,
            dragState.current.startWidth + delta,
          ),
        ),
      )
    }
    const onMouseUp = () => {
      if (dragState.current) setIsDragging(false)
      dragState.current = null
    }
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [setMaxWidth, setIsDragging])

  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault()
        dragState.current = {
          startX: e.clientX,
          startWidth: maxWidth,
        }
        setIsDragging(true)
      }}
      className="not-prose hidden shrink-0 cursor-ew-resize rounded p-1 text-gray-400 select-none hover:bg-gray-100 hover:text-gray-600 active:bg-gray-200 sm:block"
      title="Drag to resize"
    >
      <svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 7l-5 5 5 5" />
        <path d="M16 7l5 5-5 5" />
      </svg>
    </button>
  )
}
