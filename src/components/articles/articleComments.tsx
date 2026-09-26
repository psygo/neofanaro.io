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
  update_comment,
  vote_comment,
  type AddCommentState,
  type UpdateCommentState,
} from "@actions"
import type { Player } from "@server"

import { LangLink } from "@components/common/langLink"
import { CommentMarkdown } from "./commentMarkdown"
import { VoteButtons } from "./voteButtons"

const inputClasses =
  "rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"

// Each level nests a bit further right, capped so a long reply
// chain doesn't push comments off the edge on narrow screens.
const maxIndentDepth = 4
const indentPerDepth = 20

type ArticleCommentsProps = {
  articleId: number
  articlePath: string
  initialComments: CommentWithAuthor[]
  initialCurrentPlayer: Player | null
}

export function ArticleComments({
  articleId,
  articlePath,
  initialComments,
  initialCurrentPlayer,
}: ArticleCommentsProps) {
  const lang = useLang()
  const [comments, setComments] =
    useState<CommentWithAuthor[]>(initialComments)
  const [replyingToId, setReplyingToId] = useState<
    number | null
  >(null)
  const currentPlayer = initialCurrentPlayer

  function handleNewComment(comment: CommentWithAuthor) {
    setComments((prev) => [comment, ...prev])
    setReplyingToId(null)
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

  const topLevelComments = comments.filter(
    (comment) => !comment.parentId,
  )

  function repliesTo(
    parentId: number,
  ): CommentWithAuthor[] {
    return comments
      .filter((comment) => comment.parentId === parentId)
      .sort(
        (a, b) =>
          a.createdAt.getTime() - b.createdAt.getTime(),
      )
  }

  return (
    <section className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
      <h2 className="text-lg font-bold">
        {lang === "pt" ? "Comentários" : "Comments"}
      </h2>
      {!currentPlayer && (
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {lang === "pt" ? (
            <>
              Você precisa{" "}
              <LangLink
                href="/sign-in"
                className="underline underline-offset-4"
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
                className="underline underline-offset-4"
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
      {comments.length === 0 && (
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {lang === "pt"
            ? "Ainda não há comentários."
            : "No comments yet."}
        </p>
      )}
      <div className="flex flex-col gap-4">
        {topLevelComments.map((comment) => (
          <CommentThread
            key={comment.id}
            comment={comment}
            depth={0}
            articleId={articleId}
            articlePath={articlePath}
            isSignedIn={!!currentPlayer}
            isAuthor={
              currentPlayer?.id === comment.playerId
            }
            replyingToId={replyingToId}
            onReplyToggle={setReplyingToId}
            repliesTo={repliesTo}
            currentPlayerId={currentPlayer?.id ?? null}
            onNewComment={handleNewComment}
            onUpdated={handleCommentUpdated}
            onVoted={handleCommentVoted}
          />
        ))}
      </div>
    </section>
  )
}

type CommentThreadProps = {
  comment: CommentWithAuthor
  depth: number
  articleId: number
  articlePath: string
  isSignedIn: boolean
  isAuthor: boolean
  replyingToId: number | null
  onReplyToggle: (id: number | null) => void
  repliesTo: (parentId: number) => CommentWithAuthor[]
  currentPlayerId: number | null
  onNewComment: (comment: CommentWithAuthor) => void
  onUpdated: (comment: CommentWithAuthor) => void
  onVoted: (commentId: number, summary: VoteSummary) => void
}

function CommentThread({
  comment,
  depth,
  articleId,
  articlePath,
  isSignedIn,
  isAuthor,
  replyingToId,
  onReplyToggle,
  repliesTo,
  currentPlayerId,
  onNewComment,
  onUpdated,
  onVoted,
}: CommentThreadProps) {
  const isReplying = replyingToId === comment.id
  const replies = repliesTo(comment.id)

  return (
    <div
      className="flex flex-col gap-3"
      style={{
        marginLeft:
          Math.min(depth, maxIndentDepth) * indentPerDepth,
      }}
    >
      <Comment
        comment={comment}
        articlePath={articlePath}
        isAuthor={isAuthor}
        canReply={isSignedIn}
        onReplyClick={() =>
          onReplyToggle(isReplying ? null : comment.id)
        }
        onUpdated={onUpdated}
        onVoted={onVoted}
      />
      {isReplying && (
        <CommentForm
          articleId={articleId}
          articlePath={articlePath}
          parentId={comment.id}
          onSuccess={onNewComment}
          onCancel={() => onReplyToggle(null)}
        />
      )}
      {replies.length > 0 && (
        <div className="flex flex-col gap-4">
          {replies.map((reply) => (
            <CommentThread
              key={reply.id}
              comment={reply}
              depth={depth + 1}
              articleId={articleId}
              articlePath={articlePath}
              isSignedIn={isSignedIn}
              isAuthor={currentPlayerId === reply.playerId}
              replyingToId={replyingToId}
              onReplyToggle={onReplyToggle}
              repliesTo={repliesTo}
              currentPlayerId={currentPlayerId}
              onNewComment={onNewComment}
              onUpdated={onUpdated}
              onVoted={onVoted}
            />
          ))}
        </div>
      )}
    </div>
  )
}

type CommentProps = {
  comment: CommentWithAuthor
  articlePath: string
  isAuthor: boolean
  canReply: boolean
  onReplyClick: () => void
  onUpdated: (comment: CommentWithAuthor) => void
  onVoted: (commentId: number, summary: VoteSummary) => void
}

function Comment({
  comment,
  articlePath,
  isAuthor,
  canReply,
  onReplyClick,
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
    <div className="flex flex-col gap-2 rounded-lg border border-slate-300 px-4.25 pt-2.5 pb-2.5 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
      <div className="flex items-baseline justify-between gap-2">
        <LangLink
          href={`/player/${comment.playerId}`}
          className="font-semibold no-underline hover:underline"
        >
          {comment.playerName}
        </LangLink>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {formatDate(comment.createdAt, lang)}
            {comment.editedAt &&
              ` (${lang === "pt" ? "editado" : "edited"})`}
          </span>
          {isAuthor && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="cursor-pointer text-xs text-slate-500 underline underline-offset-4 dark:text-slate-400"
            >
              {lang === "pt" ? "Editar" : "Edit"}
            </button>
          )}
        </div>
      </div>
      <CommentMarkdown content={comment.content} />
      <div className="flex items-center justify-between">
        {canReply ? (
          <button
            type="button"
            onClick={onReplyClick}
            className="cursor-pointer text-xs text-slate-500 underline underline-offset-4 dark:text-slate-400"
          >
            {lang === "pt" ? "Responder" : "Reply"}
          </button>
        ) : (
          <span />
        )}
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
      className="flex flex-col gap-2 rounded-lg border border-slate-200 px-3 pt-1 pb-2.5 dark:border-slate-700"
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
          className="cursor-pointer rounded-lg px-3 py-1 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          {lang === "pt" ? "Cancelar" : "Cancel"}
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer rounded-lg bg-slate-100 px-4 py-1 text-sm ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-800 dark:ring-slate-700 dark:hover:bg-slate-700"
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
        <p className="text-sm text-red-600 dark:text-red-400">
          {lang === "pt"
            ? "O comentário não pode estar vazio."
            : "The comment can't be empty."}
        </p>
      )}
      {state.errorCode === "not_authorized" && (
        <p className="text-sm text-red-600 dark:text-red-400">
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
  parentId,
  onSuccess,
  onCancel,
}: {
  articleId: number
  articlePath: string
  parentId?: number
  onSuccess: (comment: CommentWithAuthor) => void
  onCancel?: () => void
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
      {parentId && (
        <input
          type="hidden"
          name="parentId"
          value={parentId}
        />
      )}
      <textarea
        name="content"
        required
        rows={3}
        autoFocus={!!parentId}
        placeholder={
          parentId
            ? lang === "pt"
              ? "Escreva uma resposta..."
              : "Write a reply..."
            : lang === "pt"
              ? "Escreva um comentário..."
              : "Write a comment..."
        }
        className={inputClasses}
      />
      <div className="flex justify-end gap-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="cursor-pointer rounded-lg px-3 py-1 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            {lang === "pt" ? "Cancelar" : "Cancel"}
          </button>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer rounded-lg bg-slate-100 px-3 py-1 text-sm ring-1 ring-slate-300 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-800 dark:ring-slate-700 dark:hover:bg-slate-700"
        >
          {isPending
            ? lang === "pt"
              ? "Enviando..."
              : "Sending..."
            : parentId
              ? lang === "pt"
                ? "Responder"
                : "Reply"
              : lang === "pt"
                ? "Comentar"
                : "Comment"}
        </button>
      </div>
      {state.errorCode === "empty" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {lang === "pt"
            ? "O comentário não pode estar vazio."
            : "The comment can't be empty."}
        </p>
      )}
      {state.errorCode === "not_signed_in" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {lang === "pt"
            ? "Você precisa entrar na sua conta."
            : "You need to sign in."}
        </p>
      )}
    </form>
  )
}
