// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import {RouterProvider} from "react-router-dom";
// import router from "./router.jsx";
// import {ContextProvider} from './context/ContextProvider.jsx'

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ContextProvider>
//       <RouterProvider router={router} />
//     </ContextProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/Theme";

import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import { FooterHeightProvider } from "./context/FooterHeightContext";
import { NavbarHeightProvider } from "./context/NavBarHeightContext";

document.body.style.backgroundColor = theme.palette.background.default;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <NavbarHeightProvider>
        <FooterHeightProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FooterHeightProvider>
      </NavbarHeightProvider>
    </ContextProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
