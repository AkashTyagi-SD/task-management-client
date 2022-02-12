import { FC } from "react";
import ComponentHeader from "components/common/component-header/component-header";
import { Title } from "./dashboard-constant";

const Dashboard: FC = () => {
  return <ComponentHeader title={Title} />;
};

export default Dashboard;
