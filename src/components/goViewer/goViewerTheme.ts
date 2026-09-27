// Plain data — deliberately not in goViewerBoard.tsx (a "use
// client" module), since every export from a client module becomes
// an opaque client reference when imported into a Server Component,
// not a usable value. These are used from both.

import type {
  GoViewerBackgroundPreference,
  GoViewerFontPreference,
  GoViewerStonePreference,
} from "@types"

// The site's own LaTeX/Latin Modern stack (see .font-latex in
// globals.css) — offered as a convenient preset so a diagram styled
// to match the LaTeX-rendered SVG diagrams elsewhere on the site
// doesn't need to repeat this string. Latin Modern is the LaTeX
// project's own outline-font redrawing of Computer Modern (same
// design, metrically compatible) — the TeX-generated GoDiagram SVGs
// this is meant to match are set in Computer Modern by default, so
// this is effectively that font.
export const goViewerLatexFont =
  'var(--font-latex), "Latin Modern Roman", Georgia, serif'
// The site's default UI sans-serif.
export const goViewerSansFont =
  "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
// The site's monospace stack.
export const goViewerMonoFont =
  "var(--font-geist-mono), ui-monospace, monospace"
// A generic serif fallback, for a "bookish" look without pulling in
// the LaTeX webfont.
export const goViewerSerifFont =
  '"Times New Roman", Georgia, serif'
// New Computer Modern (Book weight) — the font used for problem
// numbering in Philippe's tsumego_workbooks LaTeX project, and
// noticeably heavier/thicker than the Latin Modern face above.
export const goViewerNewComputerModernFont =
  'var(--font-new-computer-modern), "Latin Modern Roman", Georgia, serif'
// Adobe Garamond Pro, tsumego_workbooks' main body font — a
// commercial font referenced by name only (not bundled), so it only
// renders as such on a machine that already has it installed.
export const goViewerGaramondFont =
  '"Adobe Garamond Pro", "EB Garamond", Garamond, Georgia, serif'

// Matches the look of this site's static, TeX-generated GoDiagram
// SVGs: a white background, pure black grid, solid black stones
// with no border, and white stones with a black border — spread
// this into a <GoViewerBoard> to reproduce that "on paper" look.
export const goViewerBookishTheme = {
  backgroundColor: "#ffffff",
  gridColor: "#000000",
  blackStoneColor: "#000000",
  whiteStoneColor: "#ffffff",
  whiteStoneBorderColor: "#000000",
  fontFamily: goViewerSansFont,
}

// Image-based board skins, sourced from /public/board_themes. Each
// pairs a background image with matching stone renders; the images
// already carry their own shading/contrast, so these mostly just
// pick a grid color that reads against the background, plus a
// fallback stone color for the move-number text drawn on top.

// A playful, illustrated desert-sunset board — reuses the same
// glossy "Hikaru no Go"-style stone renders as goViewerHikaruTheme.
export const goViewerDesertTheme = {
  backgroundImage: "/board_themes/desert/desert.png",
  gridColor: "#3d2a4a",
  blackStoneImage: "/board_themes/desert/hikaru_black.png",
  whiteStoneImage: "/board_themes/desert/hikaru_white.png",
  blackStoneColor: "#1a1a1a",
  whiteStoneColor: "#f5f5f5",
}

// Glossy, cartoon-outlined stones (as seen in Hikaru no Go) on a
// plain warm wood color — no background image was supplied for this
// theme, unlike Desert and Kaya.
export const goViewerHikaruTheme = {
  backgroundColor: "#dfb877",
  gridColor: "#4a3319",
  blackStoneImage: "/board_themes/hikaru/hikaru_black.png",
  whiteStoneImage: "/board_themes/hikaru/hikaru_white.png",
  blackStoneColor: "#1a1a1a",
  whiteStoneColor: "#f5f5f5",
}

