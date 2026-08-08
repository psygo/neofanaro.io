type MathJaxInstance = Awaited<
  ReturnType<typeof import("mathjax").init>
>

let instance: MathJaxInstance | null = null

// MathJax's own loader `require`s "input/tex"/"output/svg" using a
// runtime-built path, which Vercel's file tracer can't see, so the
// deployed function ends up missing those files and crashes with
// "Cannot read properties of undefined (reading 'tex2svg')". Importing
// them here instead, with literal specifiers, makes them traceable.
// They have to be dynamic (not static top-level imports) and awaited
// in this order: "mathjax" itself loads asynchronously, and these two
// components read a global it sets up, so they'd otherwise race it.
async function getMathJax(): Promise<MathJaxInstance> {
  if (!instance) {
    const { init } = await import("mathjax")
    await import("mathjax/input/tex.js")
    await import("mathjax/output/svg.js")
    instance = await init({
      loader: { load: ["input/tex", "output/svg"] },
    })
  }
  return instance
}

type ArticleMathProps = {
  children: string
  display?: boolean
}

export async function ArticleMath({
  children,
  display = false,
}: ArticleMathProps) {
  const MathJax = await getMathJax()
  const node = MathJax.tex2svg(children, { display })
  const html = MathJax.startup.adaptor.outerHTML(node)

  return (
    <span
      className={
        display ? "flex justify-center py-2" : "inline"
      }
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
