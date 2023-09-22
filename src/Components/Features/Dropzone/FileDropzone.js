import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import axios from "axios";
import "./FileDropzone.css";

const FileDropzone = () => {
  const customRequest = async ({ file, onSuccess, onError }) => {
    try {
      const formData = new FormData();
      formData.append("pdfFile", file);

      // Send the file to the server
      const response = await axios.post(
        "http://localhost:3001/upload",
        formData
      );

      if (response.status === 200) {
        message.success(`${file.name} file uploaded successfully`);
        onSuccess();
      }
    } catch (error) {
      message.error(`${file.name} file upload failed.`);
      onError();
    }
  };

  const beforeUpload = (file) => {
    if (file.type !== "application/pdf") {
      message.error("Only PDF files are allowed.");
      return false;
    }
    return true;
  };

  return (
    <div className="centered-container">
      <Upload
        customRequest={customRequest}
        beforeUpload={beforeUpload}
        accept=".pdf"
        showUploadList={true}
      >
        <div
          style={{
            padding: "50px",
            border: "2px dashed #d9d9d9",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
          </p>
          <p className="ant-upload-text">
            Click or drag a PDF file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Supports for a single PDF upload. Strictly prohibit from uploading
            company data or other banned files
          </p>
        </div>
      </Upload>
    </div>
  );
};

export default FileDropzone;
