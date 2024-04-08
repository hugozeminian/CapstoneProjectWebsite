{
  /* 
In this code, a Footer component is defined. 
It renders a footer section with two containers, one for footer content and the other for copyright and developer information. 
The useEffect hook is used to update the footer height in a context using useFooterHeight hook. 
The ref is used to get the height of the footer element.
*/
}

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
