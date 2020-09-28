import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "#002e5b",
  complimentaryColor: "#fde428",
  primaryFont: "Poppins",
};
export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
