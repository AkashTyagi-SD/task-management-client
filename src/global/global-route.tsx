import { lazy, FC } from "react";
import { useRoutes, Navigate } from "react-router-dom";

import {
  ROUTE_SIGNIN,
  ROUTE_SIGNUP,
  ROUTE_DEFAULT,
  ROUTE_FORGOT_PASSWORD,
  ROUTE_FILE_UPLOAD,
  ROUTE_DASHBOARD,
  ROUTE_NO_MATCH,
  ROUTE_USERS,
  ROUTE_APP,
  ROUTE_TASKS,
} from "./global-constant";

const Layout = lazy(() => import("components/public/layout"));
const Login = lazy(() => import("components/public/login"));
const Registration = lazy(() => import("components/public/registration"));
const ForgotPassword = lazy(() => import("components/public/forgot-password"));
const FileUpload = lazy(() => import("components/common/file-upload"));

const PrivateLayout = lazy(() => import("components/private/layout"));
const Dashboard = lazy(() => import("components/private/dashboard"));
const Users = lazy(() => import("components/private/user-management"));
const Tasks = lazy(() => import("components/private/tasks-management"));

const NotFound: FC = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
    </main>
  );
};

const PublicRoutes: FC = () => {
  const element = useRoutes([
    {
      path: ROUTE_DEFAULT,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to={ROUTE_SIGNIN} replace={true} />,
        },
        { path: ROUTE_SIGNIN, element: <Login /> },
        { path: ROUTE_SIGNUP, element: <Registration /> },
        { path: ROUTE_FORGOT_PASSWORD, element: <ForgotPassword /> },
        { path: ROUTE_FILE_UPLOAD, element: <FileUpload /> },
        { path: ROUTE_NO_MATCH, element: <NotFound /> },
      ],
    },
    {
      path: ROUTE_DEFAULT,
      element: <PrivateLayout />,
      children: [
        { path: ROUTE_DASHBOARD, element: <Dashboard /> },
        { path: ROUTE_USERS, element: <Users /> },
        { path: ROUTE_TASKS, element: <Tasks /> },
        { path: ROUTE_NO_MATCH, element: <NotFound /> },
      ],
    },
  ]);
  return element;
};

export default PublicRoutes;
