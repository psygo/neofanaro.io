// Minimal SGF (Smart Game Format) parser: root game-info properties,
// setup stones (AB/AW/AE — "edited stones", for initial position
// display), and the main line of moves (B/W). Deliberately does not
// track alternate variations — when a node has multiple `(...)`
// children, only the first is followed, matching how most simple
// viewers default to "the game as played." Full variation trees are
// a reasonable follow-up, not needed for loading a single game record.

import { BoardPosition, Stone } from "./goRules"

export type SgfMove =
  | { color: Stone; pass: true }
  | { color: Stone; pass: false; row: number; col: number }

export type SgfSetup = {
  black: BoardPosition[]
  white: BoardPosition[]
  empty: BoardPosition[]
}

export type SgfLabel = BoardPosition & { text: string }

export type SgfGameInfo = {
  playerBlack?: string
  playerWhite?: string
  komi?: number
  result?: string
  date?: string
  gameName?: string
}

export type ParsedSgf = {
  boardSize: number
  setup: SgfSetup
  moves: SgfMove[]
  initialToMove: Stone
  gameInfo: SgfGameInfo
  labels: SgfLabel[]
}

function pointFromSgfValue(value: string): BoardPosition {
  return {
    col: value.charCodeAt(0) - 97,
    row: value.charCodeAt(1) - 97,
  }
}

export function parseSgf(source: string): ParsedSgf {
  const text = source
  let i = 0

  function skipWhitespace() {
    while (i < text.length && /\s/.test(text[i])) i++
  }

  function parseValue(): string {
    i++ // opening '['
    let value = ""
    while (i < text.length && text[i] !== "]") {
      if (text[i] === "\\") {
        value += text[i + 1]
        i += 2
        continue
      }
      value += text[i]
      i++
    }
    i++ // closing ']'
    return value
  }

  function parseProperty(): [string, string[]] {
    let key = ""
    while (i < text.length && /[A-Za-z]/.test(text[i])) {
      key += text[i]
      i++
    }
    const values: string[] = []
    skipWhitespace()
    while (text[i] === "[") {
      values.push(parseValue())
      skipWhitespace()
    }
    return [key.toUpperCase(), values]
  }

  const setup: SgfSetup = {
    black: [],
    white: [],
    empty: [],
  }
  const moves: SgfMove[] = []
  const labels: SgfLabel[] = []
  const gameInfo: SgfGameInfo = {}
  let boardSize = 19
  let initialToMove: Stone = "B"
  let sawSetupOrMoves = false

  skipWhitespace()
  if (text[i] === "(") i++

  while (i < text.length) {
    skipWhitespace()
    const char = text[i]

    if (char === ";") {
      i++
      skipWhitespace()
      while (i < text.length && /[A-Za-z]/.test(text[i])) {
        const [key, values] = parseProperty()
        skipWhitespace()

        switch (key) {
          case "SZ":
            boardSize = parseInt(values[0], 10) || 19
            break
          case "AB":
            setup.black.push(
              ...values.map(pointFromSgfValue),
            )
            sawSetupOrMoves = true
            break
          case "AW":
            setup.white.push(
              ...values.map(pointFromSgfValue),
            )
            sawSetupOrMoves = true
            break
          case "AE":
            setup.empty.push(
              ...values.map(pointFromSgfValue),
            )
            break
          case "PL":
            if (values[0] === "W") initialToMove = "W"
            break
          case "LB":
            for (const value of values) {
              const separator = value.indexOf(":")
              if (separator === -1) continue
              labels.push({
                ...pointFromSgfValue(
                  value.slice(0, separator),
                ),
                text: value.slice(separator + 1),
              })
            }
            break
          case "B":
          case "W": {
            const color = key as Stone
            const value = values[0] ?? ""
            moves.push(
              value === ""
                ? { color, pass: true }
                : {
                    color,
                    pass: false,
                    ...pointFromSgfValue(value),
                  },
            )
            sawSetupOrMoves = true
            break
          }
          case "PB":
            gameInfo.playerBlack = values[0]
            break
          case "PW":
            gameInfo.playerWhite = values[0]
            break
          case "KM":
            gameInfo.komi = parseFloat(values[0])
            break
          case "RE":
            gameInfo.result = values[0]
            break
          case "DT":
            gameInfo.date = values[0]
            break
          case "GN":
            gameInfo.gameName = values[0]
            break
        }
      }
      continue
    }

    if (char === "(") {
      // Descend into the first variation only.
      i++
      continue
    }

    if (char === ")") {
      break
    }

    i++
  }

  // If only AW (white setup) is present with no explicit PL, White
  // having stones pre-placed without Black doesn't change whose turn
  // it is by SGF convention — Black still moves first unless PL says
  // otherwise. `sawSetupOrMoves` only guards against a fully empty
  // file leaving misleading defaults; the default above already
  // covers it.
  void sawSetupOrMoves

  return {
    boardSize,
    setup,
    moves,
    initialToMove,
    gameInfo,
    labels,
  }
}
