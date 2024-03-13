import React from "react";
import { Box, Container } from "@mui/material";
import usePageData from "../../components/use-page-data-hook/usePageDataHook.jsx";

const Baptism = () => {
  const page = "baptism";

  const {
    isMobile,
    calcDifViewHeigh,
    openModal,
    handleOpenModal,
    handleCloseModal,
    objContent,
    typeOfModal,
    pageContent,
    isLoading,
    error,
  } = usePageData(page);

  if (isLoading) {
    return (
      <Container
        sx={{
          height: "auto",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight:
              calcDifViewHeigh > window.innerHeight
                ? "auto"
                : `calc(100vh - ${calcDifViewHeigh}px)`,
          }}
        >
          Loading Content...
        </Box>
      </Container>
    ); // Render loading indicator
  }

  return (
    <>
      <Container
        sx={{
          height: `calc(100vh - ${calcDifViewHeigh}px)`,
        }}
      >
        <h1>BAPTISM CONTENT</h1>
      </Container>
    </>
  );
};

export default Baptism;
