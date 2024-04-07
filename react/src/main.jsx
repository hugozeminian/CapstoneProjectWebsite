{
  /*
This code initializes the application, providing a custom theme, global context for state management, and routing functionality. 
It ensures consistent navbar and footer heights and renders the main RoutesApp component for handling routing logic.
*/
}
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/Theme";

import RoutesApp from "./RoutesApp";
import { TokenContext } from "./context/TokenContext";
import { FooterHeightProvider } from "./context/FooterHeightContext";
import { NavbarHeightProvider } from "./context/NavBarHeightContext";
import { LocalDataRepositoryOnlyProvider } from "./context/LocalDataRepositoryOnlyContext";

// Set the background color of the body using the theme's default background color
document.body.style.backgroundColor = theme.palette.background.default;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <LocalDataRepositoryOnlyProvider>
      <TokenContext>
        <NavbarHeightProvider>
          <FooterHeightProvider>
              <BrowserRouter>
                <RoutesApp />
              </BrowserRouter>
          </FooterHeightProvider>
        </NavbarHeightProvider>
      </TokenContext>
    </LocalDataRepositoryOnlyProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
