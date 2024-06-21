"use client"

import { useEffect, useState } from "react"

import Link from "next/link"

export function FootNotesContainer() {
  return <div id="footnotes-container"></div>
}

type FootNoteProps = {
  html: string
}

export function FootNote({ html }: FootNoteProps) {
  const [footNoteLink, setFootNoteLink] = useState("")

  useEffect(() => {
    const previousFootnotes =
      document.querySelectorAll(".footnote")
    const nextFootNoteNumber = previousFootnotes.length
    setFootNoteLink(nextFootNoteNumber.toString())

    console.log(nextFootNoteNumber)

    const footNoteContent = document.createElement("div")
    footNoteContent.innerHTML = /* html */ `
      <a 
        href="#footnote-base-${nextFootNoteNumber}"
        id="footnote-${nextFootNoteNumber}"
      >${nextFootNoteNumber}</a>:
      ${html}
    `

    const footNoteContainer = document.querySelector(
      "#footnotes-container",
    )
    footNoteContainer!.appendChild(footNoteContent)
  }, [html])

  return (
    <sup className="footnote">
      <Link
        href={`#footnote-${footNoteLink}`}
        id={`footnote-base-${footNoteLink}`}
        className="text-orange-400 no-underline"
      >
        {footNoteLink}
      </Link>
    </sup>
  )
}
