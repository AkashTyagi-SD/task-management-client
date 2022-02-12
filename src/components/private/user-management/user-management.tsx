import { FC } from "react";
import ComponentHeader from "components/common/component-header/component-header";
import { Title } from "./user-management-constant";

const UserManagement: FC = () => {
  return <ComponentHeader title={Title} />;
};

export default UserManagement;
