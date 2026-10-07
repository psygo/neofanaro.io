"use server"

import { get_github_repo_stars } from "./get_github_repo_stars"

export type SoftwareWorkGithubStars = {
  fic: number | null
  tecnicasDeGo: number | null
  youtubeKbdNav: number | null
}

export async function get_software_work_github_stars(): Promise<SoftwareWorkGithubStars> {
  const [fic, tecnicasDeGo, youtubeKbdNav] =
    await Promise.all([
      get_github_repo_stars(
        "marcglasberg",
        "fast_immutable_collections",
      ),
      get_github_repo_stars("psygo", "tecnicas_de_go"),
      get_github_repo_stars(
        "FanaroEngineering",
        "youtube_kbd_nav",
      ),
    ])

  return { fic, tecnicasDeGo, youtubeKbdNav }
}
