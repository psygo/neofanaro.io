import type { Metadata } from "next"

import { get_post } from "../actions/posts/get_posts"

export const topLevelMetadata: Metadata = {
  title: "neofanaro.io",
  description: "neofanaro.io",
  alternates: {
    canonical: "https://neofanaroio.vercel.app",
    languages: {
      en: "https://neofanaroio.vercel.app/?lang=en",
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
          images: [
            {
              url: "https://neofanaroio.vercel.app/logos/fanaro.io_32.png",
            },
          ],
        },
      }
    : {}
}
