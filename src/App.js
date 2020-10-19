// import { hot } from "react-hot-loader/root";
import React from "react";
import "./index.css";
import Layout from "./components/AppLayout/Layout.jsx";
import ThemeProvider from "./components/CustomTheme/CustomTheme.jsx";
import { HashRouter as Router } from "react-router-dom";
import SignupProvider from "./Context/SignupContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <SignupProvider>
          <Layout />
        </SignupProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
