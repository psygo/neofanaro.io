"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { preload } from "react-dom"

import { useTheme } from "next-themes"

import { useIsClient } from "@hooks"

import { BoardRegion } from "./goRules"
import {
  sgfCircleGlyph,
  sgfSquareGlyph,
  sgfTriangleGlyph,
} from "./goSgf"
import { useGoViewer } from "./goViewerContext"
import { useGoViewerPreferences } from "./goViewerPreferencesContext"
import {
  goViewerKayaTheme,
  resolveGoViewerTheme,
} from "./goViewerTheme"

const defaultCellSize = 32
const defaultPadding = 20
const defaultCoordinatePadding = 16
const defaultBackgroundColor = "#dcb35c"
const defaultGridColor = "#4a3319"
const defaultBlackStoneColor = "#161616"
const defaultWhiteStoneColor = "#f5f5f5"
const defaultWhiteStoneBorderColor = "#161616"
// Standard Go column lettering skips "I" (too easily confused with
// "1"/"J" historically) — A..H, then J..
const columnLetters = "ABCDEFGHJKLMNOPQRSTUVWXYZ"

function hoshiPoints(
  size: number,
): { row: number; col: number }[] {
  if (size === 19) {
    const lines = [3, 9, 15]
    return lines.flatMap((row) =>
      lines.map((col) => ({ row, col })),
    )
  }
  if (size === 13) {
    const lines = [3, 6, 9]
    return lines.flatMap((row) =>
      lines.map((col) => ({ row, col })),
    )
  }
  if (size === 9) {
    return [
      { row: 2, col: 2 },
      { row: 2, col: 6 },
      { row: 6, col: 2 },
      { row: 6, col: 6 },
      { row: 4, col: 4 },
    ]
  }
  return []
}

// `dominant-baseline: central` alone doesn't land in the same place
// across fonts/browsers/OSes (it centers on the font's own vertical
// metrics, not the rendered glyph's ink) — a fixed `dy` fudge factor
// tuned against one browser looks off in another. This instead
// measures the actual rendered glyph after paint and nudges it by
// exactly the gap between its true ink center and the target `y`, so
// it's correct regardless of which font ends up rendering it.
function CenteredText({
  x,
  y,
  fontFamily,
  fontSize,
  fontWeight,
  fill,
  children,
}: {
  x: number
  y: number
  fontFamily?: string
  fontSize: number
  fontWeight?: string
  fill: string
  children: string | number
}) {
  const ref = useRef<SVGTextElement>(null)
  const [dy, setDy] = useState(0)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    el.setAttribute("dy", "0")
    const box = el.getBBox()
    const inkCenter = box.y + box.height / 2
    el.setAttribute("dy", `${y - inkCenter}`)
    setDy(y - inkCenter)
  }, [children, fontFamily, fontSize, fontWeight, x, y])

  return (
    <text
      ref={ref}
      x={x}
      y={y}
      dy={dy}
      textAnchor="middle"
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fill={fill}
    >
      {children}
    </text>
  )
}

// SGF's TR/SQ/CR point marks (see goSgf.ts, which folds them into
// SgfLabel using these glyphs as the label text) — an outline shape
// instead of a rendered glyph, matching the reference SVG diagrams'
// own marks. All three are sized against the same circumradius `R`
// (the `radius` prop) so they read as a matched set: the triangle's
// and square's vertices sit on that circle, and the circle mark uses
// it directly as its own radius.
const markShapes: Record<
  string,
  "triangle" | "square" | "circle"
> = {
  [sgfTriangleGlyph]: "triangle",
  [sgfSquareGlyph]: "square",
  [sgfCircleGlyph]: "circle",
}

