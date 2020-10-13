// import { hot } from "react-hot-loader/root";
import React from "react";
import "./index.css";
import Layout from "./components/AppLayout/Layout.jsx";
import ThemeProvider from "./components/CustomTheme/CustomTheme.jsx";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
