import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <div>
      <div className="logo" />

      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">PDF</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
        <Menu.Item key="4">About Us</Menu.Item>
      </Menu>
    </div>
  );
};

export default AppHeader;