function PointMark({
  x,
  y,
  radius,
  stroke,
  shape,
  centerInBackdrop = false,
}: {
  x: number
  y: number
  radius: number
  stroke: string
  shape: "triangle" | "square" | "circle"
  // A triangle's own centroid sits below its circumcenter (the
  // apex reaches the full radius above center, the base only half
  // that below it) — drawn at `y` as-is, it reads off-center inside
  // a symmetric backdrop (its own gap in the grid, or the space
  // reserved on a stone), sitting closer to the top than the
  // bottom. This nudges it down by a quarter of its own radius,
  // exactly enough to equalize the gap above the apex and below the
  // base against a backdrop centered on `y`. Only meaningful for
  // the triangle shape; ignored otherwise.
  centerInBackdrop?: boolean
}) {
  const strokeWidth = radius * 0.27

  if (shape === "circle")
    return (
      <circle
        cx={x}
        cy={y}
        r={radius}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    )

  if (shape === "square") {
    const squareRadius = radius * 0.85
    const half = squareRadius * Math.SQRT1_2
    return (
      <rect
        x={x - half}
        y={y - half}
        width={half * 2}
        height={half * 2}
        fill="none"
        stroke={stroke}
        strokeWidth={squareRadius * 0.27}
      />
    )
  }

  // A touch smaller than the square/circle marks' own radius — an
  // equilateral triangle drawn at the exact same circumradius reads
  // visually larger than either of them, since its vertices are the
  // only points that reach that radius (most of its area sits well
  // inside it), unlike a circle (uniformly at the radius) or a
  // square (whose flatter sides make it read closer to its true
  // size).
  const triangleRadius = radius * 0.82
  const triangleStrokeWidth = triangleRadius * 0.27
  const triangleY = centerInBackdrop
    ? y + triangleRadius * 0.25
    : y
  const points = [-90, 30, 150]
    .map((deg) => {
      const rad = (deg * Math.PI) / 180
      return `${x + triangleRadius * Math.cos(rad)},${triangleY + triangleRadius * Math.sin(rad)}`
    })
    .join(" ")
  return (
    <polygon
      points={points}
      fill="none"
      stroke={stroke}
      strokeWidth={triangleStrokeWidth}
      strokeLinejoin="miter"
      strokeMiterlimit={10}
    />
  )
}

export type GoViewerBoardProps = {
  region?: BoardRegion
  cellSize?: number
  // Rendered pixel size — `size` is shorthand for both `width` and
  // `height` (a square render); either can still override it
  // individually for a non-square render. None of these change the
  // board's own intrinsic geometry (that's `cellSize`/`padding`) —
  // they just scale the final SVG output, the same way an <img>'s
  // width/height would.
  size?: number
  width?: number
  height?: number
  // Outer padding around the grid, and — only relevant with
  // `showCoordinates` — the extra gap between the grid's edge and
  // the coordinate labels outside it.
  padding?: number
  coordinatePadding?: number
  showCoordinates?: boolean
  interactive?: boolean
  blackStoneImage?: string
  whiteStoneImage?: string
  blackStoneColor?: string
  whiteStoneColor?: string
  // Stone outlines: white stones default to a dark outline (so they
  // read against a light board); black stones default to none. Set
  // either to give stones a visible border — e.g. on a dark board
  // theme, a light grey border keeps black stones from blending into
  // the background, and a slightly darker-than-white grey border
  // keeps white stones from blowing out.
  blackStoneBorderColor?: string
  whiteStoneBorderColor?: string
  // When two stones (either color) sit on adjacent intersections,
  // the grid-line segment directly between them is skipped, so they
  // read as touching rather than having a hairline gap between their
  // edges. On by default; set false to always draw full grid lines.
  hideLinesBetweenStones?: boolean
  backgroundImage?: string
  backgroundColor?: string
  gridColor?: string
  // Font for move numbers and SGF/static labels. Defaults to the
  // browser's sans-serif stack; pass `goViewerLatexFont` (exported
  // from this module) to match the site's LaTeX-styled SVG diagrams.
  fontFamily?: string
  showMoveNumbers?: boolean
  // With `showMoveNumbers`, only numbers this move or later are
  // drawn — earlier ones render as plain, unlabeled stones. Useful
  // for a diagram continuing a sequence whose opening moves were
  // already numbered in an earlier diagram and don't need repeating.
  fromNumber?: number
  // Keeps captured stones drawn on the board (in their last color,
  // with their move number if they had one) instead of removing
  // them — the way a book diagram sometimes leaves a doomed stone
  // on the board to emphasize a capture, akin to SGF edit-mode
  // (AE) markup, rather than showing the post-capture position.
  showCapturedStones?: boolean
  className?: string
}

