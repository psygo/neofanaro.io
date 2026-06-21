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
        {lang === "pt" ? (
          <>
            <h2 className="text-3xl font-bold">
              Página Não Encontrada
            </h2>
            <p>
              Não foi possível encontrar o conteúdo que você
              estava procurando.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold">
              Page Not Found
            </h2>
            <p>Could not find the requested resource.</p>
          </>
        )}
      </div>
    </Main>
  )
}
