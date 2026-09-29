import type { Metadata } from "next"

import { localizedText, SITE_URL } from "@utils"

import { get_article } from "../actions/articles/get_articles"

// Articles with their own real preview image — a share card built
// from these looks better than the generic site logo used as a
// fallback below. No `previewImage` column exists on the article
// table (nor a consistent on-disk naming convention across
// articles to detect one automatically), so this is hand-curated;
// add an entry here for any future article with its own cover art.
const previewImageOverrides: Record<string, string> = {
  "little-knife-god-books":
    "/articles/little-knife-god-books/little_knife_god_cover_1.png",
  "min-cjk-for-go":
    "/articles/min-cjk-for-go/just_enough_japanese_cover.jpg",
  haengma3: "/articles/haengma3/haengma_3_book_cover.png",
}

export const topLevelMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "neofanaro.io",
  description: "neofanaro.io",
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      pt: `${SITE_URL}/?lang=pt`,
    },
  },
  icons: [
    {
      rel: "icon",
      url: "/logos/fanaro.io.svg",
      type: "image/svg+xml",
    },
    {
      rel: "icon",
      url: "/logos/favicon.png",
      type: "image/png",
    },
  ],
  openGraph: {
    title: "neofanaro.io",
    description: "Philippe Fanaro's Blog",
    url: SITE_URL,
    siteName: "neofanaro.io",
    images: [
      {
        url: "/metadata/neofanaro.io_sample.png",
      },
    ],
  },
}

export async function generateArticleMetadataHelper(
  path: string,
  lang?: string,
): Promise<Metadata> {
  const article = await get_article(path)
  if (!article) return {}

  const title = localizedText(
    article.titleEn,
    article.titlePt,
    lang ?? "en",
  )
  const description = localizedText(
    article.descriptionEn,
    article.descriptionPt,
    lang ?? "en",
  )

  const previewImage =
    previewImageOverrides[path] ?? "/logos/favicon_500.png"

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
        },
      ],
    },
  }
}
