import { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { Link, useLocation, Outlet } from "react-router-dom";
// Import temporary icons to use for buttons
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  InfoCircleOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
// import "./AppLayout.css";

const { Header, Sider, Content } = Layout;

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "/characters",
      icon: <UserOutlined />,
      label: <Link to="/characters">Characters</Link>,
    },
    {
      key: "/echoes",
      icon: <BookOutlined />,
      label: <Link to="/echoes">Echoes</Link>,
    },
    {
      key: "/about",
      icon: <InfoCircleOutlined />,
      label: <Link to="/about">About</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* header bar with little logo */}
      <Header
        style={{
          padding: "0 12px",
          background: "#272424",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ color: "white", fontSize: "16px" }}
          ></Button>

          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <img
              src={`/rover.webp`}
              alt="Rover Logo"
              style={{
                height: "32px",
                width: "32px",
              }}
            />
          </Link>
          <span
            style={{ color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
          >
            WuwaScore
          </span>
        </div>
      </Header>

      {/* Main Content Area */}
      <Layout>
        {/* SideBar */}
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null}
          theme="dark"
          style={{ background: "#1a1919" }}
        >
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ background: "transparent" }}
          />
        </Sider>
        <Content
          style={{
            padding: "24px",
            background: "radial-gradient(circle,#3c4e65,#5a6a85,#283445)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
