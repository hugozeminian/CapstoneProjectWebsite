{/*
This code defines a functional component called YouTubeVideo responsible for rendering a YouTube video player. 
It utilizes the react-youtube package to embed the YouTube player. The component receives a videoId prop, which can be either the video ID or a YouTube link. 
It uses the IsMobile function from generalFunctions to determine the device type and adjust the player dimensions accordingly. 
If the videoId is invalid, it renders an error message.
 */}

import React from "react";
import YouTube from "react-youtube"; // Importing YouTube component from react-youtube
import { IsMobile } from "../../util/generalFunctions"; // Importing IsMobile function from generalFunctions
import { Typography } from "@mui/material";
import { extractVideoKey } from "../../util/generalFunctions"; // Importing extractVideoKey function from generalFunctions

// Functional component to render YouTube video
const YouTubeVideo = ({ videoId }) => {
  const isMobile = IsMobile();

  // Check if videoId is a link, and extract the video key
  const videoKey =
    typeof videoId === "string" && videoId.includes("youtube.com")
      ? extractVideoKey(videoId)
      : videoId;

      // Options for the YouTube player
  const opts = {
    height: isMobile ? "250" : "390",
    width: isMobile ? "100%" : "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return videoKey ? ( // Rendering YouTube video if videoKey is valid
    <YouTube videoId={videoKey} opts={opts} />
  ) : (
    <Typography>Invalid YouTube video ID</Typography>// Rendering error message for invalid video ID
  );
};

export default YouTubeVideo; // Exporting YouTubeVideo component as default
