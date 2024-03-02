import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({ pageTitle, services, pages }) => {
  const [currentPageTitle, setCurrentPageTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    let pageTitleFound = false;

    for (const tile of [...services, ...pages]) {
      if (location.pathname.toLowerCase().includes(tile.toLowerCase())) {
        setCurrentPageTitle(tile.toLowerCase());

        pageTitleFound = true;
        break;
      }
    }

    if (!pageTitleFound) {
      setCurrentPageTitle("");
    }
  }, [location.pathname]);

  return (
    <>
      <Typography variant="h4" textAlign="center" sx={{ pb: 1 }}>
        {currentPageTitle === services[0].toLowerCase() && pageTitle[0]}
        {currentPageTitle === services[1].toLowerCase() && pageTitle[1]}
        {currentPageTitle === services[2].toLowerCase() && pageTitle[2]}
        {currentPageTitle === services[3].toLowerCase() && pageTitle[3]}
        {currentPageTitle === pages[2].toLowerCase() && pageTitle[4]}
      </Typography>
    </>
  );
};

export default PageTitle;
