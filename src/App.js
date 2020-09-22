import { hot } from "react-hot-loader/root";
import React from "react";
import logo from "./logo.svg";
import classes from "./App.module.scss";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";

const engine = new Styletron();
function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className={classes.App}>
          <header className={classes.AppHeader}>
            <img src={logo} className={classes.AppLogo} alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className={classes.AppLink}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default hot(App);
