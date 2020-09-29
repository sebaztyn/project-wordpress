import React from "react";
import {
  HeaderContainer,
  HeaderButton,
  ClockIcon,
  PhoneIcon,
  LocationIcon,
  ContentDiv,
  HotlineDiv,
  NavContainer,
} from "./Header.style";
import { Paragraph2 } from "baseui/typography";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderButton />
        <ContentDiv>
          <Paragraph2 color="white">
            <LocationIcon />
            &nbsp;Suite B1, First Floor,Asta Galleria,Plot 1185 Parkway
            District, Cadestrial Zone B06, Mabushi, Abuja
          </Paragraph2>
          <Paragraph2 color="white">
            <ClockIcon /> Mon - Sat 8.00 - 18.00. Sunday CLOSED
          </Paragraph2>
        </ContentDiv>
        <HotlineDiv>
          <PhoneIcon />
          &nbsp;+2349059134244,+2348035332543
        </HotlineDiv>
      </HeaderContainer>
      <NavContainer>{<NavMenu />}</NavContainer>
    </>
  );
};

export default Header;
