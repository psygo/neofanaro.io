import {
  getCurrentPlayer,
  get_featured_games,
  get_players,
} from "@server"

import { LeagueSection } from "./league"

export default async function TeacherLeaguePage() {
  const [player, allPlayers, featuredGames] =
    await Promise.all([
      getCurrentPlayer(),
      get_players(),
      get_featured_games(),
    ])

  return (
    <LeagueSection
      isModerator={Boolean(player?.moderator)}
      players={allPlayers}
      featuredGames={featuredGames}
    />
  )
}
