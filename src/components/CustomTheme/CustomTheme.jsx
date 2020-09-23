import React from "react";
import { createTheme } from "baseui";
import { ThemeProvider } from "baseui";

const primitive = {
  primary400: "#002e5b",
  accent400: "#fde428"
};

const theme = createTheme(primitive);
export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
