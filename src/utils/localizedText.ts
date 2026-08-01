// Falls back to the English text when the Portuguese one hasn't
// been written yet (empty string), instead of showing a blank.
export function localizedText(
  textEn: string,
  textPt: string,
  lang: string,
): string {
  if (lang === "pt" && textPt.trim() !== "") return textPt
  return textEn
}
