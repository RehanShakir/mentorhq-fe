import { MenuProps } from "antd";
import React from "react";

export type MenuItem = Required<MenuProps>["items"][number];

export type GetItemProps = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
};
