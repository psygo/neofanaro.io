"use client"

import { useLang } from "@hooks"

export type GoViewerKeyProps = {
  className?: string
}

// Static, but kept as its own detachable component (rather than
// baked into the board) so an article can place it beside, above,
// or entirely separate from the board and controls.
export function GoViewerKey({
  className = "",
}: GoViewerKeyProps) {
  const lang = useLang()

  return (
    <ul
      className={`m-0 flex flex-wrap gap-x-4 gap-y-1 p-0 text-sm text-slate-600 dark:text-slate-400 [&>li]:m-0 [&>li]:flex [&>li]:list-none [&>li]:items-center [&>li]:gap-1.5 ${className}`}
    >
      <li>
        <span className="inline-block h-3 w-3 rounded-full bg-[#161616]" />
        {lang === "pt" ? "Preto" : "Black"}
      </li>
      <li>
        <span className="inline-block h-3 w-3 rounded-full border border-[#161616] bg-[#f5f5f5]" />
        {lang === "pt" ? "Branco" : "White"}
      </li>
      <li>
        <span className="inline-block h-3 w-3 rounded-full border-2 border-slate-500" />
        {lang === "pt" ? "Última jogada" : "Last move"}
      </li>
      <li>
        <span className="inline-block h-2 w-2 rounded-full bg-slate-500 opacity-50" />
        {lang === "pt" ? "Ponto de ko" : "Ko point"}
      </li>
    </ul>
  )
}
