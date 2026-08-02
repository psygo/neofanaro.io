"use client"

import { useEffect, useRef, useState } from "react"
import { useActionState } from "react"

import {
  CommentWithAuthor,
  VoteSummary,
  VoteValue,
} from "@types"

import { useLang } from "@hooks"

import { formatDate } from "@utils"

import {
  add_comment,
  get_article_comments,
  update_comment,
  vote_comment,
  type AddCommentState,
  type UpdateCommentState,
} from "@actions"
import type { Player } from "@server"

import { LangLink } from "@components/common/langLink"
import { VoteButtons } from "./voteButtons"

const inputClasses =
  "rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"

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

  function handleCommentUpdated(
    comment: CommentWithAuthor,
  ) {
    setComments((prev) =>
      prev.map((c) => (c.id === comment.id ? comment : c)),
    )
  }

  function handleCommentVoted(
    commentId: number,
    summary: VoteSummary,
  ) {
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId ? { ...c, ...summary } : c,
      ),
    )
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
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            articlePath={articlePath}
            isAuthor={
              currentPlayer?.id === comment.playerId
            }
            onUpdated={handleCommentUpdated}
            onVoted={handleCommentVoted}
          />
        ))}
      </div>
    </section>
  )
}

type CommentProps = {
  comment: CommentWithAuthor
  articlePath: string
  isAuthor: boolean
  onUpdated: (comment: CommentWithAuthor) => void
  onVoted: (commentId: number, summary: VoteSummary) => void
}

function Comment({
  comment,
  articlePath,
  isAuthor,
  onUpdated,
  onVoted,
}: CommentProps) {
  const lang = useLang()
  const [isEditing, setIsEditing] = useState(false)

  async function handleVote(value: VoteValue) {
    const result = await vote_comment(comment.id, value)
    if (!("errorCode" in result))
      onVoted(comment.id, result)
  }

  if (isEditing) {
    return (
      <EditCommentForm
        comment={comment}
        articlePath={articlePath}
        onSaved={(updated) => {
          onUpdated(updated)
          setIsEditing(false)
        }}
        onCancel={() => setIsEditing(false)}
      />
    )
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-slate-300 px-4.25 pt-2.5 pb-2.5 hover:bg-slate-100">
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-semibold">
          {comment.playerName}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">
            {formatDate(comment.createdAt, lang)}
            {comment.editedAt &&
              ` (${lang === "pt" ? "editado" : "edited"})`}
          </span>
          {isAuthor && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="cursor-pointer text-xs text-slate-500 underline"
            >
              {lang === "pt" ? "Editar" : "Edit"}
            </button>
          )}
        </div>
      </div>
      <p className="mt-0 mb-0 text-sm hyphens-auto whitespace-pre-wrap text-slate-700">
        {comment.content}
      </p>
      <div className="self-end">
        <VoteButtons
          upvotes={comment.upvotes}
          downvotes={comment.downvotes}
          myVote={comment.myVote}
          onVote={handleVote}
        />
      </div>
    </div>
  )
}

function EditCommentForm({
  comment,
  articlePath,
  onSaved,
  onCancel,
}: {
  comment: CommentWithAuthor
  articlePath: string
  onSaved: (comment: CommentWithAuthor) => void
  onCancel: () => void
}) {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState<
    UpdateCommentState,
    FormData
  >(update_comment, {})

  useEffect(() => {
    if (state.comment) onSaved(state.comment)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.comment])

  return (
    <form
      action={formAction}
      className="flex flex-col gap-2 rounded-lg border border-slate-200 px-3 pt-1 pb-2.5"
    >
      <input
        type="hidden"
        name="commentId"
        value={comment.id}
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
        defaultValue={comment.content}
        className={inputClasses}
      />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer rounded-lg px-3 py-1 text-sm text-slate-600 hover:bg-slate-100"
        >
          {lang === "pt" ? "Cancelar" : "Cancel"}
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer rounded-lg bg-slate-100 px-4 py-1 text-sm ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending
            ? lang === "pt"
              ? "Salvando..."
              : "Saving..."
            : lang === "pt"
              ? "Salvar"
              : "Save"}
        </button>
      </div>
      {state.errorCode === "empty" && (
        <p className="text-sm text-red-600">
          {lang === "pt"
            ? "O comentário não pode estar vazio."
            : "The comment can't be empty."}
        </p>
      )}
      {state.errorCode === "not_authorized" && (
        <p className="text-sm text-red-600">
          {lang === "pt"
            ? "Você não pode editar esse comentário."
            : "You can't edit that comment."}
        </p>
      )}
    </form>
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
        className="cursor-pointer self-end rounded-lg bg-slate-100 px-3 py-1 text-sm ring-1 ring-slate-300 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
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
