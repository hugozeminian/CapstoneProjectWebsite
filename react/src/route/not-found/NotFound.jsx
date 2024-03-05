{/*
In this code, a functional component called NotFound is defined, which represents the "Not Found" page of the application. 
It displays a message indicating that the requested page does not exist.
 The height of the container is adjusted to fill the viewport height minus a calculated height difference, 
 ensuring the content is vertically centered on the page. The message is displayed using the Typography component from Material-UI.
 */}

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js"; // Importing CalcDifViewHeigh function from generalFunctions.js

// Functional component for rendering the "Not Found" page
const NotFound = () => {
  const calcDifViewHeigh = CalcDifViewHeigh(); // Calculating the height difference of the view

  return (
    <>
     {/* Container for centering the content vertically */}
      <Container
        sx={{
          height: `calc(100vh - ${calcDifViewHeigh}px)`, // Setting the height to fill the viewport height minus the calculated height difference
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         {/* Box for centering the text */}
        <Box textAlign="center">
            {/* Displaying the "Not Found" message */}
          <Typography variant="h2">This page does not exist!</Typography>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;// Exporting the NotFound component as default
