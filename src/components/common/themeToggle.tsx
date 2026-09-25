"use client"

import { useTheme } from "next-themes"

import { useIsClient } from "@hooks"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useIsClient()

  return (
    <li>
      <button
        type="button"
        title="Toggle dark mode"
        onClick={() =>
          setTheme(
            resolvedTheme === "dark" ? "light" : "dark",
          )
        }
        className="flex size-10 cursor-pointer items-center justify-center rounded-full text-slate-700 transition duration-300 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        {mounted && resolvedTheme === "dark" ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )}
      </button>
    </li>
  )
}

function SunIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zM24 12a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM4 12a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zM20.49 3.51a1 1 0 0 1 0 1.41l-1.41 1.41a1 1 0 1 1-1.41-1.41l1.41-1.41a1 1 0 0 1 1.41 0zM6.34 17.66a1 1 0 0 1 0 1.41l-1.42 1.42a1 1 0 1 1-1.41-1.42l1.41-1.41a1 1 0 0 1 1.42 0zM20.49 20.49a1 1 0 0 1-1.41 0l-1.41-1.41a1 1 0 1 1 1.41-1.42l1.41 1.42a1 1 0 0 1 0 1.41zM6.34 6.34a1 1 0 0 1-1.42 0L3.51 4.93a1 1 0 0 1 1.41-1.41l1.42 1.41a1 1 0 0 1 0 1.41z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.9 14.6A9 9 0 1 1 9.4 3.1a1 1 0 0 1 1.1 1.5 7 7 0 0 0 9 9 1 1 0 0 1 1.4 1z" />
    </svg>
  )
}
