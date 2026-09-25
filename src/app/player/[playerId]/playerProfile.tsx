"use client"

import type { PlayerGame, PublicPlayer } from "@actions"

import { countryName } from "@utils"

import { useLang } from "@hooks"

import { CountryFlag } from "@components/common/countryFlag"

import { MyGameCard } from "../../profile/myGameCard"

export function PlayerProfile({
  player,
  games,
}: {
  player: PublicPlayer
  games: PlayerGame[]
}) {
  const lang = useLang()

  return (
    <div className="flex max-w-110 flex-col items-center gap-8">
      <h1 className="text-center text-2xl font-bold">
        {player.name}
      </h1>

      <div className="flex w-full flex-col gap-3">
        <span className="inline-flex items-center gap-1.5">
          <p className="text-lg font-semibold">
            {player.nick}
          </p>
          <CountryFlag
            countryCode={player.country}
            title={countryName(player.country, lang)}
            className="h-3 w-5 shrink-0 rounded-xs"
          />
        </span>
        <ul className="text-slate-700 dark:text-slate-300">
          <li>Rating: {player.rating}</li>
        </ul>
        {player.description && (
          <p className="text-slate-700 dark:text-slate-300">
            {player.description}
          </p>
        )}
      </div>

      {games.length > 0 && (
        <div className="flex w-full flex-col gap-3">
          <h2 className="text-lg font-bold">
            {lang === "pt" ? "Partidas" : "Games"}
          </h2>
          <div className="flex flex-col gap-3">
            {games.map((game) => (
              <MyGameCard
                key={game.id}
                game={game}
                lang={lang}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
