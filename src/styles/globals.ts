import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"

// ---------------------------------------------------------
// Fonts

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// KaTeX's own text font (Latin Modern, the classic LaTeX
// typeface), reused here so the "LaTeX" article font option
// doesn't need a separate webfont dependency.
export const latexFont = localFont({
  variable: "--font-latex",
  src: [
    {
      path: "../../node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
})

// New Computer Modern (Book weight) — the font Philippe's own
// tsumego_workbooks LaTeX project uses for problem numbering, and a
// heavier-looking relative of the KaTeX/Latin Modern face above.
// Licensed under the GUST Font License (LPPL-based, free to embed —
// see the bundled LICENSE.txt).
export const newComputerModernFont = localFont({
  variable: "--font-new-computer-modern",
  src: [
    {
      path: "./fonts/new-computer-modern/NewCM10-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/new-computer-modern/NewCM10-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/new-computer-modern/NewCM10-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/new-computer-modern/NewCM10-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
})

// Adobe Garamond Pro is a commercial Adobe font (also used, as the
// main body font, by tsumego_workbooks) — it can't be bundled as a
// webfont here, so this just references it by name for machines
// that already have it installed (e.g. via Creative Cloud), falling
// back to a free Garamond-alike and then a generic serif elsewhere.
export const garamondFontStack =
  '"Adobe Garamond Pro", "EB Garamond", Garamond, Georgia, serif'

// ---------------------------------------------------------
// Global Styles

export const containerOutline =
  "rounded-xl border border-gray-300 px-4 pt-3 pb-3.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:duration-200 dark:border-slate-700 dark:hover:bg-slate-800"

export const cardDecoration =
  "rounded-xl border-2 border-gray-300 px-4 pt-3 pb-3.5 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl hover:duration-200 dark:border-slate-700 dark:hover:bg-slate-800"

export function articleCategoryColor(tags: string[]) {
  if (tags.includes("baduk"))
    return "oklch(79.5% 0.184 86.047)"
  if (tags.includes("software"))
    return "oklch(66.6% 0.179 58.318)"
  return "var(--article-category-other)"
}

// ---------------------------------------------------------
