{/*
This code initializes the application, providing a custom theme, global context for state management, and routing functionality. 
It ensures consistent navbar and footer heights and renders the main RoutesApp component for handling routing logic.
*/}
import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import "./index.css"; // Import styles
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/Theme"; // Import custom theme

import RoutesApp from "./RoutesApp"; // Import the main RoutesApp component
import { ContextProvider } from "./context/ContextProvider"; // Import ContextProvider for global context
import { FooterHeightProvider } from "./context/FooterHeightContext"; // Import FooterHeightProvider for managing footer height
import { NavbarHeightProvider } from "./context/NavBarHeightContext"; // Import NavbarHeightProvider for managing navbar height


// Set the background color of the body using the theme's default background color
document.body.style.backgroundColor = theme.palette.background.default;

// Use ReactDOM.render instead of ReactDOM.createRoot for older versions of React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // Wrap the entire application in ThemeProvider to provide the custom theme
  <ThemeProvider theme={theme}>
     {/* Use ContextProvider to provide global context for state management */}
    <ContextProvider>
      {/* Wrap the application in NavbarHeightProvider and FooterHeightProvider to manage navbar and footer heights */}
      <NavbarHeightProvider>
        <FooterHeightProvider>
           {/* Use BrowserRouter to enable routing functionality */}
          <BrowserRouter>
            <RoutesApp />
          </BrowserRouter>
        </FooterHeightProvider>
      </NavbarHeightProvider>
    </ContextProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
