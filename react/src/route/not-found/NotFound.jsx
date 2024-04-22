/**
 * NotFound component to render when a page is not found.
 * 
 * This component displays a message indicating that the requested page does not exist.
 * 
 * @returns {JSX.Element} NotFound component JSX
 */

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

const NotFound = () => {
  // Calculate the height difference between viewport and window
  const calcDifViewHeigh = CalcDifViewHeigh();

  return (
    <>
      {/* Container to center content vertically */}
      <Container display="flex">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight:
              calcDifViewHeigh > window.innerHeight
                ? `70vh`
                : `calc(100vh - ${calcDifViewHeigh}px)`,
          }}
        >
          <Box textAlign="center">
            {/* Render message indicating the page does not exist */}
            <Typography variant="h2">This page does not exist!</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
