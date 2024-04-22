import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import developersData from "../../repository/DevelopersData";
import ButtonAdminLogin from "../button-admin-login/ButtonAdminLogin";
import { Box } from "@mui/material";

/**
 * Component representing the footer section displaying developer information.
 * @returns {JSX.Element} - Returns the FooterDevelopers component.
 */
const FooterDevelopers = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ xs: "column" }}
      >
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
          <LinkIcon
            fontSize="small"
            sx={{
              marginRight: "4px",
            }}
          />
          Developed by:{" "}
          {developersData.map((developer, index) => (
            <Fragment key={index}>
              {" "}
              {/* Using Fragment to avoid adding unnecessary wrapper elements */}
              <DeveloperLink href={developer.linkedin}>
                {developer.name}
              </DeveloperLink>
              {index !== developersData.length - 1 && " ∘ "}
            </Fragment>
          ))}
        </Typography>

        <ButtonAdminLogin />
      </Box>
    </>
  );
};

/**
 * Component representing a link to a developer's profile.
 * @param {object} props - Props for the DeveloperLink component.
 * @param {string} props.href - The URL of the developer's profile.
 * @param {React.ReactNode} props.children - The content of the link.
 * @returns {JSX.Element} - Returns the DeveloperLink component.
 */
const DeveloperLink = ({ href, children }) => (
  <Typography
    variant="body2"
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    color="text.secondary"
    mx="4px"
    sx={{
      "&:hover": {
        color: "primary.main",
      },
    }}
  >
    {children}
  </Typography>
);

export default FooterDevelopers;
