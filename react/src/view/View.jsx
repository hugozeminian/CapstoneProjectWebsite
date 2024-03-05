{/*
This component represents the layout of the application.
It includes a navigation bar, the main content rendered by the router outlet, and a footer.
*/}
import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

const View = () => {
  return (
    <>
      <Navigation /> {/* Renders the navigation bar */}
      <Outlet /> {/* Renders the main content based on the current route */}
      <Footer /> {/* Renders the footer */}
    </>
  );
};

export default View;
