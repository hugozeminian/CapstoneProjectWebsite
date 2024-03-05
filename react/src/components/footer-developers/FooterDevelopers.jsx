{/*
In this code, a FooterDevelopers component is defined to display developer information and a button for admin login. 
It renders developer names with their LinkedIn profiles using the DeveloperLink component. 
The developersData array is mapped to generate links for each developer. 
Finally, the ButtonAdminLogin component is rendered below the developer information.
 */}

import React, { Fragment } from "react"; // Importing React library for using React components
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";

import developersData from "../../repository/DevelopersData"; // Importing developersData from DevelopersData repository
import ButtonAdminLogin from "../button-admin-login/ButtonAdminLogin"; // Importing ButtonAdminLogin component

// Define DeveloperLink component for developer links
const DeveloperLink = ({ href, children }) => (
  <Typography
    variant="body2"
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    color="text.secondary"
    mx="4px"
  >
    {children}
  </Typography>
);

// Define FooterDevelopers component
const FooterDevelopers = () => {
  return (
    <>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <LinkIcon fontSize="small" sx={{ marginRight: "4px" }} />
        Developed by:{" "}
        {/* Mapping through developersData array */}
        {developersData.map((developer, index) => ( 
          <Fragment key={index}> {/* Using Fragment to avoid adding unnecessary wrapper elements */}
          {/* DeveloperLink component with developer's name and LinkedIn profile */}
            <DeveloperLink href={developer.linkedin}>
              {developer.name}
            </DeveloperLink>
             {/* Adding bullet symbol if not the last developer */}
            {index !== developersData.length - 1 && " ∘ "}
          </Fragment>
        ))}
      </Typography>
       {/* Button to Admin Login */}
      <ButtonAdminLogin />
    </>
  );
};

export default FooterDevelopers; // Exporting FooterDevelopers component as default
