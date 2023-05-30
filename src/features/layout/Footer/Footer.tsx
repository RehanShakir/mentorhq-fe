import { FC } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterBar: FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2023 Created by Ant UED
    </Footer>
  );
};

export default FooterBar;
