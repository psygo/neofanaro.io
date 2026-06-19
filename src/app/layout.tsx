import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { Nav } from "@components/nav"
import { Footer } from "@components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "neofanaro.io",
  description: "Philippe Fanaro's Blog",
  icons: [
    {
      rel: "icon",
      url: "/logos/favicon.png",
    },
  ],
}

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
      <body className="flex min-h-full flex-col gap-8 px-4 py-4 sm:gap-10">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
