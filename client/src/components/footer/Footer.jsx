import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FooterDevelopers from "../footer-developers/FooterDevelopers";
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <>

      <Box component="footer" sx={{ bgcolor: "background.default", padding: "20px" }}>
        <Divider orientation="horizontal" />

        <Container maxWidth="md">
          <Typography variant="body1" align="center">
            Footer reach out to me **** TODO
          </Typography>
        </Container>

        <Divider orientation="horizontal" />

        <Container maxWidth="md">
          <Typography variant="body1" align="center">
            &copy; 2024 All rights reserved.
          </Typography>
          <FooterDevelopers />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
