import Image from "next/image"

export function EpubTsumegoTemplate() {
  return (
    <>
      <Image
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
        infinite scrolling , that I wish all my books were
        EPUBs now.
      </p>
    </>
  )
}
