import type { PlayerGame } from "@actions"

import { MyGameCard } from "./myGameCard"

export function MyGames({
  games,
  lang,
}: {
  games: PlayerGame[]
  lang: string
}) {
  if (games.length === 0) return null

  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="text-lg font-bold">
        {lang === "pt" ? "Minhas partidas" : "My games"}
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
  )
}
