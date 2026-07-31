import { notFound } from "next/navigation"

import { get_game } from "@server"

import { Main } from "@components/common/main"

import { GameDetails } from "./gameDetails"

type GamePageProps = {
  params: Promise<{ gameId: string }>
}

export default async function GamePage({
  params,
}: GamePageProps) {
  const { gameId } = await params
  const game = await get_game(parseInt(gameId, 10))

  if (!game) notFound()

  return (
    <Main>
      <GameDetails game={game} />
    </Main>
  )
}
