import { FC } from "react";
import { Spin } from "antd";

import { Props } from "./app-loader.model";
import styles from "./app-loader.module.css";

const AppLoader: FC<Props> = ({ loading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <Spin spinning={loading} size="large" />
      </div>
    </div>
  );
};
AppLoader.defaultProps = {
  loading: true,
};
export default AppLoader;
