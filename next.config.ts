import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Next's image optimizer 400s on any `w` outside this list —
    // 200 matches OG_IMAGE_WIDTH in generateMetadataHelper.ts (the
    // article OG preview images), on top of the framework's own
    // defaults. Keep these two in sync.
    imageSizes: [16, 32, 48, 64, 96, 128, 200, 256, 384],
  },
}

export default nextConfig
