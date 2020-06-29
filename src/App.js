import {
  AudioOutlined,
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Col, Dropdown, Input, Layout, Menu, Row, Typography } from "antd";
import React, { useState } from "react";
import "./App.css";
import Collection from "./components/collection/Collection";
import SideBar from "./components/sidebar/SideBar";
import AddArtwork from "./components/add-artwork/AddArtwork";
import Login from "./components/login/Login";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const { Title } = Typography;
const { Header, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const onCollapseChange = (value) => {
    setCollapsed(value);
  };

  return (

//<Login></Login>

    <Layout>
      <SideBar collapsed={collapsed} onCollapseChange={onCollapseChange} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row>
            <Col sm={4} md={2} lg={2} xl={1} xxl={1}>
              {collapsed ? (
                <MenuUnfoldOutlined className="trigger" onClick={toggle} />
              ) : (
                <MenuFoldOutlined className="trigger" onClick={toggle} />
              )}
            </Col>

            <Col sm={4} md={2} lg={8} xl={10} xxl={10}>
              <span className="collection-span">Collection</span>
            </Col>

            <Col className="header-search align-right" sm={2} md={2} lg={8} xl={8} xxl={9}>
              <Search
                placeholder="Search by name, ID, artist, description "
                onSearch={(value) => console.log(value)}
                style={{ width: 380 }}
              />
            </Col>
            <Col style={{ padding: "0 20px" }} sm={2} md={2} lg={6} xl={5} xxl={4}>
              <Row>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="name-email" style={{ padding: "12px" }}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          lineHeight: "22px",
                        }}
                      >
                        Asher Colfield
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          lineHeight: "12px",
                        }}
                      >
                        asher@acolfield.com
                      </span>
                    </div>
                    <DownOutlined
                      style={{
                        padding: 10,
                        position: "absolute",
                        right: "10px",
                        top: "17px",
                        fontSize:"12px",
                        color:" rgba(0,0,0,0.25)",
                       
                      }}
                    />
                  </a>
                </Dropdown>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "0px 0px",
            padding: 0,
            minHeight: 280,
          }}
        >
          {/* <Collection /> */}
          <AddArtwork />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
