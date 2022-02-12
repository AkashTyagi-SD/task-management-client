import { FC, useState } from "react";
import { Layout, Drawer, Button, Avatar, Badge, Popover } from "antd";
import {
  MenuOutlined,
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  BellFilled,
} from "@ant-design/icons";

import MenuBar from "../menubar";
import { sidebarOptions } from "../sidebar/sidebar-constant";
import classes from "./header.module.css";

const { Header } = Layout;

const HeaderLayout: FC = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  const text = <span>Title</span>;
  const content = (
    <div>
      <p>Content1</p>
      <p>Content2</p>
      <p>Content3</p>
      <p>Content4</p>
      <p>Content5</p>
      <p>Content6</p>
      <p>Content7</p>
      <p>Content8</p>
      <p>Content9</p>
      <p>Content10</p>
    </div>
  );

  return (
    <Header className={classes.navbar}>
      <Button
        className={classes.menu}
        type="default"
        icon={<MenuOutlined />}
        onClick={handleChange}
      />
      <Drawer
        title="Welcome"
        placement="left"
        onClose={handleChange}
        visible={visible}
      >
        <MenuBar options={sidebarOptions} handleChange={handleChange} />
      </Drawer>

      <input className={classes.searchbar} placeholder="Search Here..." />
      <div className={classes.rightsidecontainer}>
        <div className={classes.socialicon}>
          <Popover
            placement="bottom"
            title={text}
            content={content}
            trigger="click"
          >
            <Badge count={5}>
              <BellFilled style={{ fontSize: "20px" }} />
            </Badge>
          </Popover>
        </div>
        <div className={classes.socialicon}>
          <FacebookFilled style={{ fontSize: "20px" }} />
        </div>
        <div className={classes.socialicon}>
          <GithubFilled style={{ fontSize: "20px" }} />
        </div>
        <div className={classes.socialicon}>
          <LinkedinFilled style={{ fontSize: "20px" }} />
        </div>
        <div className={classes.socialicon}>
          <Popover
            placement="bottomRight"
            title={text}
            content={content}
            trigger="click"
          >
            <Avatar
              style={{ backgroundColor: "green", cursor: "pointer" }}
              size={25}
            >
              A
            </Avatar>
          </Popover>
        </div>
      </div>
    </Header>
  );
};

export default HeaderLayout;
