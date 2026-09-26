"use client"

import { useState } from "react"

import { BoardRegion } from "./goRules"
import { useGoViewer } from "./goViewerContext"

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
// The site's own LaTeX/Latin Modern stack (see .font-latex in
// globals.css) — offered as a convenient preset so a diagram styled
// to match the LaTeX-rendered SVG diagrams elsewhere on the site
// doesn't need to repeat this string.
export const goViewerLatexFont =
  'var(--font-latex), "Latin Modern Roman", Georgia, serif'

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
  blackStoneImage,
  whiteStoneImage,
  blackStoneColor = defaultBlackStoneColor,
  whiteStoneColor = defaultWhiteStoneColor,
  blackStoneBorderColor,
  whiteStoneBorderColor = defaultWhiteStoneBorderColor,
  hideLinesBetweenStones = true,
  backgroundImage,
  backgroundColor = defaultBackgroundColor,
  gridColor = defaultGridColor,
  fontFamily,
  showMoveNumbers = false,
  className = "",
}: GoViewerBoardProps) {
  const {
    board,
    boardSize,
    toMove,
    lastMove,
    koPoint,
    moveNumberAt,
    labels,
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

  // A cut (non-board-edge) side gets a bit of extra room: its grid
  // lines run half a cell past the last intersection before
  // stopping, so the crop visibly falls *between* two intersections
  // rather than exactly on the last one (see how a real book diagram
  // crops a corner — no decoration, the lines just end mid-cell).
  const cutOverhang = cellSize / 2
  const cutMargin = cutOverhang + 6
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

  const horizontalSegments = rows.flatMap((row) => {
    const strokeWidth =
      row === 0 || row === boardSize - 1 ? 1.5 : 1
    const segments: {
      key: string
      x1: number
      x2: number
    }[] = []

    if (hasCutLeft) {
      segments.push({
        key: `h-${row}-left`,
        x1: lineLeft,
        x2: pixelX(cols[0]),
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
        x1: pixelX(colA),
        x2: pixelX(colB),
      })
    }
    if (hasCutRight) {
      segments.push({
        key: `h-${row}-right`,
        x1: pixelX(cols[cols.length - 1]),
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
      />
    ))
  })

  const verticalSegments = cols.flatMap((col) => {
    const strokeWidth =
      col === 0 || col === boardSize - 1 ? 1.5 : 1
    const segments: {
      key: string
      y1: number
      y2: number
    }[] = []

    if (hasCutTop) {
      segments.push({
        key: `v-${col}-top`,
        y1: lineTop,
        y2: pixelY(rows[0]),
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
        y1: pixelY(rowA),
        y2: pixelY(rowB),
      })
    }
    if (hasCutBottom) {
      segments.push({
        key: `v-${col}-bottom`,
        y1: pixelY(rows[rows.length - 1]),
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
            point.col <= visibleRegion.maxCol,
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
          <text
            key={`coord-col-${col}`}
            x={pixelX(col)}
            y={lineBottom + coordinatePadding}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily={fontFamily}
            fontSize={cellSize * 0.35}
            fill={gridColor}
          >
            {colLabel(col)}
          </text>
        ))}
      {showCoordinates &&
        rows.map((row) => (
          <text
            key={`coord-row-${row}`}
            x={lineLeft - coordinatePadding}
            y={pixelY(row)}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily={fontFamily}
            fontSize={cellSize * 0.35}
            fill={gridColor}
          >
            {rowLabel(row)}
          </text>
        ))}

      {rows.map((row) =>
        cols.map((col) => {
          const stone = board[row][col]
          const isLastMove =
            lastMove?.row === row && lastMove?.col === col
          const isKoPoint =
            koPoint?.row === row && koPoint?.col === col
          const moveNumber = moveNumberAt[`${row},${col}`]
          const label = labels.find(
            (candidate) =>
              candidate.row === row &&
              candidate.col === col,
          )

          return (
            <g key={`point-${row}-${col}`}>
              {stone === "B" &&
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
                      blackStoneBorderColor ? 0.75 : 0
                    }
                  />
                ))}
              {stone === "W" &&
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
                      whiteStoneBorderColor ? 0.75 : 0
                    }
                  />
                ))}
              {showMoveNumbers && stone && moveNumber ? (
                <text
                  x={pixelX(col)}
                  y={pixelY(row)}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontFamily={fontFamily}
                  fontSize={stoneRadius * 0.95}
                  fill={
                    stone === "B"
                      ? whiteStoneColor
                      : blackStoneColor
                  }
                >
                  {moveNumber}
                </text>
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
              {label && !stone && (
                <>
                  <circle
                    cx={pixelX(col)}
                    cy={pixelY(row)}
                    r={cellSize * 0.32}
                    fill={backgroundColor}
                    opacity={0.8}
                  />
                  <text
                    x={pixelX(col)}
                    y={pixelY(row)}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontFamily={fontFamily}
                    fontSize={cellSize * 0.4}
                    fill={gridColor}
                  >
                    {label.text}
                  </text>
                </>
              )}
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
