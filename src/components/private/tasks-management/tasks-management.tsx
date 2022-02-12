import { FC } from "react";
import ComponentHeader from "components/common/component-header/component-header";
import { Title } from "./tasks-management-constant";
import ListView from "components/common/list-view-component/listview-component";

import classes from "./task-management.module.css";

import { data } from "./tasks-management-constant";

const Tasks: FC = () => {
  return (
    <>
      <ComponentHeader title={Title} />
      <div className={classes.container}>
        <ListView data={data} />
      </div>
    </>
  );
};

export default Tasks;
