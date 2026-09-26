// Pure, framework-agnostic Go rules engine: board representation,
// group/liberty search, capture resolution, suicide, and simple
// (positional single-point) ko. No React, no rendering — kept
// separate so the logic can be reasoned about and reused on its
// own from GoViewerContext.

export type Stone = "B" | "W"
export type Point = Stone | null
export type Board = Point[][]

export type BoardPosition = {
  row: number
  col: number
}

export type BoardRegion = {
  minRow: number
  maxRow: number
  minCol: number
  maxCol: number
}

export type IllegalReason = "occupied" | "suicide" | "ko"

export type MoveOutcome =
  | {
      legal: true
      board: Board
      captured: BoardPosition[]
      koPoint: BoardPosition | null
    }
  | {
      legal: false
      reason: IllegalReason
    }

export function otherStone(stone: Stone): Stone {
  return stone === "B" ? "W" : "B"
}

export function createEmptyBoard(size: number): Board {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, (): Point => null),
  )
}

export function cloneBoard(board: Board): Board {
  return board.map((row) => [...row])
}

export function isOnBoard(
  board: Board,
  row: number,
  col: number,
): boolean {
  return (
    row >= 0 &&
    row < board.length &&
    col >= 0 &&
    col < board.length
  )
}

function neighborsOf(
  board: Board,
  row: number,
  col: number,
): BoardPosition[] {
  return [
    { row: row - 1, col },
    { row: row + 1, col },
    { row, col: col - 1 },
    { row, col: col + 1 },
  ].filter((p) => isOnBoard(board, p.row, p.col))
}

// Flood-fills the same-colored group touching (row, col) and
// reports whether it has any liberties, without mutating anything.
function findGroup(
  board: Board,
  row: number,
  col: number,
): { stones: BoardPosition[]; liberties: number } {
  const color = board[row][col]
  const stones: BoardPosition[] = []
  const seen = new Set<string>()
  const libertyKeys = new Set<string>()
  const stack: BoardPosition[] = [{ row, col }]

  while (stack.length > 0) {
    const current = stack.pop()!
    const key = `${current.row},${current.col}`
    if (seen.has(key)) continue
    seen.add(key)
    stones.push(current)

    for (const neighbor of neighborsOf(
      board,
      current.row,
      current.col,
    )) {
      const neighborPoint =
        board[neighbor.row][neighbor.col]
      if (neighborPoint === null) {
        libertyKeys.add(`${neighbor.row},${neighbor.col}`)
      } else if (
        neighborPoint === color &&
        !seen.has(`${neighbor.row},${neighbor.col}`)
      ) {
        stack.push(neighbor)
      }
    }
  }

  return { stones, liberties: libertyKeys.size }
}

// Attempts to play `stone` at (row, col). Returns the resulting
// board and any captures on success, or why the move is illegal.
// `koPoint`, when set, is the single point the previous move made
// briefly unplayable (simple ko, not full positional superko).
export function playMove(
  board: Board,
  row: number,
  col: number,
  stone: Stone,
  koPoint: BoardPosition | null,
): MoveOutcome {
  if (!isOnBoard(board, row, col)) {
    return { legal: false, reason: "occupied" }
  }
  if (board[row][col] !== null) {
    return { legal: false, reason: "occupied" }
  }
  if (
    koPoint &&
    koPoint.row === row &&
    koPoint.col === col
  ) {
    return { legal: false, reason: "ko" }
  }

  const next = cloneBoard(board)
  next[row][col] = stone

  const opponent = otherStone(stone)
  const captured: BoardPosition[] = []

  for (const neighbor of neighborsOf(next, row, col)) {
    if (next[neighbor.row][neighbor.col] !== opponent)
      continue

    const group = findGroup(
      next,
      neighbor.row,
      neighbor.col,
    )
    if (group.liberties === 0) {
      for (const stonePos of group.stones) {
        next[stonePos.row][stonePos.col] = null
        captured.push(stonePos)
      }
    }
  }

  const ownGroup = findGroup(next, row, col)
  if (ownGroup.liberties === 0) {
    return { legal: false, reason: "suicide" }
  }

  // Simple ko: only when this move captured exactly one stone and
  // the stone just played is itself a lone stone with exactly one
  // liberty (the point it just captured) — the classic ko shape.
  const koPointResult =
    captured.length === 1 &&
    ownGroup.stones.length === 1 &&
    ownGroup.liberties === 1
      ? captured[0]
      : null

  return {
    legal: true,
    board: next,
    captured,
    koPoint: koPointResult,
  }
}

