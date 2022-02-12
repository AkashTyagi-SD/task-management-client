import { FC } from "react";
import { Typography } from "antd";
const { Title } = Typography;

import { Props } from "./component-header-model";

import classes from "./component-header.module.css";

const ComponentHeader: FC<Props> = ({ title }) => {
  return (
    <div className={classes.title}>
      <Title level={3}>{title}</Title>
    </div>
  );
};

export default ComponentHeader;
