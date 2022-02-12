import { FC } from "react";
import { List, Avatar, Button } from "antd";

import { Props } from "./listview-component-model";
import classes from "./listview-component.module.css";

const ListView: FC<Props> = ({ data }) => {
  return (
    <List
      className={classes.demo_loadmore_list}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">more</a>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item?.picture.large} />}
            title={item?.name.last}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <div>content</div>
        </List.Item>
      )}
    />
  );
};
