import Link from "next/link"

import { CommentWithArticle } from "@types"

import { localizedText, formatDate } from "@utils"

export function MyCommentCard({
  comment,
  lang,
}: {
  comment: CommentWithArticle
  lang: string
}) {
  return (
    <Link
      href={`/articles/${comment.articlePath}`}
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
          {formatDate(comment.createdAt, lang)}
          {comment.editedAt &&
            ` (${lang === "pt" ? "editado" : "edited"})`}
        </span>
      </div>
      <p className="mt-1 text-sm hyphens-auto text-slate-700">
        {comment.content}
      </p>
    </Link>
  )
}
