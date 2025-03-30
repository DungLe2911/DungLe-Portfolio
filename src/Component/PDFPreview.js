import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "../Style/PDFPreview.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PDFPreview = (props) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

  return (
    <div className="previewContainer">
      <Document file={props.path} onLoadSuccess={onDocumentLoadSuccess}>
        <Page canvasBackground={"white"} scale={props.scale? props.scale: 1.7} width={200} pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
    </div>
  );
}


export default PDFPreview;
