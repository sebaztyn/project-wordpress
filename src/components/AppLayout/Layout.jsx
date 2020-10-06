import React from "react";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomepageContactForm from "../HomepageContactForm/HomepageContactForm";
import HomeServices from "../HomepageServices/HomeServices";
import Videos from "../Videos/Videos.jsx";

const Layout = () => {
  return (
    <div className="homepage" style={{ backgroundColor: "#f5f5f5" }}>
      <Header />
      <Carousel />
      <HomeBanner />
      <HomeServices />
      <HomepageContactForm />
      <Videos />
    </div>
  );
};

export default Layout;
