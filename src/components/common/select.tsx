"use client"

import { useEffect, useRef, useState } from "react"

export type SelectOption = {
  value: string
  label: string
}

type SelectProps = {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
}

export function Select({
  options,
  value,
  onChange,
}: SelectProps) {
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

  const selectedLabel = options.find(
    (option) => option.value === value,
  )?.label

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex min-w-32 cursor-pointer items-center justify-between gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-600 hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
      >
        <span>{selectedLabel}</span>
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
        <div className="absolute top-full right-0 z-10 mt-1 min-w-full overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-800">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
              className={`flex w-full cursor-pointer items-center px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-slate-700 ${
                option.value === value
                  ? "font-semibold text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-slate-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
