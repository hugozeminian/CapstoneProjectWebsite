{/*
In this code, an ImageText component is defined to display an image or an avatar along with text content. 
The component renders either a CardMedia (for images) or an Avatar (for avatars) based on the useAvatar prop. 
The text content includes a title and a description, with custom font sizes based on the isMobile flag.
*/}

import React from "react";
import { Avatar, Box, CardMedia, Hidden, Typography } from "@mui/material";

// Define ImageText component
const ImageText = ({
  img,
  title,
  description,
  isMobile, // Flag to indicate if the view is mobile
  useAvatar = false, // Flag to indicate if Avatar should be used instead of CardMedia
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Flex direction based on screen size
        alignItems: "center",
        bgcolor: "background.alternate",
      }}
    >
       {/* Image or Avatar section */}
      <Box
        sx={{
          ...(!isMobile && {
            flex: "0 0 50%",
            maxWidth: "50%",
            height: {
              xs: "50vh", // Height on extra small screens
              md: "auto", // Height on medium screens
              display: "flex",
              justifyContent: "center",
            },
          }),
        }}
      >
         {/* Rendering either Avatar or CardMedia based on useAvatar flag */}
        {useAvatar ? (
          <Avatar
            alt="Profile Image"
            src={img}
            sx={{ width: 350, height: 350 }}
          />
        ) : ( // If useAvatar flag is false, render CardMedia
          <CardMedia
            component="img"
            height="250"
            image={img}
            alt="Inspiration"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </Box>

      {/* Text content section */}
      <Box
        sx={{
          flex: "1",
          height: "100%",
          textAlign: { xs: "center", md: "left" }, // Text alignment based on screen size
          p: { xs: 2, md: 4 },
        }}
        color={"secondary.main"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {/* Title */}
        <Typography
          variant="h6"
          color={"text.primary"}
          textAlign={"justify"}
          pb={2}
          sx={{ fontSize: isMobile ? "mobileFontSizeMedium.fontSize" : "h6" }} // Custom font size based on screen size
        >
          {title} 
        </Typography>
         {/* Description */}
        <Typography
          variant="h7"
          color={"text.primary"}
          textAlign={"justify"}
          pb={2}
          sx={{ fontSize: isMobile ? "mobileFontSizeSmall.fontSize" : "h7" }} // Custom font size based on screen size
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageText; // Exporting ImageText component as default
