import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FooterDevelopers from "../footer-developers/FooterDevelopers";
import { Divider } from "@mui/material";
import { useFooterHeight } from "../../context/FooterHeightContext";
import FooterReachOut from "../footer-reach-out/FooterReachOut";
import usePageData from "../use-page-data-hook/usePageDataHook";
import { getSettings } from "../../api/api";

const Footer = () => {
  const footerRef = useRef(null);
  const { setFooterHeight } = useFooterHeight();
  const [lastFlagFooterHeight, setLastFlagFooterHeight] = useState(false);

  const propsusePageData = usePageData("", getSettings);

  // useEffect hook to update footer height in context
  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.clientHeight); // Updating footer height in context

      if (!propsusePageData.isLoading) {
        setLastFlagFooterHeight(true);
      }
    }
  }, [setFooterHeight, propsusePageData.isLoading, lastFlagFooterHeight]); // Dependency array to watch for changes in setFooterHeight function

  return (
    <Box
      component="footer"
      ref={footerRef}
      padding={2}
      bgcolor={"background.default"}
    >
      <Divider orientation="horizontal" />

      <Container maxWidth="md">
        <FooterReachOut props={propsusePageData} />
      </Container>

      <Divider orientation="horizontal" />

      <Container maxWidth="md">
        <Typography variant="body1" align="center">
          &copy; 2024 All rights reserved.
        </Typography>
        <FooterDevelopers />
      </Container>
    </Box>
  );
};

export default Footer;
