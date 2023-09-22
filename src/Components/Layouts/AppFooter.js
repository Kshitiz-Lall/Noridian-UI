import React from "react";
import { Layout, Divider } from "antd";

const AppFooter = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Divider />
      <p>Powered by Genzeon.</p>
      <p>
        <a href="/terms">Terms of Service</a> |{" "}
        <a href="/privacy">Privacy Policy</a>
      </p>
    </div>
  );
};

export default AppFooter;
