import React from "react";
import YouTube from "react-youtube";
import { IsMobile, extractVideoKey } from "../../util/generalFunctions";
import { Typography } from "@mui/material";

/**
 * Component for rendering a YouTube video.
 * @param {string} videoId - The ID of the YouTube video.
 * @returns {JSX.Element} JSX element representing the YouTube video player.
 */
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

  return videoKey ? (
    <YouTube videoId={videoKey} opts={opts} />
  ) : (
    <Typography>Invalid YouTube video ID</Typography>
  );
};

export default YouTubeVideo;
