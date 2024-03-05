{/*
This code defines a functional component called PageTitle, responsible for dynamically rendering the page title based on the current URL. 
It utilizes the Material-UI Typography component to display the title. 
The component receives props such as pageTitle, services, and pages to determine the titles to be displayed for each route. 
It uses the useLocation hook from react-router-dom to get the current URL pathname and updates the title accordingly.
 */}

import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react"; // Importing React and its hooks
import { useLocation } from "react-router-dom"; // Importing useLocation hook from react-router-dom

// Functional component to render the page title dynamically based on the current URL
const PageTitle = ({ pageTitle, services, pages }) => {
  const [currentPageTitle, setCurrentPageTitle] = useState(""); // State variable to store the current page title
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    let pageTitleFound = false;

    // Loop through services and pages to find the matching title based on the current URL
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
    <>{/* Rendering the current page title */}
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

export default PageTitle; // Exporting PageTitle component as default
