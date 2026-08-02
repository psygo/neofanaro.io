"use client"

import type { Player } from "@server"

import { CommentWithArticle } from "@types"

import { useLang } from "@hooks"

import { localizedText } from "@utils"

import { LangLink } from "@components/common/langLink"

import { DescriptionForm } from "./descriptionForm"
import { ProfileDetailsForm } from "./profileDetailsForm"
import { SignOutButton } from "./signOutButton"
import Link from "next/link"

export function ProfileSection({
  player,
  comments,
}: {
  player: Player | null
  comments: CommentWithArticle[]
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
      <MyComments comments={comments} lang={lang} />
      <hr className="border-0.75 w-full border-gray-200" />
      <SignOutButton />
    </div>
  )
}

function MyComments({
  comments,
  lang,
}: {
  comments: CommentWithArticle[]
  lang: string
}) {
  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="text-lg font-bold">
        {lang === "pt" ? "Meus comentários" : "My comments"}
      </h2>
      {comments.length === 0 ? (
        <p className="text-sm text-slate-600">
          {lang === "pt"
            ? "Você ainda não fez nenhum comentário."
            : "You haven't made any comments yet."}
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {comments.map((comment) => (
            <Link
              href={`/articles/${comment.articlePath}`}
              key={comment.id}
              className="rounded-lg border border-slate-200 p-3 hover:bg-gray-100"
            >
              <div className="flex items-baseline justify-between gap-2">
                <div className="font-semibold">
                  {localizedText(
                    comment.articleTitleEn,
                    comment.articleTitlePt,
                    lang,
                  )}
                </div>
                <span className="text-xs text-slate-500">
                  {new Date(
                    comment.createdAt,
                  ).toLocaleDateString(
                    lang === "pt" ? "pt-BR" : "en-US",
                  )}
                </span>
              </div>
              <p className="mt-1 text-sm hyphens-auto text-slate-700">
                {comment.content}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
