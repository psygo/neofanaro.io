"use client"

import type { LeagueGame } from "@server"

import { useLang } from "@hooks"
import { winnerFromResult } from "@utils"

import { LangLink } from "@components/common/langLink"

export type LeaguePlayerRow = {
  playerId: number
  code: string
  name: string
  nick: string
  rating: number
}

type LeagueTableProps = {
  players: LeaguePlayerRow[]
  isModerator?: boolean
  games?: LeagueGame[]
  onCellClick?: (blackId: number, whiteId: number) => void
}

// 2000+ is dan ranks, one rank per 100 points (2000-2099 = 1d).
// Below 2000, kyu ranks mirror that, clamped to 1k-20k.
function ratingToRank(rating: number): string {
  if (rating >= 2000) {
    const dan = Math.floor((rating - 2000) / 100) + 1
    return `${dan}d`
  }

  const kyu = Math.min(
    Math.max(Math.floor((1999 - rating) / 100) + 1, 1),
    20,
  )
  return `${kyu}k`
}

// `games` comes pre-sorted newest-first, so the first match here
// is the latest game played between these two players.
function findLatestGame(
  games: LeagueGame[],
  playerAId: number,
  playerBId: number,
) {
  return games.find(
    (game) =>
      (game.blackId === playerAId &&
        game.whiteId === playerBId) ||
      (game.blackId === playerBId &&
        game.whiteId === playerAId),
  )
}

export function LeagueTable({
  players,
  isModerator = false,
  games = [],
  onCellClick,
}: LeagueTableProps) {
  const lang = useLang()
  const winLabel = lang === "pt" ? "V" : "W"
  const lossLabel = lang === "pt" ? "D" : "L"

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full border-collapse text-center text-sm">
        <thead>
          <tr className="divide-x divide-slate-200 bg-slate-100">
            <th className="border-b border-slate-200 px-3 py-2 text-left">
              {lang === "pt" ? "Nome" : "Name"}
            </th>
            <th className="border-b border-slate-200 px-3 py-2">
              Rating
            </th>
            <th className="border-b border-slate-200 px-3 py-2 text-left">
              {lang === "pt" ? "Apelido" : "Nick"}
            </th>
            {players.map((player) => (
              <th
                key={player.playerId}
                className="border-b border-slate-200 px-3 py-2"
              >
                {player.code}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((row) => (
            <tr
              key={row.playerId}
              className="divide-x divide-slate-200 odd:bg-white even:bg-slate-50"
            >
              <td className="px-3 py-2 text-left font-semibold">
                {row.name}
              </td>
              <td className="px-3 py-2 text-slate-600">
                {row.rating}{" "}
                <span className="text-xs text-slate-400">
                  ({ratingToRank(row.rating)})
                </span>
              </td>
              <td className="px-3 py-2 text-left text-slate-600">
                {row.nick}
              </td>
              {players.map((column) => {
                if (column.playerId === row.playerId) {
                  return (
                    <td
                      key={column.playerId}
                      className="px-3 py-2 text-slate-300"
                    >
                      X
                    </td>
                  )
                }

                const latestGame = findLatestGame(
                  games,
                  row.playerId,
                  column.playerId,
                )
                const winner = latestGame
                  ? winnerFromResult(latestGame.result)
                  : null
                const rowWon = latestGame
                  ? (winner === "B" &&
                      latestGame.blackId === row.playerId) ||
                    (winner === "W" &&
                      latestGame.whiteId === row.playerId)
                  : false

                if (!isModerator) {
                  if (!latestGame) {
                    return (
                      <td
                        key={column.playerId}
                        className="px-3 py-2"
                      />
                    )
                  }

                  return (
                    <td
                      key={column.playerId}
                      className="p-0"
                    >
                      <LangLink
                        href={`/game/${latestGame.id}`}
                        className={`flex h-full w-full items-center justify-center px-3 py-2 font-bold transition duration-300 ${
                          rowWon
                            ? "text-green-600 hover:bg-green-50"
                            : "text-red-600 hover:bg-red-50"
                        }`}
                      >
                        {rowWon ? winLabel : lossLabel}
                      </LangLink>
                    </td>
                  )
                }

                return (
                  <td
                    key={column.playerId}
                    className="p-0"
                  >
                    <button
                      type="button"
                      title={
                        lang === "pt"
                          ? "Ver ou adicionar partida"
                          : "View or add game"
                      }
                      onClick={() =>
                        onCellClick?.(
                          row.playerId,
                          column.playerId,
                        )
                      }
                      className={`h-full w-full cursor-pointer px-3 py-2 font-bold transition duration-300 hover:bg-slate-200 ${
                        latestGame
                          ? rowWon
                            ? "text-green-600"
                            : "text-red-600"
                          : "text-slate-300 hover:text-slate-600"
                      }`}
                    >
                      {latestGame
                        ? rowWon
                          ? winLabel
                          : lossLabel
                        : "+"}
                    </button>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
