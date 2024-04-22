import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 

/**
 * Functional component to render the page title dynamically based on the current URL.
 * @param {Object} props - Props passed to the component.
 * @param {string} props.pageTitle - Title of the page.
 * @param {string[]} props.services - List of service names.
 * @param {string[]} props.pages - List of page names.
 * @returns {JSX.Element} Page title component.
 */
const PageTitle = ({ pageTitle, services, pages }) => {
  const [currentPageTitle, setCurrentPageTitle] = useState(""); 
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    let pageTitleFound = false;

    // Loop through services and pages to find the matching title based on the current URL
    for (const title of [...services, ...pages]) {
      if (location.pathname.toLowerCase().includes(title.toLowerCase())) {
        setCurrentPageTitle(title.toLowerCase());

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
