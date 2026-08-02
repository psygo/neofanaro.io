"use client"

import { useEffect, useRef, useState } from "react"
import { useActionState } from "react"

import { CommentWithAuthor } from "@types"

import { useLang } from "@hooks"

import {
  add_comment,
  get_article_comments,
  type AddCommentState,
} from "@actions"
import type { Player } from "@server"

import { LangLink } from "@components/common/langLink"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

type ArticleCommentsProps = {
  articleId: number
  articlePath: string
}

export function ArticleComments({
  articleId,
  articlePath,
}: ArticleCommentsProps) {
  const lang = useLang()
  const [comments, setComments] = useState<
    CommentWithAuthor[]
  >([])
  const [currentPlayer, setCurrentPlayer] =
    useState<Player | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false

    get_article_comments(articleId).then((data) => {
      if (cancelled) return
      setComments(data.comments)
      setCurrentPlayer(data.currentPlayer)
      setLoaded(true)
    })

    return () => {
      cancelled = true
    }
  }, [articleId])

  function handleNewComment(comment: CommentWithAuthor) {
    setComments((prev) => [comment, ...prev])
  }

  return (
    <section className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6">
      <h2 className="text-lg font-bold">
        {lang === "pt" ? "Comentários" : "Comments"}
      </h2>
      {loaded && !currentPlayer && (
        <p className="text-sm text-slate-600">
          {lang === "pt" ? (
            <>
              Você precisa{" "}
              <LangLink
                href="/sign-in"
                className="underline"
              >
                entrar na sua conta
              </LangLink>{" "}
              para comentar.
            </>
          ) : (
            <>
              You need to{" "}
              <LangLink
                href="/sign-in"
                className="underline"
              >
                sign in
              </LangLink>{" "}
              to comment.
            </>
          )}
        </p>
      )}
      {currentPlayer && (
        <CommentForm
          articleId={articleId}
          articlePath={articlePath}
          onSuccess={handleNewComment}
        />
      )}
      {loaded && comments.length === 0 && (
        <p className="text-sm text-slate-600">
          {lang === "pt"
            ? "Ainda não há comentários."
            : "No comments yet."}
        </p>
      )}
      <div className="flex flex-col gap-4">
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </div>
    </section>
  )
}

type CommentProps = {
  comment: CommentWithAuthor
}

function Comment({ comment }: CommentProps) {
  const lang = useLang()

  return (
    <div
      key={comment.id}
      className="flex flex-col gap-3 rounded-lg border border-slate-200 px-3 pt-1 pb-2.5"
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-semibold">
          {comment.playerNick || comment.playerName}
        </span>
        <span className="text-xs text-slate-500">
          {new Date(comment.createdAt).toLocaleDateString(
            lang === "pt" ? "pt-BR" : "en-US",
          )}
        </span>
      </div>
      <p className="mt-0 mb-0 text-sm hyphens-auto whitespace-pre-wrap text-slate-700">
        {comment.content}
      </p>
    </div>
  )
}

function CommentForm({
  articleId,
  articlePath,
  onSuccess,
}: {
  articleId: number
  articlePath: string
  onSuccess: (comment: CommentWithAuthor) => void
}) {
  const lang = useLang()
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, isPending] = useActionState<
    AddCommentState,
    FormData
  >(add_comment, {})

  useEffect(() => {
    if (state.comment) {
      onSuccess(state.comment)
      formRef.current?.reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.comment])

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-2"
    >
      <input
        type="hidden"
        name="articleId"
        value={articleId}
      />
      <input
        type="hidden"
        name="articlePath"
        value={articlePath}
      />
      <textarea
        name="content"
        required
        rows={3}
        placeholder={
          lang === "pt"
            ? "Escreva um comentário..."
            : "Write a comment..."
        }
        className={inputClasses}
      />
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer self-end rounded-lg bg-slate-100 px-4 py-1 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending
          ? lang === "pt"
            ? "Enviando..."
            : "Sending..."
          : lang === "pt"
            ? "Comentar"
            : "Comment"}
      </button>
      {state.errorCode === "empty" && (
        <p className="text-sm text-red-600">
          {lang === "pt"
            ? "O comentário não pode estar vazio."
            : "The comment can't be empty."}
        </p>
      )}
      {state.errorCode === "not_signed_in" && (
        <p className="text-sm text-red-600">
          {lang === "pt"
            ? "Você precisa entrar na sua conta."
            : "You need to sign in."}
        </p>
      )}
    </form>
  )
}
