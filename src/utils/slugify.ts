// Turns heading text into a readable, URL-safe anchor id (e.g.
// "Problem 2479" -> "problem-2479") instead of the opaque ids
// useId() generates, so section/subsection links are shareable.
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}
