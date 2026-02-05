import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../Style/PDFPreview.css";

// import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const PDFPreview = ({ path, scale = 1.7 }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="previewContainer">
      <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          canvasBackground={"white"}
          scale={scale}
          width={200}
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          devicePixelRatio={1}
        />
      </Document>
    </div>
  );
};

export default PDFPreview;
