import { useState } from "react";
import { Box } from "@mui/material";

const SocialIcon = ({
  socialIcon,
  hoverIcon = socialIcon,
  href,
  pointer = false,
  onClickHandler = false,
  width = 15,
  height = 15,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cursorStyle = pointer ? "pointer" : "default";

  const handleClick = () => {
    if (onClickHandler) {
      window.open(href, "_blank");
    }
  };

  return (
    <Box
      width={width}
      height={height}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: cursorStyle }}
    >
      <img
        src={isHovered ? hoverIcon : socialIcon}
        alt="social icon"
        style={{ width: "100%", height: "100%" }}
        onClick={handleClick}
      />
    </Box>
  );
};

export default SocialIcon;
