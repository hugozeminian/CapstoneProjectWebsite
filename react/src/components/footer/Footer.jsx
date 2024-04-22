import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FooterDevelopers from "../footer-developers/FooterDevelopers";
import { Divider } from "@mui/material";
import { useFooterHeight } from "../../context/FooterHeightContext";
import FooterReachOut from "../footer-reach-out/FooterReachOut";
import usePageData from "../use-page-data-hook/UsePageDataHook";
import { getSettings } from "../../api/api";

/**
 * Footer component for the application.
 * This component displays footer content including developer information and copyright notice.
 * @returns {JSX.Element} - Returns the Footer component.
 */
const Footer = () => {
  const footerRef = useRef(null);
  const { setFooterHeight } = useFooterHeight();
  const [lastFlagFooterHeight, setLastFlagFooterHeight] = useState(false);

  const propsUsePageData = usePageData("", getSettings);

  // useEffect hook to update footer height in context
  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.clientHeight); // Updating footer height in context

      if (!propsUsePageData.isLoading) {
        setLastFlagFooterHeight(true);
      }
    }
  }, [setFooterHeight, propsUsePageData.isLoading, lastFlagFooterHeight]); // Dependency array to watch for changes in setFooterHeight function

  return (
    <Box
      component="footer"
      ref={footerRef}
      padding={2}
      bgcolor={"background.default"}
    >
      <Divider orientation="horizontal" />

      <Container maxWidth="md">
        <FooterReachOut props={propsUsePageData} />
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
