import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../Style/PDFPreview.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const PDFPreview = ({
  path,
  scale,
  handleClose = () => { },
}) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="previewContainer" >
      <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          scale={scale ? null : 1.7}
          width={scale ? Math.min(window.innerWidth * 0.8, 900) : 200}
          devicePixelRatio={scale ? window.devicePixelRatio || 2 : 1}
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        >
          {scale && (
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 10,
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.8)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Page>
      </Document>
    </div>
  );
};

export default PDFPreview;
