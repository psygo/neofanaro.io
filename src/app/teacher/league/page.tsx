import { Metadata } from "next"

import {
  getCurrentPlayer,
  get_division_games,
  get_division_roster,
  get_divisions,
  get_leagues,
  get_players,
} from "@server"

import { LeagueHeader } from "./leagueHeader"
import { LeagueSection } from "./league"

type TeacherLeaguePageProps = {
  searchParams: Promise<{ lang?: string }>
}

export async function generateMetadata({
  searchParams,
}: TeacherLeaguePageProps): Promise<Metadata> {
  const { lang } = await searchParams
  const title =
    lang === "pt"
      ? "Liga Tennozan 天王山"
      : "Tennozan 天王山 League"

  return {
    title,
    openGraph: {
      title,
    },
  }
}

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
        divisions={[]}
        allPlayers={[]}
      />
    )
  }

  const [divisionRows, allPlayers] = await Promise.all([
    get_divisions(league.id),
    get_players(),
  ])

  const divisions = await Promise.all(
    divisionRows.map(async (division) => {
      const [roster, games] = await Promise.all([
        get_division_roster(division.id),
        get_division_games(division.id),
      ])
      return { division, roster, games }
    }),
  )

  return (
    <div className="flex flex-col items-center gap-12">
      <LeagueHeader />
      <LeagueSection
        isModerator={isModerator}
        league={league}
        divisions={divisions}
        allPlayers={allPlayers}
      />
    </div>
  )
}
