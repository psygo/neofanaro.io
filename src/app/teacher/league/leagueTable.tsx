"use client"

import { useLang } from "@hooks"

export type LeaguePlayerRow = {
  name: string
  nick: string
  code: string
}

type LeagueTableProps = {
  players: LeaguePlayerRow[]
}

export function LeagueTable({ players }: LeagueTableProps) {
  const lang = useLang()

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full border-collapse text-center text-sm">
        <thead>
          <tr className="bg-slate-100">
            <th className="border-b border-slate-200 px-3 py-2 text-left">
              {lang === "pt" ? "Nome" : "Name"}
            </th>
            <th className="border-b border-slate-200 px-3 py-2 text-left">
              {lang === "pt" ? "Apelido" : "Nick"}
            </th>
            {players.map((player) => (
              <th
                key={player.code}
                className="border-b border-slate-200 px-3 py-2"
              >
                {player.code}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr
              key={player.code}
              className="odd:bg-white even:bg-slate-50"
            >
              <td className="px-3 py-2 text-left font-semibold">
                {player.name}
              </td>
              <td className="px-3 py-2 text-left text-slate-600">
                {player.nick}
              </td>
              {players.map((column) => (
                <td key={column.code} className="px-3 py-2">
                  {column.code === player.code ? "X" : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