// Classic photographic kaya wood board and slate/shell stone
// renders.
export const goViewerKayaTheme = {
  backgroundImage: "/board_themes/kaya/kaya_bg.png",
  gridColor: "#1a1208",
  blackStoneImage: "/board_themes/kaya/kaya_black.png",
  whiteStoneImage: "/board_themes/kaya/kaya_white.png",
  blackStoneColor: "#161616",
  whiteStoneColor: "#f5f5f5",
}

// ---------------------------------------------------------
// Preference resolution — combines the 4 independent user
// preferences (board background, black stone, white stone, board
// font) into concrete <GoViewerBoard> props. Each resolves
// independently against the presets above (so e.g. Kaya stones on a
// Desert background is a valid combination), and each defaults to
// "auto", which follows the site's light/dark theme: the bookish
// look (see goViewerBookishTheme) — but with a transparent rather
// than a painted-white background — in light mode, and the default
// plain-circle stones on a Kaya wood background in dark mode.

export type GoViewerPreferences = {
  background: GoViewerBackgroundPreference
  blackStone: GoViewerStonePreference
  whiteStone: GoViewerStonePreference
  font: GoViewerFontPreference
}

export type GoViewerResolvedTheme = {
  backgroundImage?: string
  backgroundColor?: string
  gridColor?: string
  blackStoneImage?: string
  blackStoneColor?: string
  whiteStoneImage?: string
  whiteStoneColor?: string
  whiteStoneBorderColor?: string
  fontFamily?: string
}

const backgroundPreferences: GoViewerBackgroundPreference[] =
  [
    "auto",
    "transparent",
    "bookish",
    "desert",
    "hikaru",
    "kaya",
  ]
const stonePreferences: GoViewerStonePreference[] = [
  "auto",
  "bookish",
  "desert",
  "hikaru",
  "kaya",
]
const fontPreferences: GoViewerFontPreference[] = [
  "auto",
  "sans",
  "mono",
  "serif",
  "latex",
  "newcm",
  "garamond",
]

// Validates the raw strings stored in the DB (a plain `text` column,
// not a real enum) against the known preference values, so a stale
// or hand-edited row can't produce an invalid preference — falls
// back to "auto" for anything unrecognized.
export function toGoViewerPreferences(raw: {
  background: string
  blackStone: string
  whiteStone: string
  font: string
}): GoViewerPreferences {
  return {
    background: backgroundPreferences.includes(
      raw.background as GoViewerBackgroundPreference,
    )
      ? (raw.background as GoViewerBackgroundPreference)
      : "auto",
    blackStone: stonePreferences.includes(
      raw.blackStone as GoViewerStonePreference,
    )
      ? (raw.blackStone as GoViewerStonePreference)
      : "auto",
    whiteStone: stonePreferences.includes(
      raw.whiteStone as GoViewerStonePreference,
    )
      ? (raw.whiteStone as GoViewerStonePreference)
      : "auto",
    font: fontPreferences.includes(
      raw.font as GoViewerFontPreference,
    )
      ? (raw.font as GoViewerFontPreference)
      : "auto",
  }
}

type SiteTheme = "light" | "dark"

function resolveBackground(
  preference: GoViewerBackgroundPreference,
  siteTheme: SiteTheme,
): Pick<
  GoViewerResolvedTheme,
  "backgroundImage" | "backgroundColor" | "gridColor"
> {
  const resolved =
    preference === "auto"
      ? siteTheme === "light"
        ? "transparent"
        : "kaya"
      : preference

  switch (resolved) {
    case "transparent":
      // No fill at all, rather than an explicit white rectangle —
      // the site's own light-mode page background already reads as
      // white, so this looks identical there without painting
      // anything, and still uses the bookish look's black grid
      // (this is also light mode's "auto" background default).
      return {
        backgroundColor: "transparent",
        gridColor: goViewerBookishTheme.gridColor,
      }
    case "bookish":
      return {
        backgroundColor:
          goViewerBookishTheme.backgroundColor,
        gridColor: goViewerBookishTheme.gridColor,
      }
    case "desert":
      return {
        backgroundImage:
          goViewerDesertTheme.backgroundImage,
        gridColor: goViewerDesertTheme.gridColor,
      }
    case "hikaru":
      return {
        backgroundColor:
          goViewerHikaruTheme.backgroundColor,
        gridColor: goViewerHikaruTheme.gridColor,
      }
    case "kaya":
      return {
        backgroundImage: goViewerKayaTheme.backgroundImage,
        gridColor: goViewerKayaTheme.gridColor,
      }
  }
}

