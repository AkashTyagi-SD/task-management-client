import { FC } from "react";
import { List, Avatar, Button } from "antd";

import { Props } from "./listview-component-model";
import classes from "./listview-component.module.css";
import { TasksModel } from "components/private/tasks-management/task-management-model";

const ListView: FC<Props<TasksModel>> = ({ data }) => {
  return (
    <List
      className={classes.demo_loadmore_list}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">more</a>,
          ]}
        >
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.status}</div>
          <div>{item.storyPoint}</div>
        </List.Item>
      )}
    />
  );
};

export default ListView;
