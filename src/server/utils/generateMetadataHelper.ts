import type { Metadata } from "next"

import { localizedText, SITE_URL } from "@utils"

import { get_article } from "../actions/articles/get_articles"

// Article thumbnails are uploaded at full resolution (several MB,
// well past what most link-unfurling crawlers will fetch before
// giving up and showing no image at all) — routed through Next's
// own image optimizer to serve a crawler-sized version instead of
// the raw file. 1200 is already in Next's default deviceSizes list,
// so no next.config.ts changes are needed to allow this width.
const OG_IMAGE_WIDTH = 1200

function ogImageUrl(src: string): string {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${OG_IMAGE_WIDTH}&q=75`
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
        width: 1500,
        height: 960,
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
      images: article.thumbnailSrc
        ? [
            {
              url: ogImageUrl(article.thumbnailSrc),
              width: OG_IMAGE_WIDTH,
            },
          ]
        : [
            {
              url: "/logos/fanaro.io_200.png",
              width: 200,
              height: 200,
            },
          ],
    },
  }
}
