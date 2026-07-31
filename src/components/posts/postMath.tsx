import { init } from "mathjax"

type MathJaxInstance = Awaited<ReturnType<typeof init>>

let instance: MathJaxInstance | null = null

async function getMathJax(): Promise<MathJaxInstance> {
  if (!instance) {
    instance = await init({
      loader: { load: ["input/tex", "output/svg"] },
    })
  }
  return instance
}

type PostMathProps = {
  children: string
  display?: boolean
}

export async function PostMath({
  children,
  display = false,
}: PostMathProps) {
  const MathJax = await getMathJax()
  const node = MathJax.tex2svg(children, { display })
  const html = MathJax.startup.adaptor.outerHTML(node)

  return (
    <span
      className={display ? "flex justify-center py-2" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
