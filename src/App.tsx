import React from "react";
import Routes from "config/routes";
import StylesProvider from "@mui/styles/StylesProvider";

function App() {
  return (
    <StylesProvider injectFirst>
      <Routes />
    </StylesProvider>
  );
}

export default App;
