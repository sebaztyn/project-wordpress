import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "#002e5b",
  white: "#ffffff",
  complimentaryColor: "#fde428",
  inputFieldColor: "#e8f0fe",
  dangerColor: "#ff3547",
  primaryFont: "Poppins",
  font12: "12px",
  font14: "14px",
};
export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
