"use client"

import { useState, useTransition } from "react"

import {
  update_go_viewer_background,
  update_go_viewer_black_stone,
  update_go_viewer_font,
  update_go_viewer_white_stone,
} from "@actions"

import {
  GoViewerBackgroundPreference,
  GoViewerFontPreference,
  GoViewerStonePreference,
} from "@types"

import { useLang } from "@hooks"

import {
  Select,
  SelectOption,
} from "@components/common/select"

const backgroundOptions: SelectOption[] = [
  { value: "auto", label: "Default" },
  { value: "transparent", label: "Transparent" },
  { value: "bookish", label: "Bookish" },
  { value: "desert", label: "Desert" },
  { value: "hikaru", label: "Hikaru" },
  { value: "kaya", label: "Kaya" },
]

const stoneOptions: SelectOption[] = [
  { value: "auto", label: "Default" },
  { value: "bookish", label: "Bookish" },
  { value: "desert", label: "Desert" },
  { value: "hikaru", label: "Hikaru" },
  { value: "kaya", label: "Kaya" },
]

const fontOptions: SelectOption[] = [
  { value: "auto", label: "Default" },
  { value: "sans", label: "Sans" },
  { value: "mono", label: "Mono" },
  { value: "serif", label: "Serif" },
  { value: "latex", label: "LaTeX" },
  { value: "newcm", label: "New Computer Modern" },
  { value: "garamond", label: "Adobe Garamond Pro" },
]

const knownBackgrounds = backgroundOptions.map(
  (o) => o.value,
)
const knownStones = stoneOptions.map((o) => o.value)
const knownFonts = fontOptions.map((o) => o.value)

export function GoViewerPreferencesForm({
  goViewerBackground,
  goViewerBlackStone,
  goViewerWhiteStone,
  goViewerFont,
}: {
  goViewerBackground: string
  goViewerBlackStone: string
  goViewerWhiteStone: string
  goViewerFont: string
}) {
  const lang = useLang()
  const [, startTransition] = useTransition()

  const [background, setBackground] =
    useState<GoViewerBackgroundPreference>(
      knownBackgrounds.includes(goViewerBackground)
        ? (goViewerBackground as GoViewerBackgroundPreference)
        : "auto",
    )
  const [blackStone, setBlackStone] =
    useState<GoViewerStonePreference>(
      knownStones.includes(goViewerBlackStone)
        ? (goViewerBlackStone as GoViewerStonePreference)
        : "auto",
    )
  const [whiteStone, setWhiteStone] =
    useState<GoViewerStonePreference>(
      knownStones.includes(goViewerWhiteStone)
        ? (goViewerWhiteStone as GoViewerStonePreference)
        : "auto",
    )
  const [font, setFont] = useState<GoViewerFontPreference>(
    knownFonts.includes(goViewerFont)
      ? (goViewerFont as GoViewerFontPreference)
      : "auto",
  )

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col gap-1">
        <label className="font-semibold text-slate-700 dark:text-slate-300">
          {lang === "pt"
            ? "Fundo do tabuleiro"
            : "Board background"}
        </label>
        <Select
          value={background}
          onChange={(newValue) => {
            const next =
              newValue as GoViewerBackgroundPreference
            setBackground(next)
            startTransition(() => {
              update_go_viewer_background(next)
            })
          }}
          options={backgroundOptions}
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label className="font-semibold text-slate-700 dark:text-slate-300">
          {lang === "pt" ? "Pedra preta" : "Black stone"}
        </label>
        <Select
          value={blackStone}
          onChange={(newValue) => {
            const next = newValue as GoViewerStonePreference
            setBlackStone(next)
            startTransition(() => {
              update_go_viewer_black_stone(next)
            })
          }}
          options={stoneOptions}
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label className="font-semibold text-slate-700 dark:text-slate-300">
          {lang === "pt" ? "Pedra branca" : "White stone"}
        </label>
        <Select
          value={whiteStone}
          onChange={(newValue) => {
            const next = newValue as GoViewerStonePreference
            setWhiteStone(next)
            startTransition(() => {
              update_go_viewer_white_stone(next)
            })
          }}
          options={stoneOptions}
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label className="font-semibold text-slate-700 dark:text-slate-300">
          {lang === "pt"
            ? "Fonte do tabuleiro"
            : "Board font"}
        </label>
        <Select
          value={font}
          onChange={(newValue) => {
            const next = newValue as GoViewerFontPreference
            setFont(next)
            startTransition(() => {
              update_go_viewer_font(next)
            })
          }}
          options={fontOptions}
        />
      </div>
    </div>
  )
}
