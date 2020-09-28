import React from "react";
import { Button } from "baseui/button";
import styled from "styled-components";
import TriangleDown from "baseui/icon/triangle-down";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";
const ITEMS = [{ label: "Abuja Office" }, { label: "Sokoto Office" }];

export const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  background-color: ;
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
        <Button
          overrides={{
            BaseButton: {
              style: ({ $theme, $isFocusVisible }) => ({
                backgroundColor: $isFocusVisible
                  ? $theme.colors.primary400
                  : $theme.colors.accent400,
                color: $theme.colors.primary400,
                ":hover": $theme.colors.primary400,
              }),
            },
            EndEnhancer: {
              style: ({ $theme }) => ({
                color: $theme.colors.primary400,
              }),
              // component: TriangleDown
            },
          }}
          endEnhancer={TriangleDown}
        >
          Abuja Office
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
`;
