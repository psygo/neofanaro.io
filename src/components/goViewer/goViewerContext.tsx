"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
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
  // The `moves`/`viewIndex` pair this diagram first loaded with —
  // what "reset" restores, since a diagram can start mid-game
  // (`startAt="end"`, or a non-zero `viewIndex`) and resetting
  // should never just blank the board out from under it.
  initialMoves: RecordedMove[]
  initialViewIndex: number
  // Whether the user has placed a stone or passed since the last
  // load/reset — gates whether a "reset" control has anything to do.
  hasUserMoves: boolean
  // Bumped on every "reinit"/"loadSgf" — lets a consumer (currently
  // just <GoViewerBoard>'s own `startAt` handling) detect a freshly
  // loaded board distinctly from an in-place move, since `moves`/
  // `viewIndex` alone can't tell "freshly reset to this exact state"
  // apart from "coincidentally already here".
  loadId: number
  labels: SgfLabel[]
  viewIndex: number
  lastIllegalReason: IllegalReason | null
  // From the SGF's own PB/PW, when loaded from one.
  playerBlack?: string
  playerWhite?: string
}

type Action =
  | { type: "place"; row: number; col: number }
  | { type: "pass" }
  | { type: "reset" }
  | { type: "applyStartAt"; startAt: "start" | "end" }
  | { type: "goToStart" }
  | { type: "goToEnd" }
  | { type: "stepBack" }
  | { type: "stepForward" }
  | { type: "jumpBack"; steps: number }
  | { type: "jumpForward"; steps: number }
  | { type: "loadSgf"; parsed: ParsedSgf }
  | {
      type: "reinit"
      boardSize: number
      sgf?: string
      labels: SgfLabel[]
      firstToMove?: Stone
    }

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
  // Overrides the SGF's own PL property (or its B-moves-first
  // default) when given — lets a caller force who opens without
  // having to edit the SGF text itself.
  firstToMove?: Stone,
): GoViewerState {
  const moves = toRecordedMoves(parsed)
  return {
    boardSize: parsed.boardSize,
    setupBoard: applySetup(parsed.boardSize, parsed.setup),
    initialToMove: firstToMove ?? parsed.initialToMove,
    moves,
    initialMoves: moves,
    initialViewIndex: 0,
    hasUserMoves: false,
    loadId: 0,
    labels: parsed.labels,
    viewIndex: 0,
    lastIllegalReason: null,
    playerBlack: parsed.gameInfo.playerBlack,
    playerWhite: parsed.gameInfo.playerWhite,
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
        hasUserMoves: true,
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
        hasUserMoves: true,
        lastIllegalReason: null,
      }
    }
    case "reset":
      return {
        ...state,
        moves: state.initialMoves,
        viewIndex: state.initialViewIndex,
        hasUserMoves: false,
        lastIllegalReason: null,
      }
    // Dispatched by <GoViewerBoard> itself (which owns `startAt` —
    // see its own doc) right after a fresh load — unlike goToEnd,
    // this also rebases initialMoves/initialViewIndex, the baseline
    // "reset" returns to, so a board that opens on the end position
    // resets back to that same end position rather than to blank.
    case "applyStartAt": {
      const viewIndex =
        action.startAt === "end" ? state.moves.length : 0
      return {
        ...state,
        viewIndex,
        initialViewIndex: viewIndex,
        lastIllegalReason: null,
      }
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
      return {
        ...fromParsedSgf(action.parsed),
        loadId: state.loadId + 1,
      }
    case "reinit":
      return {
        ...initialState(
          action.boardSize,
          action.sgf,
          action.labels,
          action.firstToMove,
        ),
        loadId: state.loadId + 1,
      }
  }
}

