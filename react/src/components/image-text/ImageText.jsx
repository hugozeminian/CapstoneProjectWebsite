import React from "react";
import { Box, CardMedia, Hidden, Typography } from "@mui/material";

const ImageText = ({ img, title, description, isMobile }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        bgcolor: "background.alternate",
      }}
    >
      <Box
        sx={{
          ...(!isMobile && {
            flex: "0 0 50%",
            maxWidth: "50%",
            height: { xs: "50vh", md: "auto" },
          }),
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt="Inspiration"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      <Box
        sx={{
          flex: "1",
          height: "100%",
          textAlign: { xs: "center", md: "left" },
          p: { xs: 2, md: 4 },
        }}
        color={"secondary.main"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          variant="h6"
          color={"text.primary"}
          textAlign={"justify"}
          pb={2}
          sx={{ fontSize: isMobile ? "mobileFontSizeMedium.fontSize" : "h6" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h7"
          color={"text.primary"}
          textAlign={"justify"}
          pb={2}
          sx={{ fontSize: isMobile ? "mobileFontSizeSmall.fontSize" : "h7" }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageText;
