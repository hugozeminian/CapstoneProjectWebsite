import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import PageTitle from "../components/page-title/PageTitle";
import navigationBarInfo from "../repository/NavigationBarInfo";

const View = () => {
  return (
    <>
      <Navigation />
      <PageTitle
        pageTitle={navigationBarInfo.pageTitle}
        services={navigationBarInfo.services}
        pages={navigationBarInfo.pages}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default View;
