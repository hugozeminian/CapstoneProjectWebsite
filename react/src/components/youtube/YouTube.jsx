import React from "react";
import YouTube from "react-youtube";
import { IsMobile } from "../../util/generalFunctions";

const YouTubeVideo = ({ videoId }) => {
  const isMobile = IsMobile();

  const opts = {
    height: isMobile ? "250" : "390",
    width: isMobile ? "100%" : "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
