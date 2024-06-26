import { type PostRow } from "@types"

import { FootNotesContainer } from "./FootNote"
import { PostTitle } from "./PostTitle"

type PostProps = { postData: PostRow }

export function Post({ postData }: PostProps) {
  return (
    <article className="prose px-2 dark:prose-invert">
      <PostTitle>{postData.title}</PostTitle>

      {postData.content}

      <FootNotesContainer />
    </article>
  )
}
