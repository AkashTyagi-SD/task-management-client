import { FC } from "react";
import ComponentHeader from "components/common/component-header/component-header";
import { Title } from "./tasks-management-constant";

import classes from "./task-management.module.css";

const Tasks: FC = () => {
  return (
    <>
      <ComponentHeader title={Title} />
      <div className={classes.container}>
        <div className={classes.subcontainerleft}>Hello</div>
        <div className={classes.subcontainerright}>Hi</div>
      </div>
    </>
  );
};

export default Tasks;
