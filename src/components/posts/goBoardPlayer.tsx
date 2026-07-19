"use client"

import {
  GoBoard,
  GoBoardContainer,
  GoBoardControls,
  GoMetadataContainer,
} from "goban-web-react"

type GoBoardPlayerProps = {
  sgf?: string
  width?: number
  height?: number
  interactive?: boolean
  showMetadata?: boolean
}

export function GoBoardPlayer({
  sgf,
  width = 480,
  height = 480,
  interactive = true,
  showMetadata = true,
}: GoBoardPlayerProps) {
  return (
    <GoBoardContainer>
      {showMetadata && <GoMetadataContainer />}
      <GoBoard
        sgf={sgf}
        width={width}
        height={height}
        interactive={interactive}
      />
      <GoBoardControls />
    </GoBoardContainer>
  )
}
