import { hot } from "react-hot-loader/root";
import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import Layout from "./components/AppLayout/Layout.jsx";
import ThemeProvider from "./components/CustomTheme/CustomTheme.jsx";

const engine = new Styletron();
function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
        <div>HELLLOOOOOOO!!!!!!!!!!!!</div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default hot(App);
