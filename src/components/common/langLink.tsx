import Link from "next/link"

import { useLang } from "@hooks/useLang"

type LangLinkProps = {
  href: string
  children: React.ReactNode
}

export function LangLink({
  href,
  children,
}: LangLinkProps) {
  const lang = useLang()

  const completeHref = `${href}?lang=${lang}`

  return <Link href={completeHref}>{children}</Link>
}
