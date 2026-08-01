import type { ComponentType, SVGProps } from "react"

import * as Flags from "country-flag-icons/react/3x2"

const flagComponents = Flags as unknown as Record<
  string,
  ComponentType<SVGProps<SVGSVGElement> & { title?: string }>
>

type CountryFlagProps = {
  countryCode: string | null
  className?: string
  title?: string | null
}

export function CountryFlag({
  countryCode,
  className,
  title,
}: CountryFlagProps) {
  if (!countryCode) return null

  const Flag = flagComponents[countryCode]
  if (!Flag) return null

  return <Flag className={className} title={title ?? undefined} />
}
