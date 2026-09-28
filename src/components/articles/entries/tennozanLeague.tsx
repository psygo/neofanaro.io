import { ArticleProps } from "@types"

import { readSgfFile } from "@components/goViewer/exports"

import { TennozanLeagueBody } from "./tennozanLeagueBody"

// readSgfFile relies on node:fs, so the sgf has to be read here, in
// a Server Component, and handed down — TennozanLeagueBody needs
// "use client" for useLang, and fs can't be bundled into a client
// component.
export function TennozanLeague({ article }: ArticleProps) {
  const sgf = readSgfFile("/articles/tennozan-league/1.sgf")

  return <TennozanLeagueBody article={article} sgf={sgf} />
}
