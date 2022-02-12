import { FC } from 'react';
import { Typography } from 'antd';

import classes from './footer.module.css';

const { Title } = Typography;

const Footer: FC = () => {
  return (
    <footer className={classes.footerstyle}>
      <Title level={5}>Copyright @2021</Title>
    </footer>
  );
};

export default Footer;
