import { getCurrentPlayer } from "@server"
import {
  get_player_comments,
  get_player_games,
} from "@actions"

import { Main } from "@components/common/main"

import { ProfileSection } from "./profile"

export default async function ProfilePage() {
  const player = await getCurrentPlayer()
  const comments = player
    ? await get_player_comments(player.id)
    : []
  const games = player
    ? await get_player_games(player.id)
    : []

  return (
    <Main>
      <ProfileSection
        player={player}
        comments={comments}
        games={games}
      />
    </Main>
  )
}
