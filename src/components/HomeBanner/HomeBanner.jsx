import React from "react";
import {
  BannerContent,
  BannerContainer,
  BannerButton,
} from "./HomeBanner.style";
import { HiArrowNarrowRight } from "react-icons/hi";

const HomeBanner = () => {
  return (
    <>
      <BannerContainer>
        <BannerContent>
          <div>Looking for a First-Class Business Plan Consultant?</div>
          <BannerButton>
            Contact us &nbsp;
            <HiArrowNarrowRight />
          </BannerButton>
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default HomeBanner;
