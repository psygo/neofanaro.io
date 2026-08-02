export function formatDate(
  date: Date | string,
  lang: string,
): string {
  return new Date(date).toLocaleDateString(
    lang === "pt" ? "pt-BR" : "en-US",
  )
}
