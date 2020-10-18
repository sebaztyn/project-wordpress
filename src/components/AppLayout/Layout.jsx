import React from "react";
import PaystackIntegration from "../../utils/PaystackIntegration";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomepageContactForm from "../HomepageContactForm/HomepageContactForm";
import HomeServices from "../HomepageServices/HomeServices";
import Videos from "../Videos/Videos.jsx";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
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
