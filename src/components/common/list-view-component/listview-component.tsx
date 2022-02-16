import { FC } from "react";
import { List, Avatar, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

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
          actions={[<Button type="primary" icon={<EditOutlined />} />]}
        >
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={`Title: ${item.title}`}
            description={
              <div className={classes.container}>
                <div className={classes.leftcontainer}>
                  Description: {item.description}
                </div>
                <div className={classes.rightcontainer}>
                  <div className={classes.statusOpen}>{item.status}</div>
                  <div className={classes.storyPoint}>{item.storyPoint}d</div>
                </div>
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default ListView;
