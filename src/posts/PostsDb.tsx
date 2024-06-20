import { type PostsDb } from "@types"

import { EpubTsumegoTemplate } from "./all_posts/2022/epub-tsumego-template/EpubTsumegoTemplate"

export const articlesDb: PostsDb = {
  "epub-tsumego-template": {
    date: new Date(2024, 5, 1),
    title: "EPUB Tsumego Template",
    content: <EpubTsumegoTemplate />,
  },
}
