import { FC } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

import { sidebarModel } from "../sidebar/sidebar-model";
import { MenuBarProps } from "./menubar-model";
import { checkIsMobile } from "util/common-util";

const MenuBar: FC<MenuBarProps> = ({ options, handleChange }) => {
  const navigate = useNavigate();

  const handleChangeRouting = async (value: string) => {
    await navigate(value);
    if (checkIsMobile()) {
      handleChange();
    }
  };

  return (
    <Menu
      theme={checkIsMobile() ? "light" : "dark"}
      defaultSelectedKeys={["1"]}
      mode="inline"
    >
      {options.map((option: sidebarModel) => (
        <Menu.Item
          key={option.id}
          icon={option.icon}
          onClick={() => {
            handleChangeRouting(option.route);
          }}
        >
          {option.title}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuBar;