// Applies SGF-style "edited stones" (AB/AW/AE) on top of an empty
// board of the given size, for setting up an initial position that
// isn't the result of any move (problems, positions loaded mid-game).
export function applySetup(
  size: number,
  setup: {
    black: BoardPosition[]
    white: BoardPosition[]
    empty?: BoardPosition[]
  },
): Board {
  const board = createEmptyBoard(size)
  for (const p of setup.black)
    if (isOnBoard(board, p.row, p.col))
      board[p.row][p.col] = "B"
  for (const p of setup.white)
    if (isOnBoard(board, p.row, p.col))
      board[p.row][p.col] = "W"
  for (const p of setup.empty ?? [])
    if (isOnBoard(board, p.row, p.col))
      board[p.row][p.col] = null
  return board
}

export type RecordedMove =
  | {
      type: "place"
      row: number
      col: number
      color: Stone
    }
  | { type: "pass"; color: Stone }

export type CapturedStone = {
  row: number
  col: number
  color: Stone
  moveNumber?: number
}

export type ReplayResult = {
  board: Board
  toMove: Stone
  koPoint: BoardPosition | null
  captures: Record<Stone, number>
  lastMove: BoardPosition | null
  trailingPasses: number
  // 1-based move number for each stone currently on the board that
  // was placed by a move (keyed "row,col") — absent for setup
  // stones (AB/AW) and for points no longer occupied (captured).
  moveNumberAt: Record<string, number>
  // Stones removed by capture, keyed by their last point — kept
  // around (rather than discarded like moveNumberAt's entries) so a
  // diagram can optionally still render them, the way a book
  // sometimes leaves a doomed stone on the board to emphasize a
  // capture rather than showing the post-capture position. Cleared
  // for a point once something is played there again.
  capturedStones: CapturedStone[]
}

// Replays `moves[0..upTo)` on top of `setupBoard`, used to derive the
// board shown at any point when navigating a recorded game — rather
// than storing a board snapshot per move, the move list is the
// source of truth and any position is recomputed from it. Illegal
// recorded moves are skipped rather than thrown, so a hand-edited or
// malformed move list can't crash playback.
export function replayMoves(
  setupBoard: Board,
  initialToMove: Stone,
  moves: RecordedMove[],
  upTo: number,
): ReplayResult {
  let board = setupBoard
  let toMove = initialToMove
  let koPoint: BoardPosition | null = null
  const captures: Record<Stone, number> = { B: 0, W: 0 }
  let lastMove: BoardPosition | null = null
  let trailingPasses = 0
  const moveNumberAt: Record<string, number> = {}
  const capturedStoneAt: Record<string, CapturedStone> = {}

  const limit = Math.min(upTo, moves.length)
  for (let index = 0; index < limit; index++) {
    const move = moves[index]

    if (move.type === "pass") {
      toMove = otherStone(move.color)
      koPoint = null
      lastMove = null
      trailingPasses += 1
      continue
    }

    const outcome = playMove(
      board,
      move.row,
      move.col,
      move.color,
      koPoint,
    )
    if (!outcome.legal) continue

    board = outcome.board
    captures[move.color] += outcome.captured.length
    koPoint = outcome.koPoint
    toMove = otherStone(move.color)
    lastMove = { row: move.row, col: move.col }
    trailingPasses = 0

    for (const captured of outcome.captured) {
      const key = `${captured.row},${captured.col}`
      capturedStoneAt[key] = {
        row: captured.row,
        col: captured.col,
        color: otherStone(move.color),
        moveNumber: moveNumberAt[key],
      }
      delete moveNumberAt[key]
    }
    delete capturedStoneAt[`${move.row},${move.col}`]
    moveNumberAt[`${move.row},${move.col}`] = index + 1
  }

  return {
    board,
    toMove,
    koPoint,
    captures,
    lastMove,
    trailingPasses,
    moveNumberAt,
    capturedStones: Object.values(capturedStoneAt),
  }
}
