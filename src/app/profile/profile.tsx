"use client"

import type { Player } from "@server"

import { useLang } from "@hooks"

import { LangLink } from "@components/common/langLink"

import { DescriptionForm } from "./descriptionForm"
import { ProfileDetailsForm } from "./profileDetailsForm"
import { SignOutButton } from "./signOutButton"

export function ProfileSection({
  player,
}: {
  player: Player | null
}) {
  const lang = useLang()

  if (!player) {
    return (
      <div className="flex w-110 flex-col gap-3">
        <h1 className="text-2xl font-bold">
          {lang === "pt" ? "Perfil" : "Profile"}
        </h1>
        <p>
          {lang === "pt"
            ? "Você precisa entrar na sua conta para ver seu perfil."
            : "You need to sign in to view your profile."}{" "}
          <LangLink href="/sign-in" className="underline">
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
      <div className="flex w-full flex-col gap-6">
        <div className="w-full">
          <p className="text-lg font-semibold">
            {player.name}
          </p>
        </div>
        <ul className="text-slate-700">
          <li>Rating: {player.rating}</li>
          {player.email && <li>Email: {player.email}</li>}
        </ul>
        <ProfileDetailsForm
          country={player.country}
          nick={player.nick}
          ogsLink={player.ogsLink}
        />
        <DescriptionForm description={player.description} />
      </div>
      <hr className="border-0.75 w-full border-gray-200" />
      <SignOutButton />
    </div>
  )
}
