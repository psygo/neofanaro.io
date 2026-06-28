import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@utils"

import "@styles/globals.css"

import { topLevelMetadata } from "@server"

import { Nav } from "@components/common/nav"
import { Footer } from "@components/common/footer"
import { CpiSuspense } from "@components/common/cpiSuspense"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = topLevelMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col gap-16 bg-gray-50 px-4 py-5.5 sm:gap-10">
        <CpiSuspense>
          <Nav />
          {children}
          <Footer />
        </CpiSuspense>
      </body>
    </html>
  )
}
