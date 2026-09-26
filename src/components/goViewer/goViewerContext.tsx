"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react"

import {
  Board,
  BoardPosition,
  CapturedStone,
  IllegalReason,
  RecordedMove,
  Stone,
  applySetup,
  createEmptyBoard,
  playMove,
  replayMoves,
} from "./goRules"
import { ParsedSgf, SgfLabel, parseSgf } from "./goSgf"

export type GoViewerState = {
  boardSize: number
  setupBoard: Board
  initialToMove: Stone
  moves: RecordedMove[]
  labels: SgfLabel[]
  viewIndex: number
  lastIllegalReason: IllegalReason | null
}

type Action =
  | { type: "place"; row: number; col: number }
  | { type: "pass" }
  | { type: "reset" }
  | { type: "goToStart" }
  | { type: "goToEnd" }
  | { type: "stepBack" }
  | { type: "stepForward" }
  | { type: "jumpBack"; steps: number }
  | { type: "jumpForward"; steps: number }
  | { type: "loadSgf"; parsed: ParsedSgf }

function toRecordedMoves(
  parsed: ParsedSgf,
): RecordedMove[] {
  return parsed.moves.map((move) =>
    move.pass
      ? { type: "pass", color: move.color }
      : {
          type: "place",
          row: move.row,
          col: move.col,
          color: move.color,
        },
  )
}

function fromParsedSgf(
  parsed: ParsedSgf,
  startAt: "start" | "end" = "start",
): GoViewerState {
  const moves = toRecordedMoves(parsed)
  return {
    boardSize: parsed.boardSize,
    setupBoard: applySetup(parsed.boardSize, parsed.setup),
    initialToMove: parsed.initialToMove,
    moves,
    labels: parsed.labels,
    viewIndex: startAt === "end" ? moves.length : 0,
    lastIllegalReason: null,
  }
}

function reducer(
  state: GoViewerState,
  action: Action,
): GoViewerState {
  switch (action.type) {
    case "place": {
      const view = replayMoves(
        state.setupBoard,
        state.initialToMove,
        state.moves,
        state.viewIndex,
      )
      const outcome = playMove(
        view.board,
        action.row,
        action.col,
        view.toMove,
        view.koPoint,
      )
      if (!outcome.legal) {
        return {
          ...state,
          lastIllegalReason: outcome.reason,
        }
      }

      // Playing from a point we'd stepped back to overwrites
      // whatever moves came after it, rather than branching.
      const truncated = state.moves.slice(
        0,
        state.viewIndex,
      )
      const moves: RecordedMove[] = [
        ...truncated,
        {
          type: "place",
          row: action.row,
          col: action.col,
          color: view.toMove,
        },
      ]
      return {
        ...state,
        moves,
        viewIndex: moves.length,
        lastIllegalReason: null,
      }
    }
    case "pass": {
      const view = replayMoves(
        state.setupBoard,
        state.initialToMove,
        state.moves,
        state.viewIndex,
      )
      const truncated = state.moves.slice(
        0,
        state.viewIndex,
      )
      const moves: RecordedMove[] = [
        ...truncated,
        { type: "pass", color: view.toMove },
      ]
      return {
        ...state,
        moves,
        viewIndex: moves.length,
        lastIllegalReason: null,
      }
    }
    case "reset":
      return {
        ...state,
        moves: [],
        viewIndex: 0,
        lastIllegalReason: null,
      }
    case "goToStart":
      return {
        ...state,
        viewIndex: 0,
        lastIllegalReason: null,
      }
    case "goToEnd":
      return {
        ...state,
        viewIndex: state.moves.length,
        lastIllegalReason: null,
      }
    case "stepBack":
      return {
        ...state,
        viewIndex: Math.max(0, state.viewIndex - 1),
        lastIllegalReason: null,
      }
    case "stepForward":
      return {
        ...state,
        viewIndex: Math.min(
          state.moves.length,
          state.viewIndex + 1,
        ),
        lastIllegalReason: null,
      }
    case "jumpBack":
      return {
        ...state,
        viewIndex: Math.max(
          0,
          state.viewIndex - action.steps,
        ),
        lastIllegalReason: null,
      }
    case "jumpForward":
      return {
        ...state,
        viewIndex: Math.min(
          state.moves.length,
          state.viewIndex + action.steps,
        ),
        lastIllegalReason: null,
      }
    case "loadSgf":
      return fromParsedSgf(action.parsed)
  }
}

function initialState(
  boardSize: number,
  sgf?: string,
  labels: SgfLabel[] = [],
  startAt: "start" | "end" = "start",
): GoViewerState {
  if (sgf) return fromParsedSgf(parseSgf(sgf), startAt)

  return {
    boardSize,
    setupBoard: createEmptyBoard(boardSize),
    initialToMove: "B",
    moves: [],
    labels,
    viewIndex: 0,
    lastIllegalReason: null,
  }
}

