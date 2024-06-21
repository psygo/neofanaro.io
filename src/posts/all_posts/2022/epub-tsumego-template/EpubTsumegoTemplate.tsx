import Image from "next/image"

import { FootNote } from "@components"

export function EpubTsumegoTemplate() {
  return (
    <>
      <Image
        priority
        src="/posts/2022/epub-tsumego-template/thumbnail.PNG"
        width={500}
        height={500}
        alt="Thumbnail"
      />

      <p>
        Ever since I was able to download{" "}
        <a href="https://gobooks.com/">GoBooks&apos;</a>{" "}
        EPUB books, I am in love with digital Go books.
        It&apos;s just so much more practical and speedier
        to read in that format, specially due to the
        infinite scrolling
        <FootNote html="Infinite scrolling" />, that I wish
        all my books were EPUBs now.
        <FootNote html="Infinite 2" />
      </p>
    </>
  )
}
