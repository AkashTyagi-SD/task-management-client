import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "../header";
import Footer from "../footer";
import classes from "./layout.module.css";

const Layout: FC = () => {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.subcontainer}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
