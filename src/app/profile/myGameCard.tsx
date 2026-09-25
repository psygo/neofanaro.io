import { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import type { PlayerGame } from "@actions"

import {
  formatDate,
  ogsPreviewImageUrl,
  winnerFromResult,
} from "@utils"

import {
  AiSenseiIcon,
  OgsIcon,
  YouTubeIcon,
} from "./gameLinkIcons"

export function MyGameCard({
  game,
  lang,
}: {
  game: PlayerGame
  lang: string
}) {
  const winner = winnerFromResult(game.result)
  const won = winner === game.color
  const [previewFailed, setPreviewFailed] = useState(false)
  const previewSrc = ogsPreviewImageUrl(game.ogsLink)

  const links = [
    { label: "OGS", href: game.ogsLink, Icon: OgsIcon },
    {
      label: "AI Sensei",
      href: game.aiSenseiLink,
      Icon: AiSenseiIcon,
    },
    {
      label: "YouTube",
      href: game.youtubeLink,
      Icon: YouTubeIcon,
    },
  ].filter(
    (
      link,
    ): link is {
      label: string
      href: string
      Icon: typeof OgsIcon
    } => Boolean(link.href),
  )

  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-slate-800">
      {previewSrc && !previewFailed && (
        <Image
          unoptimized
          src={previewSrc}
          alt=""
          width={120}
          height={120}
          style={{ width: 120, height: 120 }}
          className="shrink-0 rounded border border-slate-200 object-cover dark:border-slate-700"
          onError={() => setPreviewFailed(true)}
        />
      )}
      <div className="min-w-0 flex-1">
        <Link href={`/game/${game.id}`} className="block">
          <div className="flex items-baseline justify-between gap-2">
            <div className="font-semibold">
              vs {game.opponentName} ({game.opponentNick})
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {formatDate(game.date, lang)}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
            {game.leagueTitleEn && lang !== "pt"
              ? game.leagueTitleEn
              : game.leagueTitlePt}{" "}
            &middot; {game.divisionTitle}
          </p>
          <p className="mt-1 text-sm font-semibold">
            {game.result}
            {winner && (
              <span
                className={`ml-2 text-xs font-bold ${won ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
              >
                {won
                  ? lang === "pt"
                    ? "Vitória"
                    : "Won"
                  : lang === "pt"
                    ? "Derrota"
                    : "Lost"}
              </span>
            )}
          </p>
        </Link>
        {links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                title={link.label}
                className="flex items-center justify-center rounded-full bg-slate-100 p-1.5 text-slate-700 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-700"
              >
                <link.Icon />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
