import { Button } from "baseui/button";
import { styled, withStyle, createTheme } from "baseui";
const primitives = {
  primaryBlue: "#002e5b",
};
const theme = createTheme(primitives);

export const HeaderButton = () => {
  return <Button>Abuja Office</Button>;
};
export const HeaderContainer = styled("div", () => ({
  width: "100vw",
  padding: "1rem",
}));
