"use client"

import { Suspense } from "react"

import { useLang } from "@hooks/useLang"

import { Main } from "@components/main"

export default function NotFound() {
  return (
    <Suspense>
      <NotFoundMessage />
    </Suspense>
  )
}

function NotFoundMessage() {
  const lang = useLang()

  return (
    <Main>
      <div className="mx-auto mt-10 mb-6 flex flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold">
          {lang === "pt"
            ? "Página Não Encontrada"
            : "Page Not Found"}
        </h2>
        <p>
          {lang === "pt"
            ? "Não foi possível encontrar o conteúdo que você estava procurando."
            : "Could not find the requested resource."}
        </p>
      </div>
    </Main>
  )
}
