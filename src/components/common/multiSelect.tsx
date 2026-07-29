"use client"

import { useEffect, useRef, useState } from "react"

type MultiSelectProps = {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select...",
}: MultiSelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener(
      "mousedown",
      handleOutsideClick,
    )
    return () =>
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      )
  }, [])

  function toggle(option: string) {
    onChange(
      selected.includes(option)
        ? selected.filter((s) => s !== option)
        : [...selected, option],
    )
  }

  const MAX_BADGES = 3

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex min-w-40 items-center justify-between gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-600 hover:bg-gray-100"
      >
        <span className="flex flex-wrap gap-1">
          {selected.length === 0 ? (
            <span className="font-normal text-gray-700">
              {placeholder}
            </span>
          ) : selected.length <= MAX_BADGES ? (
            selected.map((s) => (
              <span
                key={s}
                className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-700"
              >
                {s}
              </span>
            ))
          ) : (
            <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-700">
              {selected.length} selected
            </span>
          )}
        </span>
        <svg
          className={`size-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute top-full right-0 z-10 mt-1 min-w-full overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
          style={{ maxHeight: "16.5rem" }}
        >
          {options.map((option) => {
            const checked = selected.includes(option)
            return (
              <button
                key={option}
                onClick={() => toggle(option)}
                className="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                <span
                  className={`flex size-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    checked
                      ? "border-gray-700 bg-gray-700 text-white"
                      : "border-gray-300"
                  }`}
                >
                  {checked && (
                    <svg
                      className="size-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  )}
                </span>
                {option}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
