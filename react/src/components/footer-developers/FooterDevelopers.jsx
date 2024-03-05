{/*
In this code, a FooterDevelopers component is defined to display developer information and a button for admin login. 
It renders developer names with their LinkedIn profiles using the DeveloperLink component. 
The developersData array is mapped to generate links for each developer. 
Finally, the ButtonAdminLogin component is rendered below the developer information.
 */}

import React, { Fragment } from "react"; 
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";

import developersData from "../../repository/DevelopersData"; 
import ButtonAdminLogin from "../button-admin-login/ButtonAdminLogin";


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
  
        {developersData.map((developer, index) => ( 
          <Fragment key={index}> {/* Using Fragment to avoid adding unnecessary wrapper elements */}
            <DeveloperLink href={developer.linkedin}>
              {developer.name}
            </DeveloperLink>
            {index !== developersData.length - 1 && " ∘ "}
          </Fragment>
        ))}
      </Typography>

      <ButtonAdminLogin />
    </>
  );
};

export default FooterDevelopers;
