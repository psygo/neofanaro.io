"use client"

import { useEffect } from "react"

import Image from "next/image"

type ArticleImageLightboxProps = {
  src: string
  alt: string
  onClose: () => void
}

export function ArticleImageLightbox({
  src,
  alt,
  onClose,
}: ArticleImageLightboxProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () =>
      document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div
      className="not-prose fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div className="relative h-[90vh] w-[90vw]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="90vw"
          className="m-0 object-contain"
        />
      </div>
    </div>
  )
}
