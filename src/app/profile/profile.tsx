"use client"

import type { Player } from "@server"
import type { PlayerGame } from "@actions"

import { CommentWithArticle } from "@types"

import { useLang } from "@hooks"

import { LangLink } from "@components/common/langLink"

import { ArticleFontForm } from "./articleFontForm"
import { ArticleFontSizeForm } from "./articleFontSizeForm"
import { DescriptionForm } from "./descriptionForm"
import { GoViewerPreferencesForm } from "./goViewerPreferencesForm"
import { MyComments } from "./myComments"
import { MyGames } from "./myGames"
import { ProfileDetailsForm } from "./profileDetailsForm"
import { SignOutButton } from "./signOutButton"
import { ThemeForm } from "./themeForm"

export function ProfileSection({
  player,
  comments,
  games,
}: {
  player: Player | null
  comments: CommentWithArticle[]
  games: PlayerGame[]
}) {
  const lang = useLang()

  if (!player) {
    return (
      <div className="flex w-full max-w-110 flex-col gap-3">
        <h1 className="text-2xl font-bold">
          {lang === "pt" ? "Perfil" : "Profile"}
        </h1>
        <p>
          {lang === "pt"
            ? "Você precisa entrar na sua conta para ver seu perfil."
            : "You need to sign in to view your profile."}{" "}
          <LangLink
            href="/sign-in"
            className="underline underline-offset-4"
          >
            {lang === "pt" ? "Entrar" : "Sign in"}
          </LangLink>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="flex max-w-110 flex-col items-center gap-8">
      <h1 className="text-center text-2xl font-bold">
        {lang === "pt" ? "Perfil" : "Profile"}
      </h1>

      <div className="flex w-full flex-col gap-3">
        <p className="text-lg font-semibold">
          {player.name}
        </p>
        <ul className="text-slate-700 dark:text-slate-300">
          <li>Rating: {player.rating}</li>
          {player.email && <li>Email: {player.email}</li>}
        </ul>
      </div>

      <hr className="border-0.75 w-full border-gray-200 dark:border-slate-800" />

      <div className="flex w-full flex-col gap-6">
        <h2 className="text-lg font-bold">
          {lang === "pt" ? "Detalhes" : "Details"}
        </h2>
        <ProfileDetailsForm
          country={player.country}
          nick={player.nick}
          ogsLink={player.ogsLink}
        />
        <DescriptionForm description={player.description} />
      </div>

      <hr className="border-0.75 w-full border-gray-200 dark:border-slate-800" />

      <div className="flex w-full flex-col gap-6">
        <h2 className="text-lg font-bold">
          {lang === "pt" ? "Preferências" : "Preferences"}
        </h2>
        <div className="flex w-full flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <ArticleFontForm
            articleFont={player.articleFont}
          />
          <ArticleFontSizeForm
            articleFontSize={player.articleFontSize}
          />
          <ThemeForm />
        </div>
        <div className="flex w-full flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <h3 className="font-bold text-slate-700 dark:text-slate-300">
            {lang === "pt"
              ? "Tabuleiro de Go"
              : "Go viewer board"}
          </h3>
          <GoViewerPreferencesForm
            goViewerBackground={player.goViewerBackground}
            goViewerBlackStone={player.goViewerBlackStone}
            goViewerWhiteStone={player.goViewerWhiteStone}
            goViewerFont={player.goViewerFont}
          />
        </div>
      </div>

      <hr className="border-0.75 w-full border-gray-200 dark:border-slate-800" />

      <MyGames games={games} lang={lang} />
      <MyComments comments={comments} lang={lang} />

      <hr className="border-0.75 w-full border-gray-200 dark:border-slate-800" />

      <SignOutButton />
    </div>
  )
}
