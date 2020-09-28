import React from "react";
import { HeaderContainer, HeaderButton } from "./Header.style";
import { Paragraph2 } from "baseui/typography";
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { FaRegClock, FaPhoneAlt } from "react-icons/fa";
import NavMenu from "../NavMenu/NavMenu.style";

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0.5rem auto 0;
  color: #ffffff;
`;
const HotlineDiv = styled.div`
  color: #ffffff;
`;
const NavContainer = styled.nav`
  padding: 10px;
`;

const LocationIcon = styled(MdLocationOn)`
  color: ${(props) => props.theme.complimentaryColor};
`;
const ClockIcon = styled(FaRegClock)`
  color: ${(props) => props.theme.complimentaryColor};
`;
const PhoneIcon = styled(FaPhoneAlt)`
  color: ${(props) => props.theme.complimentaryColor};
`;

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
      <NavContainer>
        <NavMenu />
      </NavContainer>
    </>
  );
};

export default Header;
