import { FC, useState } from "react";
import { Layout } from "antd";

import { Props } from "./sidebar-model";
import MenuBar from "../menubar";
import classes from "./sidebar.module.css";

const { Sider } = Layout;

const Sidebar: FC<Props> = ({ options }) => {
  const [isColapsed, setIsColapsed] = useState(false);

  const handleChangeColapsed = () => {
    setIsColapsed(!isColapsed);
  };

  const handleChange = () => {};

  return (
    <Sider
      collapsible
      collapsed={isColapsed}
      onCollapse={handleChangeColapsed}
      className={classes.sidebar}
    >
      <div className={classes.logo}>{isColapsed ? "AT" : "Akash Tyagi"}</div>
      <MenuBar options={options} handleChange={handleChange} />
    </Sider>
  );
};

export default Sidebar;
