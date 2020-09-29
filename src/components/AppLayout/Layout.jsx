import React from "react";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeServices from "../HomepageServices/HomeServices";

const Layout = () => {
  return (
    <div className="homepage" style={{ backgroundColor: "#f5f5f5" }}>
      <Header />
      <Carousel />
      <HomeBanner />
      <HomeServices />
    </div>
  );
};

export default Layout;
