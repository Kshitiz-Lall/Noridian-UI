import React from "react";
import { Layout } from "antd";
import AppHeader from "./Components/Layouts/AppHeader";
import AppFooter from "./Components/Layouts/AppFooter";
import Dashboard from "./Components/Features/Dashboard";
import "./App.css"; // Import the CSS file

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <div>
      <Layout className="layout">
        <Content>
          <Header
            style={{
              backgroundColor: "white",
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AppHeader />
          </Header>
        </Content>
        <Content className="content">
          <Dashboard />
        </Content>
        <Footer className="footer">
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
