"use server"

import { revalidatePath } from "next/cache"

import { CommentWithAuthor } from "@types"

import { db, commentsTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type AddCommentState = {
  errorCode?: "not_signed_in" | "empty"
  comment?: CommentWithAuthor
}

export async function add_comment(
  _prevState: AddCommentState,
  formData: FormData,
): Promise<AddCommentState> {
  const player = await getCurrentPlayer()
  if (!player) return { errorCode: "not_signed_in" }

  const articleId = Number(formData.get("articleId"))
  const articlePath = String(
    formData.get("articlePath") || "",
  )
  const content = String(
    formData.get("content") || "",
  ).trim()
  if (!content) return { errorCode: "empty" }

  const [inserted] = await db
    .insert(commentsTable)
    .values({ articleId, playerId: player.id, content })
    .returning()

  if (articlePath) revalidatePath(`/articles/${articlePath}`)
  revalidatePath("/profile")

  return {
    comment: {
      ...inserted,
      playerName: player.name,
      playerNick: player.nick,
    },
  }
}
