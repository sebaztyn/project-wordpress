import React from "react";
import styled from "styled-components";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";
import { MdArrowDropDown } from "react-icons/md";
const ITEMS = [{ label: "Abuja Office" }, { label: "Sokoto Office" }];

export const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  background-color: ;
`;
const ButtonArrow = styled(MdArrowDropDown)`
  color: ${(props) => props.theme.primaryColor};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.complimentaryColor};
  color: ${(props) => props.theme.primaryColor};
  &:hover:green;
  padding: 10px 15px;
  outline:none;
  border: none
`;

export const HeaderButton = () => {
  return (
    <StatefulPopover
      focusLock
      placement={PLACEMENT.bottomRight}
      content={({ close }) => (
        <StatefulMenu
          items={ITEMS}
          onItemSelect={() => close()}
          overrides={{
            List: {
              style: ({ $theme }) => ({
                width: "100%",
                backgroundColor: $theme.colors.primary400,
                color: "#ffffff",
              }),
            },
            Option: {
              style: ({ $theme, $isHovered }) => ({
                backgroundColor: $theme.colors.primary400,
                color: "#ffffff",
              }),
            },
          }}
        />
      )}
    >
      <HeaderButtonContainer>
        <Button>
          Abuja Office &nbsp;
          <ButtonArrow />
        </Button>
      </HeaderButtonContainer>
    </StatefulPopover>
  );
};

export const HeaderContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.font12};
`;
