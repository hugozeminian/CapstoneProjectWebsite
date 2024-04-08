{
  /*
In this code, a functional component called NotFound is defined, which represents the "Not Found" page of the application. 
It displays a message indicating that the requested page does not exist.
 The height of the container is adjusted to fill the viewport height minus a calculated height difference, 
 ensuring the content is vertically centered on the page. The message is displayed using the Typography component from Material-UI.
 */
}

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

const NotFound = () => {
  const calcDifViewHeigh = CalcDifViewHeigh();

  return (
    <>
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
            <Typography variant="h2">This page does not exist!</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