export type GoViewerContextValue = {
  boardSize: number
  board: Board
  toMove: Stone
  koPoint: BoardPosition | null
  captures: Record<Stone, number>
  lastMove: BoardPosition | null
  passCount: number
  moveNumber: number
  totalMoves: number
  moveNumberAt: Record<string, number>
  capturedStones: CapturedStone[]
  labels: SgfLabel[]
  lastIllegalReason: IllegalReason | null
  placeStone: (row: number, col: number) => void
  pass: () => void
  reset: () => void
  goToStart: () => void
  goToEnd: () => void
  stepBack: () => void
  stepForward: () => void
  jumpBack: (steps?: number) => void
  jumpForward: (steps?: number) => void
  loadSgf: (source: string) => void
}

const GoViewerContext =
  createContext<GoViewerContextValue | null>(null)

export type GoViewerProviderProps = {
  boardSize?: number
  sgf?: string
  // Static point labels, for boards not loaded from an SGF's own LB
  // property (ignored when `sgf` is given — its LB labels win).
  labels?: SgfLabel[]
  // Only relevant with `sgf`: whether the board initially shows the
  // setup position with no moves applied ("start", the default —
  // right for a game record meant to be stepped through) or the
  // final position with every move applied ("end" — right for
  // displaying a finished position/problem solution, especially
  // when no <GoViewerControls> are rendered to step forward with).
  startAt?: "start" | "end"
  children: React.ReactNode
}

export function GoViewerProvider({
  boardSize = 19,
  sgf,
  labels,
  startAt = "start",
  children,
}: GoViewerProviderProps) {
  const [state, dispatch] = useReducer(
    reducer,
    { boardSize, sgf, labels, startAt },
    (init) =>
      initialState(
        init.boardSize,
        init.sgf,
        init.labels,
        init.startAt,
      ),
  )

  const placeStone = useCallback(
    (row: number, col: number) =>
      dispatch({ type: "place", row, col }),
    [],
  )
  const pass = useCallback(
    () => dispatch({ type: "pass" }),
    [],
  )
  const reset = useCallback(
    () => dispatch({ type: "reset" }),
    [],
  )
  const goToStart = useCallback(
    () => dispatch({ type: "goToStart" }),
    [],
  )
  const goToEnd = useCallback(
    () => dispatch({ type: "goToEnd" }),
    [],
  )
  const stepBack = useCallback(
    () => dispatch({ type: "stepBack" }),
    [],
  )
  const stepForward = useCallback(
    () => dispatch({ type: "stepForward" }),
    [],
  )
  const jumpBack = useCallback(
    (steps = 10) => dispatch({ type: "jumpBack", steps }),
    [],
  )
  const jumpForward = useCallback(
    (steps = 10) =>
      dispatch({ type: "jumpForward", steps }),
    [],
  )
  const loadSgf = useCallback(
    (source: string) =>
      dispatch({
        type: "loadSgf",
        parsed: parseSgf(source),
      }),
    [],
  )

  const view = useMemo(
    () =>
      replayMoves(
        state.setupBoard,
        state.initialToMove,
        state.moves,
        state.viewIndex,
      ),
    [
      state.setupBoard,
      state.initialToMove,
      state.moves,
      state.viewIndex,
    ],
  )

  const value = useMemo<GoViewerContextValue>(
    () => ({
      boardSize: state.boardSize,
      board: view.board,
      toMove: view.toMove,
      koPoint: view.koPoint,
      captures: view.captures,
      lastMove: view.lastMove,
      passCount: view.trailingPasses,
      moveNumber: state.viewIndex,
      totalMoves: state.moves.length,
      moveNumberAt: view.moveNumberAt,
      capturedStones: view.capturedStones,
      labels: state.labels,
      lastIllegalReason: state.lastIllegalReason,
      placeStone,
      pass,
      reset,
      goToStart,
      goToEnd,
      stepBack,
      stepForward,
      jumpBack,
      jumpForward,
      loadSgf,
    }),
    [
      state.boardSize,
      state.viewIndex,
      state.moves.length,
      state.labels,
      state.lastIllegalReason,
      view,
      placeStone,
      pass,
      reset,
      goToStart,
      goToEnd,
      stepBack,
      stepForward,
      jumpBack,
      jumpForward,
      loadSgf,
    ],
  )

  return (
    <GoViewerContext.Provider value={value}>
      {children}
    </GoViewerContext.Provider>
  )
}

export function useGoViewer(): GoViewerContextValue {
  const context = useContext(GoViewerContext)
  if (!context) {
    throw new Error(
      "useGoViewer must be used within a <GoViewer>",
    )
  }
  return context
}
