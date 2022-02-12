import { FC } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { ROUTE_SIGNIN, ROUTE_SIGNUP } from "global/global-constant";
import { HeaderLogo } from "./header-constant";
import { fetchStaticLabelSelector } from "global/global_selector";
import classes from "./header.module.css";

const Header: FC = () => {
  const currentlocation = useLocation();
  const path = currentlocation.pathname;
  const { labels } = useSelector(fetchStaticLabelSelector);

  return (
    <header className={classes.container}>
      <img src={HeaderLogo} height={60} width={200} />
      <>
        {path === ROUTE_SIGNIN ? (
          <div className={classes.nav}>
            <h4>{labels?.publicHeader?.noAlreadyAccountText}</h4>
            <Link to={ROUTE_SIGNUP} className={classes.link}>
              {labels?.publicHeader?.signupSwitchLabel}
            </Link>
          </div>
        ) : (
          <div className={classes.nav2}>
            <h4>{labels?.publicHeader?.alreadyAccountText}</h4>
            <Link to={ROUTE_SIGNIN} className={classes.link}>
              {labels?.publicHeader?.loginSwitchLabel}
            </Link>
          </div>
        )}
      </>
    </header>
  );
};

export default Header;
