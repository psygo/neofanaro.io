import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "mathjax",
    "@mathjax/mathjax-newcm-font",
  ],
}

export default nextConfig
