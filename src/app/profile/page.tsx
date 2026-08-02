import { getCurrentPlayer } from "@server"
import { get_player_comments } from "@actions"

import { Main } from "@components/common/main"

import { ProfileSection } from "./profile"

export default async function ProfilePage() {
  const player = await getCurrentPlayer()
  const comments = player
    ? await get_player_comments(player.id)
    : []

  return (
    <Main>
      <ProfileSection player={player} comments={comments} />
    </Main>
  )
}
