import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "antd";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div className="pdf-viewer">
      <Document
        file={pdfUrl} // Use the provided PDF URL
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error("PDF loading error:", error)}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div className="controls">
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <Button
          type="primary"
          disabled={pageNumber <= 1}
          onClick={() => handlePageChange(pageNumber - 1)}
        >
          Previous
        </Button>
        <Button
          type="primary"
          disabled={pageNumber >= numPages}
          onClick={() => handlePageChange(pageNumber + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PDFViewer;
