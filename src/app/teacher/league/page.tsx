import { getCurrentPlayer, get_players } from "@server"

import { LeagueSection } from "./league"

export default async function TeacherLeaguePage() {
  const [player, allPlayers] = await Promise.all([
    getCurrentPlayer(),
    get_players(),
  ])

  return (
    <LeagueSection
      isModerator={Boolean(player?.moderator)}
      players={allPlayers}
    />
  )
}
