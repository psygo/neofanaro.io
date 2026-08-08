declare module "mathjax" {
  interface MathJaxAdaptor {
    outerHTML(node: unknown): string
  }

  interface MathJaxStartup {
    adaptor: MathJaxAdaptor
  }

  interface MathJaxInstance {
    startup: MathJaxStartup
    tex2svg(input: string, options?: { display?: boolean }): unknown
  }

  function init(config?: Record<string, unknown>): Promise<MathJaxInstance>
}

declare module "mathjax/input/tex.js" {}
declare module "mathjax/output/svg.js" {}
declare module "@mathjax/mathjax-newcm-font/svg.js" {}
