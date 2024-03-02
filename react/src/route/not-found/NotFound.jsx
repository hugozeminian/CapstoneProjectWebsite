import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

const NotFound = () => {
  const calcDifViewHeigh = CalcDifViewHeigh();
  return (
    <>
      <Container
        sx={{
          height: `calc(100vh - ${calcDifViewHeigh}px)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h2">This page does not exist!</Typography>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
