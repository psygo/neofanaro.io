import fs from "node:fs"
import path from "node:path"

// Reads an SGF straight from `public/` at render time, for Server
// Component articles — e.g. readSgfFile("/articles/haengma3/1.sgf").
export function readSgfFile(publicPath: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), "public", publicPath),
    "utf-8",
  )
}
