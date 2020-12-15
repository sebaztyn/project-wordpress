import React from "react";
import PaystackIntegration from "../../utils/PaystackIntegration";
import Stepper from "../Stepper/Stepper";
import Videos from "../Videos/Videos.jsx";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Admin from "../AdminDashboard/Admin";
import Dashboard from "../Dashboard/Dashboard";

const routes = [
  { component: Videos, path: "/videos", isExact: false },
  { component: PaystackIntegration, path: "/payment", isExact: false },
  { component: Dashboard, path: "/home", isExact: false },
  { component: Admin, path: "/admin", isExact: false },
  { component: Homepage, path: "/", isExact: true },
];

const Layout = () => {
  return (
    <Switch>
      {routes.map((data, index) => {
        return (
          <Route
            key={index}
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
