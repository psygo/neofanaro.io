export function formatPrice(
  cents: number,
  lang: string,
): string {
  const amount = (cents / 100).toFixed(2)
  return lang === "pt" ? `R$ ${amount}` : `$${amount}`
}
