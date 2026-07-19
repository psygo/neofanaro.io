"use client"

import {
  GoBoard,
  GoBoardContainer,
  GoBoardControls,
  GoMetadataContainer,
} from "goban-web-react"

type GoBoardPlayerProps = {
  sgf?: string
  width?: number | string
  height?: number | string
  interactive?: boolean
  showMetadata?: boolean
  theme?: string
}

export function GoBoardPlayer({
  sgf,
  width = 480,
  height = 480,
  interactive = true,
  showMetadata = true,
  theme = "wood",
}: GoBoardPlayerProps) {
  return (
    <div className="not-prose">
      <GoBoardContainer>
        {showMetadata && <GoMetadataContainer />}
        <GoBoard
          sgf={sgf}
          width={width}
          height={height}
          interactive={interactive}
          theme={theme}
        />
        <GoBoardControls />
      </GoBoardContainer>
    </div>
  )
}
