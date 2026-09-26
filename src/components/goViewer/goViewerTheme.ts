// Plain data — deliberately not in goViewerBoard.tsx (a "use
// client" module), since every export from a client module becomes
// an opaque client reference when imported into a Server Component,
// not a usable value. These are used from both.

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
  fontFamily: goViewerLatexFont,
}
