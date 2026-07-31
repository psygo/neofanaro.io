// Reads who won off of a result string like "B+3.5" or "W+R".
export function winnerFromResult(
  result: string,
): "B" | "W" | null {
  const first = result.trim().charAt(0).toUpperCase()
  return first === "B" || first === "W" ? first : null
}
