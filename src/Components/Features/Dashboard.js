import React, { useState } from "react";
import { Layout } from "antd";
import FileDropzone from "./Dropzone/FileDropzone";
import PDFViewer from "./PDFViewer/PDFViewer";
import "./Dashboard.css";

const { Content } = Layout;

const Dashboard = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFilesAdded = async (files) => {
    if (files.length === 1) {
      const formData = new FormData();
      formData.append("pdfFile", files[0]);

      try {
        // Send the PDF file to the server for storage and get the URL
        const response = await fetch("http://your-server.com/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const { pdfUrl } = await response.json();
          setPdfUrl(pdfUrl);
        } else {
          console.error("Failed to upload PDF file.");
        }
      } catch (error) {
        console.error("Error uploading PDF file:", error);
      }
    }
  };

  return (
    <div className="dashboard-outline">
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div>
          {pdfUrl ? (
            <PDFViewer pdfUrl={pdfUrl} />
          ) : (
            <FileDropzone onFilesAdded={handleFilesAdded} />
          )}
        </div>
      </Content>
    </div>
  );
};

export default Dashboard;
