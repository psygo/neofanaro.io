import { notFound } from "next/navigation"

import {
  get_player_games,
  get_public_player,
} from "@actions"

import { Main } from "@components/common/main"

import { PlayerProfile } from "./playerProfile"

type PlayerPageProps = {
  params: Promise<{ playerId: string }>
}

export default async function PlayerPage({
  params,
}: PlayerPageProps) {
  const { playerId } = await params
  const player = await get_public_player(
    parseInt(playerId, 10),
  )

  if (!player) notFound()

  const games = await get_player_games(player.id)

  return (
    <Main>
      <PlayerProfile player={player} games={games} />
    </Main>
  )
}
