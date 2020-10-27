import React from "react";
import PaystackIntegration from "../../utils/PaystackIntegration";
import Videos from "../Videos/Videos.jsx";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";

const routes = [
  { component: Videos, path: "/videos", isExact: true },
  { component: Homepage, path: "/", isExact: false },
  { component: PaystackIntegration, path: "/payment", isExact: true },
];

const Layout = () => {
  return (
    <Switch>
      {routes.map((data, index) => {
        return (
          <Route
            index={index}
            component={data.component}
            exact={data.isExact}
            path={data.path}
          />
        );
      })}
    </Switch>
  );
};

export default Layout;
