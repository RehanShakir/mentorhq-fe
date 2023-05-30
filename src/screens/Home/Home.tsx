import React, { useState, FC } from "react";
import { Breadcrumb, Layout, theme, Input, Button } from "antd";
import { Sidebar } from "@/features/layout/Sidebar";
import { DesktopOutlined, MailOutlined } from "@ant-design/icons";
import { GetItemProps, MenuItem } from "./HomeType";
import { Footer } from "@/features/layout/Footer";
import { CoverLetter } from "../CoverLetter";
import { EmailReply } from "../EmailReply";

const { Header, Content } = Layout;

const getItem = ({ label, key, icon, children }: GetItemProps): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};
const items: MenuItem[] = [
  getItem({ label: "Cover Letter", key: "1", icon: <MailOutlined /> }),
  getItem({ label: "Email Reply", key: "2", icon: <DesktopOutlined /> }),
];

const screensMap: { [key: string]: React.ReactElement } = {
  "1": <CoverLetter />,
  "2": <EmailReply />,
};

const Home: FC = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar
        selectedKey={selectedKey}
        setSelectedKey={setSelectedKey}
        items={items}
      />
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              {(items[parseInt(selectedKey) - 1] as { label: string })?.label}
            </Breadcrumb.Item>
          </Breadcrumb>
          {screensMap[selectedKey]}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Home;
