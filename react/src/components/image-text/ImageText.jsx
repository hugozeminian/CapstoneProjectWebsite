import React from "react";
import { Avatar, Box, CardMedia, Typography } from "@mui/material";

/**
 * Component to display an image with text.
 * @param {Object} props - Props for the ImageText component.
 * @param {string} props.img - URL of the image.
 * @param {string} props.title - Title to be displayed.
 * @param {string} props.description - Description to be displayed.
 * @param {boolean} props.isMobile - Indicates if the device is mobile.
 * @param {boolean} [props.useAvatar=false] - Indicates whether to use an Avatar component instead of CardMedia.
 * @returns {JSX.Element} - ImageText component.
 */
const ImageText = ({
  img,
  title,
  description,
  isMobile,
  useAvatar = false,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        bgcolor: "background.alternate",
      }}
    >
      {/* Image Container */}
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
        {useAvatar ? (
          <Avatar
            alt="Profile Image"
            src={img}
            sx={{ width: 350, height: 350 }}
          />
        ) : (
          <CardMedia
            component="img"
            height="250"
            image={img}
            alt="Inspiration"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        )}
      </Box>

      {/* Text Container */}
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
        {/* Title */}
        <Typography
          variant="h6"
          color={"text.primary"}
          textAlign={"justify"}
          pb={2}
          sx={{ fontSize: isMobile ? "mobileFontSizeMedium.fontSize" : "h6" }}
        >
          {title}
        </Typography>
        {/* Description */}
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
