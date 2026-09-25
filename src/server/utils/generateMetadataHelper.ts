import type { Metadata } from "next"

import { localizedText, SITE_URL } from "@utils"

import { get_article } from "../actions/articles/get_articles"

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
      url: "/logos/favicon.png",
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

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "logos/fanaro.io_32.png",
        },
      ],
    },
  }
}
