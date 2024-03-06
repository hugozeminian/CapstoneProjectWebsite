import React from "react";
import { Container } from "@mui/material";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

const Memorial = () => {
  const calcDifViewHeigh = CalcDifViewHeigh();

  return (
    <>
      <Container
        sx={{
          height: `calc(100vh - ${calcDifViewHeigh}px)`,
        }}
      >
        <h1>MEMORIAL CONTENT</h1>
      </Container>
    </>
  );
};

export default Memorial;
