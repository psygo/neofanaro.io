import { useSearchParams } from "next/navigation"

export function useLang() {
  const searchParams = useSearchParams()
  const currentLang = searchParams.get("lang") || "en"

  return currentLang
}
