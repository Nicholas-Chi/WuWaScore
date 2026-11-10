import { Layout, Menu, Button } from "antd";
import { Link, useLocation, Outlet } from "react-router-dom";

const { Header, Content } = Layout;

function AppLayout() {
  const location = useLocation();

  const menuItems = [
    {
      key: "/",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "/characters",
      label: <Link to="/characters">Characters</Link>,
    },
    {
      key: "/echoes",
      label: <Link to="/echoes">Echoes</Link>,
    },
    {
      key: "/about",
      label: <Link to="/about">About</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* header bar with little logo */}
      <Header
        style={{
          padding: "0 24px",
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
          <Menu
            mode="horizontal"
            theme="dark"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ background: "transparent" }}
          />
        </div>
      </Header>

      {/* Main Content Area */}

      <Content
        style={{
          padding: "24px",
          background: "radial-gradient(circle,#3c4e65,#5a6a85,#283445)",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AppLayout;
