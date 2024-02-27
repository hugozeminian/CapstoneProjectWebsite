import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";

import developersData from "../../repository/DevelopersData";
import ButtonAdmin from "../button-admin/ButtonAdmin";

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
          <Fragment key={index}>
            <DeveloperLink href={developer.linkedin}>
              {developer.name}
            </DeveloperLink>
            {index !== developersData.length - 1 && " ∘ "}
          </Fragment>
        ))}
      </Typography>
      <ButtonAdmin />
    </>
  );
};

export default FooterDevelopers;
