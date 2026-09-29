"use client"

import { useEffect } from "react"

import { useLang } from "@hooks"

// <html lang> can't just be set once in the root layout — it needs
// to track whichever language is actually on screen (driven by the
// `?lang=` toggle, same value every article's own content branches
// on), since it's what the browser uses to pick hyphenation rules
// for `hyphens-auto` text. Left hardcoded, every article always
// hyphenates as English, wrong for anything rendered in Portuguese.
export function HtmlLangSync() {
  const lang = useLang()

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return null
}