function resolveBlackStone(
  preference: GoViewerStonePreference,
  siteTheme: SiteTheme,
): Pick<
  GoViewerResolvedTheme,
  "blackStoneImage" | "blackStoneColor"
> {
  if (preference === "auto")
    return siteTheme === "light"
      ? {
          blackStoneColor:
            goViewerBookishTheme.blackStoneColor,
        }
      : {}

  switch (preference) {
    case "bookish":
      return {
        blackStoneColor:
          goViewerBookishTheme.blackStoneColor,
      }
    case "desert":
      return {
        blackStoneImage:
          goViewerDesertTheme.blackStoneImage,
        blackStoneColor:
          goViewerDesertTheme.blackStoneColor,
      }
    case "hikaru":
      return {
        blackStoneImage:
          goViewerHikaruTheme.blackStoneImage,
        blackStoneColor:
          goViewerHikaruTheme.blackStoneColor,
      }
    case "kaya":
      return {
        blackStoneImage: goViewerKayaTheme.blackStoneImage,
        blackStoneColor: goViewerKayaTheme.blackStoneColor,
      }
  }
}

function resolveWhiteStone(
  preference: GoViewerStonePreference,
  siteTheme: SiteTheme,
): Pick<
  GoViewerResolvedTheme,
  | "whiteStoneImage"
  | "whiteStoneColor"
  | "whiteStoneBorderColor"
> {
  if (preference === "auto")
    return siteTheme === "light"
      ? {
          whiteStoneColor:
            goViewerBookishTheme.whiteStoneColor,
          whiteStoneBorderColor:
            goViewerBookishTheme.whiteStoneBorderColor,
        }
      : {}

  switch (preference) {
    case "bookish":
      return {
        whiteStoneColor:
          goViewerBookishTheme.whiteStoneColor,
        whiteStoneBorderColor:
          goViewerBookishTheme.whiteStoneBorderColor,
      }
    case "desert":
      return {
        whiteStoneImage:
          goViewerDesertTheme.whiteStoneImage,
        whiteStoneColor:
          goViewerDesertTheme.whiteStoneColor,
      }
    case "hikaru":
      return {
        whiteStoneImage:
          goViewerHikaruTheme.whiteStoneImage,
        whiteStoneColor:
          goViewerHikaruTheme.whiteStoneColor,
      }
    case "kaya":
      return {
        whiteStoneImage: goViewerKayaTheme.whiteStoneImage,
        whiteStoneColor: goViewerKayaTheme.whiteStoneColor,
      }
  }
}

function resolveFont(
  preference: GoViewerFontPreference,
  siteTheme: SiteTheme,
): string | undefined {
  switch (preference) {
    case "sans":
      return goViewerSansFont
    case "mono":
      return goViewerMonoFont
    case "serif":
      return goViewerSerifFont
    case "latex":
      return goViewerLatexFont
    case "newcm":
      return goViewerNewComputerModernFont
    case "garamond":
      return goViewerGaramondFont
    case "auto":
    default:
      return siteTheme === "light"
        ? goViewerBookishTheme.fontFamily
        : undefined
  }
}

export function resolveGoViewerTheme(
  preferences: GoViewerPreferences,
  siteTheme: SiteTheme,
): GoViewerResolvedTheme {
  return {
    ...resolveBackground(preferences.background, siteTheme),
    ...resolveBlackStone(preferences.blackStone, siteTheme),
    ...resolveWhiteStone(preferences.whiteStone, siteTheme),
    fontFamily: resolveFont(preferences.font, siteTheme),
  }
}
