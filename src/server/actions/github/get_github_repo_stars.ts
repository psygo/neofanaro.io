"use server"

export async function get_github_repo_stars(
  owner: string,
  repo: string,
): Promise<number | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      { next: { revalidate: 3600 } },
    )
    if (!response.ok) return null

    const data = await response.json()
    return typeof data.stargazers_count === "number"
      ? data.stargazers_count
      : null
  } catch {
    return null
  }
}
