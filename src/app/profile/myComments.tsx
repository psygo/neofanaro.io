import { CommentWithArticle } from "@types"

import { MyCommentCard } from "./myCommentCard"

export function MyComments({
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
            <MyCommentCard
              key={comment.id}
              comment={comment}
              lang={lang}
            />
          ))}
        </div>
      )}
    </div>
  )
}