function initialState(
  boardSize: number,
  sgf?: string,
  labels: SgfLabel[] = [],
  firstToMove?: Stone,
): GoViewerState {
  if (sgf) return fromParsedSgf(parseSgf(sgf), firstToMove)

  return {
    boardSize,
    setupBoard: createEmptyBoard(boardSize),
    initialToMove: firstToMove ?? "B",
    moves: [],
    initialMoves: [],
    initialViewIndex: 0,
    hasUserMoves: false,
    loadId: 0,
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
  hasUserMoves: boolean
  loadId: number
  moveNumberAt: Record<string, number>
  capturedStones: CapturedStone[]
  labels: SgfLabel[]
  lastIllegalReason: IllegalReason | null
  // From the SGF's own PB/PW, when loaded from one.
  playerBlack?: string
  playerWhite?: string
  // See GoViewerProviderProps' own doc.
  label?: string
  placeStone: (row: number, col: number) => void
  pass: () => void
  reset: () => void
  // Dispatched by <GoViewerBoard> itself — see its own `startAt` doc.
  applyStartAt: (startAt: "start" | "end") => void
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
  // Either raw SGF text (starting with "(", the game tree's own
  // opening paren) or a path under /public (starting with "/", e.g.
  // "/articles/foo/1.sgf") to fetch that text from client-side. The
  // path form means an article never needs its own readSgfFile()
  // call — which needs node:fs, and so previously forced any
  // article using useLang() (a Client Component) into a Server/
  // Client component split just to read one file on its behalf.
  sgf?: string
  // Static point labels, for boards not loaded from an SGF's own LB
  // property (ignored when `sgf` is given — its LB labels win).
  labels?: SgfLabel[]
  // Who moves first. Defaults to the SGF's own PL property (and
  // from there to Black, standard Go convention) when `sgf` is
  // given, or to Black otherwise — set this to override either,
  // without having to edit the SGF text itself.
  firstToMove?: Stone
  // A stable key a <DiagramRef label="..."/> elsewhere in the
  // article can point at — handed down to whichever <GoViewerLegend>
  // child actually ends up carrying the diagram's "Dia. N" number
  // (if any), so authors set this once on <GoViewer> itself rather
  // than on the legend.
  label?: string
  children: React.ReactNode
}

export function GoViewerProvider({
  boardSize = 19,
  sgf,
  labels,
  firstToMove,
  label,
  children,
}: GoViewerProviderProps) {
  const isPath = sgf?.startsWith("/")

  // Only used for the path form — fetched client-side since
  // node:fs (what a direct file read would need) can't be bundled
  // into this "use client" module. Stays undefined for raw-text
  // `sgf`, so that form keeps working exactly as before: resolved
  // synchronously, with no fetch and no loading flash.
  const [fetchedSgf, setFetchedSgf] = useState<
    string | undefined
  >(undefined)
  useEffect(() => {
    if (!isPath || !sgf) return
    let cancelled = false
    fetch(sgf)
      .then((response) => response.text())
      .then((text) => {
        if (!cancelled) setFetchedSgf(text)
      })
    return () => {
      cancelled = true
    }
  }, [isPath, sgf])

  const resolvedSgf = isPath ? fetchedSgf : sgf

  const [state, dispatch] = useReducer(
    reducer,
    {
      boardSize,
      sgf: resolvedSgf,
      labels,
      firstToMove,
    },
    (init) =>
      initialState(
        init.boardSize,
        init.sgf,
        init.labels,
        init.firstToMove,
      ),
  )

  // The reducer's lazy initializer above only runs once, on mount —
  // it won't pick up a `sgf`/`boardSize` prop that changes afterwards
  // (e.g. a parent swapping which problem is shown, or a dev Fast
  // Refresh re-rendering this already-mounted client component with
  // corrected props: React preserves its hook state across that, so
  // the reducer would otherwise keep showing whatever position was
  // parsed on the very first mount). Skipped on the initial run since
  // the lazy initializer above already covers it.
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    dispatch({
      type: "reinit",
      boardSize,
      sgf: resolvedSgf,
      labels: labels ?? [],
      firstToMove,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedSgf, boardSize, firstToMove])

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
  const applyStartAt = useCallback(
    (startAt: "start" | "end") =>
      dispatch({ type: "applyStartAt", startAt }),
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
      hasUserMoves: state.hasUserMoves,
      loadId: state.loadId,
      moveNumberAt: view.moveNumberAt,
      capturedStones: view.capturedStones,
      labels: state.labels,
      lastIllegalReason: state.lastIllegalReason,
      playerBlack: state.playerBlack,
      playerWhite: state.playerWhite,
      label,
      placeStone,
      pass,
      reset,
      applyStartAt,
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
      state.hasUserMoves,
      state.loadId,
      state.labels,
      state.lastIllegalReason,
      state.playerBlack,
      state.playerWhite,
      label,
      view,
      placeStone,
      pass,
      reset,
      applyStartAt,
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
