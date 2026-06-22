import Link from "next/link"

import { useLang } from "@hooks/useLang"

type LangLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
}

export function LangLink({
  href,
  children,
  className = "",
}: LangLinkProps) {
  const lang = useLang()

  const completeHref = `${href}?lang=${lang}`

  return (
    <Link className={className} href={completeHref}>
      {children}
    </Link>
  )
}
