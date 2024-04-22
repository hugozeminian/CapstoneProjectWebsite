import React from "react";
import { Box, Typography, Container } from "@mui/material";

/**
 * Component to display an image with text overlay.
 * @param {Object} props - Props for the ImageText component.
 * @param {string} props.img - URL of the background image.
 * @param {string} props.mainText - Main text to be displayed.
 * @param {string} props.smallText - Small text to be displayed.
 * @param {boolean} props.isMobile - Indicates if the device is mobile.
 * @returns {JSX.Element} - ImageText component.
 */
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
        {/* Background image */}
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
        {/* Text overlay */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "justify",
            color: "text.primary",
          }}
        >
          {/* Text content */}
          <Container>
            {/* Main text */}
            <Typography
              variant={isMobile ? "h7" : "h6"}
              gutterBottom
              textAlign={"center"}
              sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {mainText}
            </Typography>
            {/* Small text */}
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
