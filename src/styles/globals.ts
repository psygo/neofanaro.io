import { Geist, Geist_Mono } from "next/font/google"

// ---------------------------------------------------------
// Fonts

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// ---------------------------------------------------------
// Global Styles

export const containerOutline =
  "rounded-xl border border-gray-300 px-4 pt-3 pb-3.5 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:duration-200"

export const cardDecoration =
  "rounded-xl border-2 border-gray-700 px-4 pt-3 pb-3.5 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl hover:duration-200"

// ---------------------------------------------------------
