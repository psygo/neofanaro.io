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
