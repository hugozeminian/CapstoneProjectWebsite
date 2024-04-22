import React from "react";
import { Box, Typography, useMediaQuery, Container } from "@mui/material";

const ImageText = ({ img, mainText, smallText, isMobile }) => {
  return (
    <>
      <Box
        sx={{
          mb: "20px",
          position: "relative",
          height: "auto",
          overflow: "hidden",
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "justify",
          color: "text.primary",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
          }}
        ></Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "justify",
            color: "text.primary",
          }}
        >
          <Container>
            <Typography
              variant={isMobile ? "h7" : "h6"}
              gutterBottom
              textAlign={"center"}
              sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {mainText}
            </Typography>
            <Typography
              variant={isMobile ? "body2" : "body1"}
              textAlign={"center"}
              mt={1}
              sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {smallText}
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ImageText;
