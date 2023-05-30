import { FC, useState } from "react";
import { Layout, Menu } from "antd";
import { ISidebarProps } from "./SidebarType";

const { Sider } = Layout;

const Sidebar: FC<ISidebarProps> = ({ selectedKey, setSelectedKey, items }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Menu
        theme="dark"
        defaultSelectedKeys={[selectedKey]}
        mode="inline"
        onSelect={({ key }) => setSelectedKey(key)}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