export function GoViewerBoard({
  region,
  cellSize = defaultCellSize,
  size,
  width: widthOverride,
  height: heightOverride,
  padding = defaultPadding,
  coordinatePadding = defaultCoordinatePadding,
  showCoordinates = false,
  interactive = true,
  blackStoneImage: blackStoneImageProp,
  whiteStoneImage: whiteStoneImageProp,
  blackStoneColor: blackStoneColorProp,
  whiteStoneColor: whiteStoneColorProp,
  blackStoneBorderColor,
  whiteStoneBorderColor: whiteStoneBorderColorProp,
  hideLinesBetweenStones = true,
  backgroundImage: backgroundImageProp,
  backgroundColor: backgroundColorProp,
  gridColor: gridColorProp,
  fontFamily: fontFamilyProp,
  showMoveNumbers = false,
  fromNumber = 1,
  showCapturedStones = false,
  className = "",
}: GoViewerBoardProps) {
  // Explicit props always win; otherwise fall back to the signed-in
  // player's board-appearance preferences (resolved against the
  // current light/dark site theme), and only then to this
  // component's own hardcoded defaults.
  const goViewerPreferences = useGoViewerPreferences()
  const { resolvedTheme } = useTheme()
  // `resolvedTheme` is only known client-side (it can depend on
  // localStorage/system preference), so using it during the very
  // first client render would render different style attributes
  // than the server did, producing a hydration mismatch — stay on
  // "light" (matching the server's own always-undefined resolvedTheme)
  // until after mount, then let the real theme take over.
  const isClient = useIsClient()
  const preferenceTheme = resolveGoViewerTheme(
    goViewerPreferences,
    isClient && resolvedTheme === "dark" ? "dark" : "light",
  )
  const blackStoneImage =
    blackStoneImageProp ?? preferenceTheme.blackStoneImage
  const whiteStoneImage =
    whiteStoneImageProp ?? preferenceTheme.whiteStoneImage
  const blackStoneColor =
    blackStoneColorProp ??
    preferenceTheme.blackStoneColor ??
    defaultBlackStoneColor
  const whiteStoneColor =
    whiteStoneColorProp ??
    preferenceTheme.whiteStoneColor ??
    defaultWhiteStoneColor
  const whiteStoneBorderColor =
    whiteStoneBorderColorProp ??
    preferenceTheme.whiteStoneBorderColor ??
    defaultWhiteStoneBorderColor
  const backgroundImage =
    backgroundImageProp ?? preferenceTheme.backgroundImage
  // Fetching a board's (potentially large, photographic) background
  // image only starts once its CSS is applied post-hydration, unlike
  // an <img>, which the browser's preload scanner picks up straight
  // from the raw HTML — this resource hint closes that gap. When the
  // background preference is "auto" (the default), the eventual
  // image can't be known for certain during the light-mode-assumed
  // first render (see the `isClient` guard above) — Kaya is what
  // "auto" resolves to in dark mode, so it's preloaded speculatively
  // too in that case; an unused preload just goes unused, but a
  // missing one means a visible pop-in once dark mode is confirmed.
  if (backgroundImage)
    preload(backgroundImage, { as: "image" })
  if (goViewerPreferences.background === "auto")
    preload(goViewerKayaTheme.backgroundImage, {
      as: "image",
    })
  const backgroundColor =
    backgroundColorProp ??
    preferenceTheme.backgroundColor ??
    defaultBackgroundColor
  const gridColor =
    gridColorProp ??
    preferenceTheme.gridColor ??
    defaultGridColor
  const fontFamily =
    fontFamilyProp ?? preferenceTheme.fontFamily

  const {
    board,
    boardSize,
    toMove,
    lastMove,
    koPoint,
    moveNumberAt,
    capturedStones,
    labels,
    moveNumber: viewIndex,
    placeStone,
  } = useGoViewer()
  const [hoveredPoint, setHoveredPoint] = useState<{
    row: number
    col: number
  } | null>(null)

  const visibleRegion: BoardRegion = region ?? {
    minRow: 0,
    maxRow: boardSize - 1,
    minCol: 0,
    maxCol: boardSize - 1,
  }

  const hasCutLeft = visibleRegion.minCol > 0
  const hasCutRight = visibleRegion.maxCol < boardSize - 1
  const hasCutTop = visibleRegion.minRow > 0
  const hasCutBottom = visibleRegion.maxRow < boardSize - 1

  const rows: number[] = []
  for (
    let row = visibleRegion.minRow;
    row <= visibleRegion.maxRow;
    row++
  )
    rows.push(row)
  const cols: number[] = []
  for (
    let col = visibleRegion.minCol;
    col <= visibleRegion.maxCol;
    col++
  )
    cols.push(col)

  // A cut (non-board-edge) side gets extra room for its grid lines
  // to run half a cell past the last intersection before stopping,
  // so the crop visibly falls *between* two intersections rather
  // than exactly on the last one (see how a real book diagram crops
  // a corner — no decoration, the lines just end mid-cell). That
  // overhang is carved out of the cut side's own margin — not added
  // on top of it — so the empty space past the very end of the grid
  // lines (the overhang's tip on a cut side, the board border on a
  // true edge) is the same `padding` all the way around.
  const cutOverhang = cellSize / 2
  const cutMargin = cutOverhang
  // Coordinates only ever sit on the true bottom/left sides (this
  // board's own crop, not the absolute board edge), so they stack
  // with whatever cut margin those sides already have.
  const coordMarginBottom = showCoordinates
    ? coordinatePadding
    : 0
  const coordMarginLeft = showCoordinates
    ? coordinatePadding
    : 0
  const paddingLeft =
    padding + (hasCutLeft ? cutMargin : 0) + coordMarginLeft
  const paddingRight =
    padding + (hasCutRight ? cutMargin : 0)
  const paddingTop = padding + (hasCutTop ? cutMargin : 0)
  const paddingBottom =
    padding +
    (hasCutBottom ? cutMargin : 0) +
    coordMarginBottom

  const pixelX = (col: number) =>
    paddingLeft + (col - visibleRegion.minCol) * cellSize
  const pixelY = (row: number) =>
    paddingTop + (row - visibleRegion.minRow) * cellSize

  const naturalWidth =
    paddingLeft +
    paddingRight +
    (cols.length - 1) * cellSize
  const naturalHeight =
    paddingTop +
    paddingBottom +
    (rows.length - 1) * cellSize

  // `size`/`width`/`height` always preserve the board's true aspect
  // ratio (which isn't 1:1 for a non-square region, e.g. an 11x9
  // crop) — forcing both dimensions to the same `size` regardless of
  // shape would letterbox the render inside a square box, leaving
  // dead space on whichever side is shorter. `size` instead sets
  // whichever of width/height is naturally larger, and the other is
  // derived from it; a single `width`/`height` override does the
  // same relative to the other natural dimension.
  const aspectRatio = naturalWidth / naturalHeight
  let svgWidth: number
  let svgHeight: number
  if (
    widthOverride !== undefined &&
    heightOverride !== undefined
  ) {
    svgWidth = widthOverride
    svgHeight = heightOverride
  } else if (widthOverride !== undefined) {
    svgWidth = widthOverride
    svgHeight = widthOverride / aspectRatio
  } else if (heightOverride !== undefined) {
    svgHeight = heightOverride
    svgWidth = heightOverride * aspectRatio
  } else if (size !== undefined) {
    if (naturalWidth >= naturalHeight) {
      svgWidth = size
      svgHeight = size / aspectRatio
    } else {
      svgHeight = size
      svgWidth = size * aspectRatio
    }
  } else {
    svgWidth = naturalWidth
    svgHeight = naturalHeight
  }
  // With none of `size`/`width`/`height` given, the board stretches
  // to fill its container (an article's own width, typically) rather
  // than capping at its own intrinsic pixel size — the container is
  // what's meant to bound it in that case, same as an <img> with no
  // width/height attributes of its own.
  const hasExplicitSize =
    size !== undefined ||
    widthOverride !== undefined ||
    heightOverride !== undefined

  const lineLeft =
    pixelX(cols[0]) - (hasCutLeft ? cutOverhang : 0)
  const lineRight =
    pixelX(cols[cols.length - 1]) +
    (hasCutRight ? cutOverhang : 0)
  const lineTop =
    pixelY(rows[0]) - (hasCutTop ? cutOverhang : 0)
  const lineBottom =
    pixelY(rows[rows.length - 1]) +
    (hasCutBottom ? cutOverhang : 0)

  const stoneRadius = cellSize * 0.46

  const capturedStoneAt = new Map(
    capturedStones.map((captured) => [
      `${captured.row},${captured.col}`,
      captured,
    ]),
  )

  function handlePointClick(row: number, col: number) {
    if (!interactive) return
    placeStone(row, col)
  }

  function rowLabel(row: number) {
    return boardSize - row
  }
  function colLabel(col: number) {
    return columnLetters[col] ?? "?"
  }

  // An off-stone label or mark (TR/SQ/CR included) needs the grid
  // genuinely absent under it, not just visually covered — see
  // labelGapRadius below, which trims the line segments approaching
  // this point short rather than painting anything over them. That
  // keeps the "backdrop" transparent by construction: whatever's
  // behind the board (its own background color/image, nothing more)
  // just shows through, correct for every theme without special-
  // casing any of them.
  function hasLabelGap(row: number, col: number) {
    if (board[row][col]) return false
    return labels.some(
      (candidate) =>
        candidate.row === row &&
        candidate.col === col &&
        candidate.moveIndex === viewIndex,
    )
  }
  // The gap trimmed into the grid is deliberately bigger than the
  // off-stone TR/SQ/CR mark drawn inside it (offStoneMarkRadius,
  // below) — a mark sized to exactly fill its own backdrop reads as
  // cramped, touching the grid right at its own edge. Keeping the
  // backdrop a size up gives it breathing room without changing the
  // mark's own drawn size.
  const labelGapRadius = stoneRadius * 0.86
  const offStoneMarkRadius = cellSize * 0.34

  const horizontalSegments = rows.flatMap((row) => {
    const strokeWidth =
      row === 0 || row === boardSize - 1 ? 3 : 1
    const segments: {
      key: string
      x1: number
      x2: number
    }[] = []

    if (hasCutLeft) {
      segments.push({
        key: `h-${row}-left`,
        x1: lineLeft,
        x2:
          pixelX(cols[0]) -
          (hasLabelGap(row, cols[0]) ? labelGapRadius : 0),
      })
    }
    for (let i = 0; i < cols.length - 1; i++) {
      const colA = cols[i]
      const colB = cols[i + 1]
      const skip =
        hideLinesBetweenStones &&
        board[row][colA] &&
        board[row][colB]
      if (skip) continue
      segments.push({
        key: `h-${row}-${colA}`,
        x1:
          pixelX(colA) +
          (hasLabelGap(row, colA) ? labelGapRadius : 0),
        x2:
          pixelX(colB) -
          (hasLabelGap(row, colB) ? labelGapRadius : 0),
      })
    }
    if (hasCutRight) {
      segments.push({
        key: `h-${row}-right`,
        x1:
          pixelX(cols[cols.length - 1]) +
          (hasLabelGap(row, cols[cols.length - 1])
            ? labelGapRadius
            : 0),
        x2: lineRight,
      })
    }

    return segments.map((segment) => (
      <line
        key={segment.key}
        x1={segment.x1}
        x2={segment.x2}
        y1={pixelY(row)}
        y2={pixelY(row)}
        stroke={gridColor}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
    ))
  })

  const verticalSegments = cols.flatMap((col) => {
    const strokeWidth =
      col === 0 || col === boardSize - 1 ? 3 : 1
    const segments: {
      key: string
      y1: number
      y2: number
    }[] = []

    if (hasCutTop) {
      segments.push({
        key: `v-${col}-top`,
        y1: lineTop,
        y2:
          pixelY(rows[0]) -
          (hasLabelGap(rows[0], col) ? labelGapRadius : 0),
      })
    }
    for (let i = 0; i < rows.length - 1; i++) {
      const rowA = rows[i]
      const rowB = rows[i + 1]
      const skip =
        hideLinesBetweenStones &&
        board[rowA][col] &&
        board[rowB][col]
      if (skip) continue
      segments.push({
        key: `v-${col}-${rowA}`,
        y1:
          pixelY(rowA) +
          (hasLabelGap(rowA, col) ? labelGapRadius : 0),
        y2:
          pixelY(rowB) -
          (hasLabelGap(rowB, col) ? labelGapRadius : 0),
      })
    }
    if (hasCutBottom) {
      segments.push({
        key: `v-${col}-bottom`,
        y1:
          pixelY(rows[rows.length - 1]) +
          (hasLabelGap(rows[rows.length - 1], col)
            ? labelGapRadius
            : 0),
        y2: lineBottom,
      })
    }

    return segments.map((segment) => (
      <line
        key={segment.key}
        x1={pixelX(col)}
        x2={pixelX(col)}
        y1={segment.y1}
        y2={segment.y2}
        stroke={gridColor}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
    ))
  })

  return (
    <svg
      role="img"
      aria-label={`Go board, ${boardSize}x${boardSize}`}
      viewBox={`0 0 ${naturalWidth} ${naturalHeight}`}
      width={svgWidth}
      height={svgHeight}
      className={`rounded-sm ${className}`}
      style={{
        backgroundColor,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        // `width`/`height`/`size` set the board's max render size,
        // not a fixed one — same convention as <GoDiagram>'s own
        // `width`/`height` props — so it still shrinks to fit a
        // viewport narrower than that, rather than overflowing or
        // forcing horizontal scroll.
        width: "100%",
        height: "auto",
        maxWidth: hasExplicitSize
          ? `${svgWidth}px`
          : "100%",
      }}
    >
      {horizontalSegments}
      {verticalSegments}

      {hoshiPoints(boardSize)
        .filter(
          (point) =>
            point.row >= visibleRegion.minRow &&
            point.row <= visibleRegion.maxRow &&
            point.col >= visibleRegion.minCol &&
            point.col <= visibleRegion.maxCol &&
            !hasLabelGap(point.row, point.col),
        )
        .map((point) => (
          <circle
            key={`hoshi-${point.row}-${point.col}`}
            cx={pixelX(point.col)}
            cy={pixelY(point.row)}
            r={cellSize * 0.09}
            fill={gridColor}
          />
        ))}

      {showCoordinates &&
        cols.map((col) => (
          <CenteredText
            key={`coord-col-${col}`}
            x={pixelX(col)}
            y={lineBottom + coordinatePadding}
            fontFamily={fontFamily}
            fontSize={cellSize * 0.56}
            fill={gridColor}
          >
            {colLabel(col)}
          </CenteredText>
        ))}
      {showCoordinates &&
        rows.map((row) => (
          <CenteredText
            key={`coord-row-${row}`}
            x={lineLeft - coordinatePadding}
            y={pixelY(row)}
            fontFamily={fontFamily}
            fontSize={cellSize * 0.56}
            fill={gridColor}
          >
            {rowLabel(row)}
          </CenteredText>
        ))}

      {rows.map((row) =>
        cols.map((col) => {
          const stone = board[row][col]
          const isLastMove =
            lastMove?.row === row && lastMove?.col === col
          const isKoPoint =
            koPoint?.row === row && koPoint?.col === col
          const moveNumber = moveNumberAt[`${row},${col}`]
          const captured = showCapturedStones
            ? capturedStoneAt.get(`${row},${col}`)
            : undefined
          const displayStone =
            stone ?? captured?.color ?? null
          const displayMoveNumber =
            moveNumber ?? captured?.moveNumber
          const label = labels.find(
            (candidate) =>
              candidate.row === row &&
              candidate.col === col &&
              candidate.moveIndex === viewIndex,
          )

          return (
            <g key={`point-${row}-${col}`}>
              {displayStone === "B" &&
                (blackStoneImage ? (
                  <image
                    href={blackStoneImage}
                    x={pixelX(col) - stoneRadius}
                    y={pixelY(row) - stoneRadius}
                    width={stoneRadius * 2}
                    height={stoneRadius * 2}
                  />
                ) : (
                  <circle
                    cx={pixelX(col)}
                    cy={pixelY(row)}
                    r={stoneRadius}
                    fill={blackStoneColor}
                    stroke={blackStoneBorderColor}
                    strokeWidth={
                      blackStoneBorderColor ? 1 : 0
                    }
                  />
                ))}
              {displayStone === "W" &&
                (whiteStoneImage ? (
                  <image
                    href={whiteStoneImage}
                    x={pixelX(col) - stoneRadius}
                    y={pixelY(row) - stoneRadius}
                    width={stoneRadius * 2}
                    height={stoneRadius * 2}
                  />
                ) : (
                  <circle
                    cx={pixelX(col)}
                    cy={pixelY(row)}
                    r={stoneRadius}
                    fill={whiteStoneColor}
                    stroke={whiteStoneBorderColor}
                    strokeWidth={
                      whiteStoneBorderColor ? 1 : 0
                    }
                  />
                ))}
              {displayStone && label ? (
                markShapes[label.text] ? (
                  <PointMark
                    x={pixelX(col)}
                    y={pixelY(row)}
                    radius={stoneRadius * 0.66}
                    stroke={
                      displayStone === "B"
                        ? whiteStoneColor
                        : blackStoneColor
                    }
                    shape={markShapes[label.text]}
                  />
                ) : (
                  <CenteredText
                    x={pixelX(col)}
                    y={pixelY(row)}
                    fontFamily={fontFamily}
                    fontSize={stoneRadius * 1.15}
                    fontWeight="bold"
                    fill={
                      displayStone === "B"
                        ? whiteStoneColor
                        : blackStoneColor
                    }
                  >
                    {label.text}
                  </CenteredText>
                )
              ) : showMoveNumbers &&
                displayStone &&
                displayMoveNumber &&
                displayMoveNumber >= fromNumber ? (
                <CenteredText
                  x={pixelX(col)}
                  y={pixelY(row)}
                  fontFamily={fontFamily}
                  fontSize={stoneRadius * 1.15}
                  fontWeight="bold"
                  fill={
                    displayStone === "B"
                      ? whiteStoneColor
                      : blackStoneColor
                  }
                >
                  {displayMoveNumber}
                </CenteredText>
              ) : (
                isLastMove && (
                  <circle
                    cx={pixelX(col)}
                    cy={pixelY(row)}
                    r={stoneRadius * 0.35}
                    fill="none"
                    stroke={
                      stone === "B"
                        ? whiteStoneColor
                        : blackStoneColor
                    }
                    strokeWidth={1.25}
                  />
                )
              )}
              {isKoPoint && !stone && (
                <circle
                  cx={pixelX(col)}
                  cy={pixelY(row)}
                  r={stoneRadius * 0.25}
                  fill={gridColor}
                  opacity={0.5}
                />
              )}
              {label &&
                !displayStone &&
                (markShapes[label.text] ? (
                  <PointMark
                    x={pixelX(col)}
                    y={pixelY(row)}
                    radius={offStoneMarkRadius}
                    stroke={blackStoneColor}
                    shape={markShapes[label.text]}
                    centerInBackdrop
                  />
                ) : (
                  <CenteredText
                    x={pixelX(col)}
                    y={pixelY(row)}
                    fontFamily={fontFamily}
                    fontSize={cellSize * 0.56}
                    fontWeight="bold"
                    fill={blackStoneColor}
                  >
                    {label.text}
                  </CenteredText>
                ))}
              {interactive &&
                !stone &&
                hoveredPoint?.row === row &&
                hoveredPoint?.col === col && (
                  <circle
                    cx={pixelX(col)}
                    cy={pixelY(row)}
                    r={stoneRadius}
                    fill={
                      toMove === "B"
                        ? blackStoneColor
                        : whiteStoneColor
                    }
                    opacity={0.35}
                    pointerEvents="none"
                  />
                )}
              {interactive && (
                <rect
                  x={pixelX(col) - cellSize / 2}
                  y={pixelY(row) - cellSize / 2}
                  width={cellSize}
                  height={cellSize}
                  fill="transparent"
                  className="cursor-pointer"
                  onClick={() => handlePointClick(row, col)}
                  onMouseEnter={() =>
                    setHoveredPoint({ row, col })
                  }
                  onMouseLeave={() =>
                    setHoveredPoint((current) =>
                      current?.row === row &&
                      current?.col === col
                        ? null
                        : current,
                    )
                  }
                />
              )}
            </g>
          )
        }),
      )}
    </svg>
  )
}
