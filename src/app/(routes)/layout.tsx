import { GeistSans } from "geist/font/sans"

import { type WithReactChildren } from "@types"

import { Footer, TopNav } from "@components"

import "@/styles/globals.css"

export const metadata = {
  title: "fanaro.io",
  description: "Philippe Fanaro's Blog",
  icons: [{ rel: "icon", url: "/favicon.png" }],
}

export default function RootLayout({
  children,
}: WithReactChildren) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="dark flex flex-col gap-4 antialiased">
        <TopNav />
        <main className="min-h-screen px-6 py-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
