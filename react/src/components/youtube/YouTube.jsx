import React from "react";
import YouTube from "react-youtube";
import { IsMobile } from "../../util/generalFunctions";
import { Typography } from "@mui/material";
import { extractVideoKey } from "../../util/generalFunctions";

const YouTubeVideo = ({ videoId }) => {
  const isMobile = IsMobile();

  // Check if videoId is a link, and extract the video key
  const videoKey =
    typeof videoId === "string" && videoId.includes("youtube.com")
      ? extractVideoKey(videoId)
      : videoId;

  const opts = {
    height: isMobile ? "250" : "390",
    width: isMobile ? "100%" : "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return videoKey ? (
    <YouTube videoId={videoKey} opts={opts} />
  ) : (
    <Typography>Invalid YouTube video ID</Typography>
  );
};

export default YouTubeVideo;