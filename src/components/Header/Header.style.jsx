import React from "react";
import { Button } from "baseui/button";
import { styled } from "baseui";
import TriangleDown from "baseui/icon/triangle-down";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";
const ITEMS = [{ label: "Abuja Office" }, { label: "Sokoto Office" }];

const HeaderButtonContainer = styled("div", ({ $theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "0.5rem"
}));
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
                color: "#ffffff"
              })
            },
            Option: {
              style: ({ $theme, $isHovered }) => ({
                backgroundColor: $theme.colors.primary400,
                color: "#ffffff"
              })
            }
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
                ":hover": $theme.colors.primary400
              })
            },
            EndEnhancer: {
              style: ({ $theme }) => ({
                color: $theme.colors.primary400
              })
              // component: TriangleDown
            }
          }}
          endEnhancer={TriangleDown}
        >
          Abuja Office
        </Button>
      </HeaderButtonContainer>
    </StatefulPopover>
  );
};

export const HeaderContainer = styled("div", ({ $theme }) => ({
  paddingTop: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "3rem",
  paddingRight: "3rem",
  backgroundColor: $theme.colors.primary400
}));
