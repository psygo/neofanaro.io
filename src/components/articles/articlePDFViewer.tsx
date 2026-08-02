import { PDFViewer } from "@embedpdf/react-pdf-viewer"

type ArticlePDFViewerProps = {
  src: string
}

export function ArticlePDFViewer({
  src,
}: ArticlePDFViewerProps) {
  return (
    <PDFViewer
      config={{ src }}
      className="h-150 px-4"
      onReady={(registry) => {
        console.log("PDF viewer ready!", registry)
      }}
    />
  )
}
