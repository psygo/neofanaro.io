import { headers } from "next/headers"

export async function getPostPath() {
  const headersList = await headers()
  const fullUrl = headersList.get("referer")

  console.log("referer", fullUrl)

  const pathWithSearchParams = fullUrl?.split("/").at(-1)
  const path = pathWithSearchParams?.split("?")[0]

  return path || "/"
}
