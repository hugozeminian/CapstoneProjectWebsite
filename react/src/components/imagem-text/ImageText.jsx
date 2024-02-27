import React from "react";
import { Box, Hidden, Typography } from "@mui/material";

const ImageText = ({ img, title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        bgcolor: "background.alternate",
      }}
    >
      <Hidden mdDown>
        <Box
          sx={{
            flex: "0 0 50%",
            maxWidth: "50%",
            height: { xs: "50vh", md: "auto" },
          }}
        >
          <img
            src={img}
            alt="Inspiration"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Hidden>

      <Hidden mdUp>
        <Box>
          <img
            src={img}
            alt="Inspiration"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Hidden>

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
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
};

export default ImageText;
