import { countries as countryCodes } from "country-flag-icons"

export type Country = {
  code: string
  nameEn: string
  namePt: string
}

const enNames = new Intl.DisplayNames(["en"], {
  type: "region",
})
const ptNames = new Intl.DisplayNames(["pt"], {
  type: "region",
})

// Not every flag code from country-flag-icons (which includes
// entries like "AC" Ascension Island) is a region Intl recognizes,
// so codes it can't name are skipped from the country picker.
function tryDisplayName(
  displayNames: Intl.DisplayNames,
  code: string,
): string | null {
  try {
    return displayNames.of(code) ?? null
  } catch {
    return null
  }
}

export const countries: Country[] = countryCodes
  .map((code) => ({
    code,
    nameEn: tryDisplayName(enNames, code),
    namePt: tryDisplayName(ptNames, code),
  }))
  .filter(
    (country): country is { code: string; nameEn: string; namePt: string | null } =>
      country.nameEn !== null,
  )
  .map((country) => ({
    code: country.code,
    nameEn: country.nameEn,
    namePt: country.namePt ?? country.nameEn,
  }))
  .sort((a, b) => a.nameEn.localeCompare(b.nameEn))

export function countryName(
  code: string | null,
  lang: string,
): string | null {
  if (!code) return null
  const country = countries.find(
    (candidate) => candidate.code === code,
  )
  if (!country) return code
  return lang === "pt" ? country.namePt : country.nameEn
}
