import { ArticlesDb } from "../../../../articles/ArticlesDb"

export default function ArticlePage() {
  return (
    <>
      <h1>Encontro</h1>
      {ArticlesDb["encontro-semanal-de-go"]}
    </>
  )
}
