import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

function PdfSplitter() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [splitPages, setSplitPages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setErrorMessage("");
  };

  const splitPdf = async () => {
    if (!selectedFile) {
      setErrorMessage("Please select a PDF file.");
      return;
    }

    try {
      const pdfBytes = await selectedFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pageCount = pdfDoc.getPageCount();

      // Split the PDF into separate pages
      const splitPages = [];
      for (let i = 0; i < pageCount; i++) {
        const [newPdfDoc] = await pdfDoc.copyPages([i]);
        splitPages.push(newPdfDoc);
      }

      setSplitPages(splitPages);
    } catch (error) {
      console.error("Error splitting PDF:", error);
      setErrorMessage("An error occurred while splitting the PDF.");
    }
  };

  return (
    <div className="pdf-splitter">
      <h2>PDF Splitter</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={splitPdf}>Split PDF</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="split-pages">
        {splitPages.map((page, index) => (
          <div key={index} className="split-page">
            <p>Page {index + 1}</p>
            <img
              src={`data:image/png;base64,${page.getBase64()} `}
              alt={`Page ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PdfSplitter;
