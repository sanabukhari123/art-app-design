import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import "./SideBar.css";

const { Sider } = Layout;
const SideBar = ({ collapsed, onCollapseChange }) => {
  return (
    <Sider
      className="sideBarMain"
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      onBreakpoint={onCollapseChange}
      width={256}
    >
      <div>
        <h3 className="collection-title">Global Collection</h3>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<AppstoreOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Collection
        </Menu.Item>
        {/*         
        <Menu.Item key="3" icon={<UploadOutlined />}>
        Locations
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
        Contacts
        </Menu.Item>
        <Menu.Item key="5" icon={<UploadOutlined />}>
        Insurance Policies
        </Menu.Item>
        <Menu.Item key="6" icon={<UploadOutlined />}>
        Marketplace
        </Menu.Item>
        <Menu.Item key="7" icon={<UploadOutlined />}>
        Settings
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default SideBar;
