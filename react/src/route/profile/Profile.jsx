import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

const Profile = () => {
  const calcDifViewHeigh = CalcDifViewHeigh();

  return (
    <>
      <Container
        sx={{
          height: `calc(100vh - ${calcDifViewHeigh}px)`,
        }}
      >
        <h1>PROFILE CONTENT</h1>
      </Container>
    </>
  );
};

export default Profile;
