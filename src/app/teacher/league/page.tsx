import {
  getCurrentPlayer,
  get_league_games,
  get_league_roster,
  get_leagues,
} from "@server"

import { LeagueSection } from "./league"

export default async function TeacherLeaguePage() {
  const [player, leagues] = await Promise.all([
    getCurrentPlayer(),
    get_leagues(),
  ])
  const isModerator = Boolean(player?.moderator)
  const league = leagues[0] ?? null

  if (!league) {
    return (
      <LeagueSection
        isModerator={isModerator}
        league={null}
        roster={[]}
        games={[]}
      />
    )
  }

  const [roster, games] = await Promise.all([
    get_league_roster(league.id),
    get_league_games(league.id),
  ])

  return (
    <LeagueSection
      isModerator={isModerator}
      league={league}
      roster={roster}
      games={games}
    />
  )
}
