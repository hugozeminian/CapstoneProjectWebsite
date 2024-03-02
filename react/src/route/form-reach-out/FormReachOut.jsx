import React from "react";
import { Container } from "@mui/material";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

const FormReachOut = () => {
  const calcDifViewHeigh = CalcDifViewHeigh();

  return (
    <>
      <Container
        sx={{
          height: `calc(100vh - ${calcDifViewHeigh}px)`,
        }}
      >
        <h1>FORM REACH OUT CONTENT</h1>
      </Container>
    </>
  );
};

export default FormReachOut;
