"use client"

import { useLang } from "@hooks"

export function LeagueHeader() {
  const lang = useLang()

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="gap-4 text-3xl font-black">
        {lang === "pt"
          ? "Liga Tennozan 天王山"
          : "Tennozan 天王山 League"}
      </h1>
      {lang === "pt" ? (
        <p>
          Uma liga semanal, com compensação, onde todos são
          bem-vindos.
        </p>
      ) : (
        <p>
          A weekly, handicap league where everyone&apos;s
          welcome.
        </p>
      )}
    </div>
  )
}
