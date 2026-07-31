import { getCurrentPlayer } from "@server"

import { Main } from "@components/common/main"

import { ProfileSection } from "./profile"

export default async function ProfilePage() {
  const player = await getCurrentPlayer()

  return (
    <Main>
      <ProfileSection player={player} />
    </Main>
  )
}
