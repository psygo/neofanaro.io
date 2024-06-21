import Image from "next/image"
import Link from "next/link"

import { Button } from "@shad"

export function TopNav() {
  return (
    <nav className="flex justify-between bg-gray-900 px-3 py-3 text-gray-200">
      <LeftNav />
      <RightNav />
    </nav>
  )
}

function LeftNav() {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image
        priority
        src="/fanaro.io.svg"
        height={30}
        width={30}
        alt="fanaro.io icon"
      />
      <h1 className="text-2xl">fanaro.io</h1>
    </Link>
  )
}

function RightNav() {
  return (
    <>
      <Button variant="ghost" className="text-xl">
        <Link href="/about">About</Link>
      </Button>
    </>
  )
}
