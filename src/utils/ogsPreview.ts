// OGS exposes a board-thumbnail PNG per game at this API path (the same
// image it uses as its own og:image), keyed off the numeric game id.
export function ogsPreviewImageUrl(
  ogsLink: string | null | undefined,
): string | null {
  if (!ogsLink) return null
  const matches = [...ogsLink.matchAll(/\d+/g)]
  const id = matches.at(-1)?.[0]
  if (!id) return null
  return `https://online-go.com/api/v1/games/${id}/png`
}
