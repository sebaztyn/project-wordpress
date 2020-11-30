// import { hot } from "react-hot-loader/root";
import React from "react";
import "./index.css";
import Layout from "./components/AppLayout/Layout.jsx";
import ThemeProvider from "./components/CustomTheme/CustomTheme.jsx";
import { HashRouter as Router } from "react-router-dom";
import SignupProvider from "./Context/SignupContext";
import LoginProvider from "./Context/LoginContext.js";
import GlobalProvider from "./Context/GlobalContext";
import TableProvider from "./Context/TableContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <GlobalProvider>
          <SignupProvider>
            <LoginProvider>
              <TableProvider>
                <Layout />
              </TableProvider>
            </LoginProvider>
          </SignupProvider>
        </GlobalProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
