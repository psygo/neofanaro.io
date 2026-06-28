import type { Metadata } from "next"

export async function generateMetadataHelper(
  title: string,
  description: string,
): Promise<Metadata> {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  }
}
