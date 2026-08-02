"use server"

import { revalidatePath } from "next/cache"

import { eq } from "drizzle-orm"

import { CommentWithAuthor } from "@types"

import { db, commentsTable } from "@db"
import { getCurrentPlayer } from "@server/auth/session"

export type UpdateCommentState = {
  errorCode?: "not_signed_in" | "empty" | "not_authorized"
  comment?: CommentWithAuthor
}

export async function update_comment(
  _prevState: UpdateCommentState,
  formData: FormData,
): Promise<UpdateCommentState> {
  const player = await getCurrentPlayer()
  if (!player) return { errorCode: "not_signed_in" }

  const commentId = Number(formData.get("commentId"))
  const articlePath = String(
    formData.get("articlePath") || "",
  )
  const content = String(
    formData.get("content") || "",
  ).trim()
  if (!content) return { errorCode: "empty" }

  const [existing] = await db
    .select()
    .from(commentsTable)
    .where(eq(commentsTable.id, commentId))
    .limit(1)

  if (!existing || existing.playerId !== player.id) {
    return { errorCode: "not_authorized" }
  }

  const [updated] = await db
    .update(commentsTable)
    .set({ content, editedAt: new Date() })
    .where(eq(commentsTable.id, commentId))
    .returning()

  if (articlePath) revalidatePath(`/articles/${articlePath}`)
  revalidatePath("/profile")

  return {
    comment: {
      ...updated,
      playerName: player.name,
      playerNick: player.nick,
    },
  }
}
