import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Next's image optimizer 400s on any `w` outside this list —
    // 300 is added for the article OG preview images (see
    // generateMetadataHelper.ts), on top of the framework's own
    // defaults.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 300, 384],
  },
}

export default nextConfig
