import { DesktopOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

import { sidebarModel } from "./sidebar-model";
import { ROUTE_DASHBOARD, ROUTE_USERS } from "global/global-constant";

export const sidebarOptions: Array<sidebarModel> = [
  {
    id: 1,
    name: "dashboard",
    title: "Dashboard",
    access: "read",
    icon: <DesktopOutlined />,
    route: ROUTE_DASHBOARD,
  },
  {
    id: 2,
    name: "user",
    title: "Users",
    access: "all",
    icon: <UserOutlined />,
    route: ROUTE_USERS,
  },
  {
    id: 3,
    name: "tasks",
    title: "Tasks",
    access: "write",
    icon: <TeamOutlined />,
    route: "/tasks",
  },
];
