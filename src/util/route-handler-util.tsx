import { FC } from "react";
import { Route, Routes as Switch } from "react-router-dom";

import { Routes } from "../global/global-model";
import { ROUTE_NO_MATCH } from "../global/global-constant";

export const Routing: FC<{ routes: Readonly<Array<Routes>> }> = (props: {
  routes: Readonly<Array<Routes>>;
}) => {
  return (
    <Switch>
      {props.routes.map((route: Routes) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route
        path={ROUTE_NO_MATCH}
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Switch>
  );
};
