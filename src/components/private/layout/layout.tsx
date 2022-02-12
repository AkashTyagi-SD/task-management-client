import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "antd";
import Sidebar from "../sidebar";
import HeaderLayout from "../header";

import { sidebarOptions } from "../sidebar/sidebar-constant";

const { Content } = Layout;

const CustomLayout: FC = () => {
  return (
    // <div className={classes.container}>
    //   <HeaderLayout />
    //   <main className={classes.subcontainer}>
    //     <Outlet />
    //   </main>
    //   <Footer />
    // </div>
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar options={sidebarOptions} />
      <Layout>
        <HeaderLayout />
        <Content
          style={{
            margin: "10px",
            backgroundColor: "white",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
