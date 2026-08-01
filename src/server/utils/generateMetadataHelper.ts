import type { Metadata } from "next"

import { localizedText } from "@utils"

import { get_article } from "../actions/articles/get_articles"

export const topLevelMetadata: Metadata = {
  metadataBase: new URL("https://neofanaroio.vercel.app"),
  title: "neofanaro.io",
  description: "neofanaro.io",
  alternates: {
    canonical: "https://neofanaroio.vercel.app",
    languages: {
      en: "https://neofanaroio.vercel.app",
      pt: "https://neofanaroio.vercel.app/?lang=pt",
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
    url: "neofanaroio.vercel.app",
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
