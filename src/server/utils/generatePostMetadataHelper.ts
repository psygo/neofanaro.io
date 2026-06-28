import type { Metadata } from "next"

import { get_post } from "../actions/posts/get_posts"

export async function generatePostMetadataHelper(
  path: string,
): Promise<Metadata> {
  const post = await get_post(path)

  return post
    ? {
        title: post.title,
        description: post.description,
        openGraph: {
          title: post.title,
          description: post.description,
        },
      }
    : {}
}
