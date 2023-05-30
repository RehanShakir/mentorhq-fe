import { MenuItem } from "@/screens/Home/HomeType";
import { FunctionWithParam } from "@/types/types";

import { SetStateAction } from "react";

export interface ISidebarProps {
  selectedKey: string;
  setSelectedKey: FunctionWithParam<SetStateAction<string>>;
  items: MenuItem[];
}
