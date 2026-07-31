"use client"

import type { get_game } from "@actions"

import { useLang } from "@hooks"
import { winnerFromResult } from "@utils"

type Game = NonNullable<Awaited<ReturnType<typeof get_game>>>

function signed(n: number) {
  return n >= 0 ? `+${n}` : `${n}`
}

export function GameDetails({ game }: { game: Game }) {
  const lang = useLang()
  const winner = winnerFromResult(game.result)

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-center text-2xl font-bold">
        {game.black?.name ?? "?"} vs{" "}
        {game.white?.name ?? "?"}
      </h1>
      <p className="text-center text-slate-600">
        {game.date}
      </p>
      <p className="text-center text-xl font-bold">
        {game.result}
      </p>

      <div className="grid grid-cols-2 gap-4 rounded-xl border border-slate-200 p-4 text-sm">
        <div>
          <p className="font-semibold">
            {lang === "pt" ? "Preto" : "Black"}
            {winner === "B" && (
              <span className="ml-2 text-xs font-bold text-green-600">
                {lang === "pt" ? "Vencedor" : "Winner"}
              </span>
            )}
          </p>
          <p>
            {game.black?.name} ({game.black?.nick})
          </p>
          <p className="text-slate-600">
            Rating: {game.ratingBlack} (
            {signed(game.ratingDiffBlack)})
          </p>
        </div>
        <div>
          <p className="font-semibold">
            {lang === "pt" ? "Branco" : "White"}
            {winner === "W" && (
              <span className="ml-2 text-xs font-bold text-green-600">
                {lang === "pt" ? "Vencedor" : "Winner"}
              </span>
            )}
          </p>
          <p>
            {game.white?.name} ({game.white?.nick})
          </p>
          <p className="text-slate-600">
            Rating: {game.ratingWhite} (
            {signed(game.ratingDiffWhite)})
          </p>
        </div>
      </div>

      <ul className="flex flex-col gap-1 text-sm text-slate-700">
        {game.handicapStones != null && (
          <li>
            {lang === "pt"
              ? "Pedras de handicap"
              : "Handicap stones"}
            : {game.handicapStones}
          </li>
        )}
        {game.handicapPoints != null && (
          <li>
            {lang === "pt"
              ? "Pontos de handicap"
              : "Handicap points"}
            : {game.handicapPoints}
          </li>
        )}
        {game.komi != null && <li>Komi: {game.komi}</li>}
        <li>
          {lang === "pt" ? "Revisada" : "Reviewed"}:{" "}
          {game.reviewed
            ? lang === "pt"
              ? "Sim"
              : "Yes"
            : lang === "pt"
              ? "Não"
              : "No"}
        </li>
      </ul>

      <GameLinks game={game} />
    </div>
  )
}

function GameLinks({ game }: { game: Game }) {
  const lang = useLang()
  const links = [
    { label: "OGS", href: game.ogsLink },
    { label: "AI Sensei", href: game.aiSenseiLink },
    { label: "YouTube", href: game.youtubeLink },
    { label: "Twitch", href: game.twitchLink },
  ].filter(
    (link): link is { label: string; href: string } =>
      Boolean(link.href),
  )

  if (links.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        {lang === "pt"
          ? "Nenhum link disponível."
          : "No links available."}
      </p>
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-slate-100 px-4 py-2 text-sm ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
