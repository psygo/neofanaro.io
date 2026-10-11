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
  "rounded-xl border border-gray-300 px-4 pt-3 pb-3.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:duration-200 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"

export const cardDecoration =
  "rounded-xl border-2 border-gray-300 px-4 pt-3 pb-3.5 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl hover:duration-200 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"

const badukCategoryColor = "oklch(79.5% 0.184 86.047)"
const softwareCategoryColor = "oklch(66.6% 0.179 58.318)"
const otherCategoryColor = "var(--article-category-other)"

export function articleCategoryColor(tags: string[]) {
  if (tags.includes("baduk")) return badukCategoryColor
  if (tags.includes("software"))
    return softwareCategoryColor
  return otherCategoryColor
}

// Every category color `tags` belongs to, unlike
// articleCategoryColor's exclusionary first-match — an article
// tagged "baduk", "software", and "others" all at once belongs to
// all three. An article matching none of them still falls back to
// "other", same as articleCategoryColor.
export function articleCategoryColors(
  tags: string[],
): string[] {
  const colors: string[] = []
  if (tags.includes("baduk"))
    colors.push(badukCategoryColor)
  if (tags.includes("software"))
    colors.push(softwareCategoryColor)
  if (tags.includes("others") || tags.includes("other"))
    colors.push(otherCategoryColor)
  return colors.length > 0 ? colors : [otherCategoryColor]
}

// A `background` value for a left-border-style category strip: a
// solid color for a single category, or a hard-stop gradient
// banding each matching category's color top to bottom when an
// article belongs to more than one. Always a `linear-gradient(...)`
// (even for one color) so it's a valid `backgroundImage` value.
export function articleCategoryBorderBackground(
  tags: string[],
): string {
  const colors = articleCategoryColors(tags)
  const bandSize = 100 / colors.length
  const stops = colors.map((color, i) => {
    const start = i * bandSize
    const end = start + bandSize
    return `${color} ${start}%, ${color} ${end}%`
  })
  return `linear-gradient(to bottom, ${stops.join(", ")})`
}

// ---------------------------------------------------------
