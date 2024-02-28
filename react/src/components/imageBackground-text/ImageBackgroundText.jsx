import React from "react";
import { Box, Typography, useMediaQuery, Container } from "@mui/material";

const ImageText = ({ img, mainText, smallText, isMobile }) => {
  return (
    <>
      <Box
        sx={{
          mb: "20px",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "justify",
            color: "text.primary",
            width: "100%",
          }}
        >
          <Container sx={{ height: "100%" }}>
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
