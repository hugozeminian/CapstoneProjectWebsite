{
  /*
This component represents the layout of the application.
It includes a navigation bar, the main content rendered by the router outlet, and a footer.
*/
}
import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

const View = () => {
  return (
    <>
      <Navigation/>
      <Outlet />
      <Footer />
    </>
  );
};

export default View;
