import React from "react";
import { HeaderContainer, HeaderButton } from "./Header.style";
import { Paragraph2 } from "baseui/typography";
import { styled } from "baseui";

const ContentDiv = styled("div", ({ $theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "960px",
  margin: "0.5rem auto 0",
  color: "#ffffff"
}));

const labelOverride = {
  Label: {
    style: {
      color: "#ffffff"
    }
  }
};

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderButton />
      <ContentDiv>
        <Paragraph2 overrides={labelOverride}>
          Suite B1, First Floor,Asta Galleria,Plot 1185 Parkway District,
          Cadestrial Zone B06, Mabushi, Abuja
        </Paragraph2>
        <Paragraph2> Mon - Sat 8.00 - 18.00. Sunday CLOSED</Paragraph2>
      </ContentDiv>
    </HeaderContainer>
  );
};

export default Header;
