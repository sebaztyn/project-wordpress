import React from "react";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomepageContactForm from "../HomepageContactForm/HomepageContactForm";
import HomeServices from "../HomepageServices/HomeServices";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { Route, useRouteMatch } from "react-router-dom";

const Homepage = () => {
  const { path, match } = useRouteMatch();
  console.log("path :>> ", path);
  console.log("match :>> ", match);
  return (
    <div
      className="homepage"
      style={{ backgroundColor: "#f5f5f5", position: "absolute" }}
    >
      <Header />
      <Carousel />
      <HomeBanner />
      <HomeServices />
      <HomepageContactForm />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  );
};

export default Homepage;
