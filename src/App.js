import { hot } from "react-hot-loader/root";
import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import Layout from "./components/AppLayout/Layout.jsx";

const engine = new Styletron();
function App() {
  console.log("APP DATA!!!!!!!!!!!!!!!");
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Layout />
        <div>HELLLOOOOOOO!!!!!!!!!!!!</div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default hot(App);
