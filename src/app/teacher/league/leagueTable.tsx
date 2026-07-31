"use client"

import { useLang } from "@hooks"

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
  onCellClick?: (blackId: number, whiteId: number) => void
}

export function LeagueTable({
  players,
  isModerator = false,
  onCellClick,
}: LeagueTableProps) {
  const lang = useLang()

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
                {row.rating}
              </td>
              <td className="px-3 py-2 text-left text-slate-600">
                {row.nick}
              </td>
              {players.map((column) => {
                if (column.playerId === row.playerId) {
                  return (
                    <td
                      key={column.playerId}
                      className="px-3 py-2"
                    >
                      X
                    </td>
                  )
                }

                if (!isModerator) {
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
                    <button
                      type="button"
                      title={
                        lang === "pt"
                          ? "Adicionar partida"
                          : "Add game"
                      }
                      onClick={() =>
                        onCellClick?.(
                          row.playerId,
                          column.playerId,
                        )
                      }
                      className="h-full w-full cursor-pointer px-3 py-2 text-slate-300 transition duration-300 hover:bg-slate-200 hover:text-slate-600"
                    >
                      +
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
