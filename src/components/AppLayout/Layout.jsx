import React from "react";
import PaystackIntegration from "../../utils/PaystackIntegration";
import Videos from "../Videos/Videos.jsx";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";

const Layout = () => {
  return (
    <Switch>
      <Route path="/">
        <Homepage />
      </Route>
      <Route exact path="/videos">
        <Videos />
      </Route>
      <Route exact path="/payment">
        <PaystackIntegration />
      </Route>
    </Switch>
  );
};

export default Layout;
