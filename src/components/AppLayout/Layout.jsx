import React from "react";
import PaystackIntegration from "../../utils/PaystackIntegration";
import Stepper from "../Stepper/Stepper";
import Videos from "../Videos/Videos.jsx";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

const routes = [
  { component: Videos, path: "/videos", isExact: true },
  { component: PaystackIntegration, path: "/payment", isExact: true },
  { component: Stepper, path: "/home", isExact: true },
  { component: AdminDashboard, path: "/admin", isExact: true },
  { component: Homepage, path: "/", isExact: false },
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
