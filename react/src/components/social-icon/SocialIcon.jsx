import { useState } from "react";
import { Box } from "@mui/material";

/**
 * Functional component to render a social media icon.
 * @param {Object} props - Props passed to the component.
 * @param {string} props.socialIcon - URL of the social media icon.
 * @param {string} [props.hoverIcon=socialIcon] - URL of the hover icon.
 * @param {string} props.href - URL to navigate to when clicked.
 * @param {boolean} [props.pointer=false] - Whether the icon should show a pointer cursor on hover.
 * @param {boolean} [props.onClickHandler=false] - Whether to handle click events.
 * @param {number} [props.width=15] - Width of the icon.
 * @param {number} [props.height=15] - Height of the icon.
 * @returns {JSX.Element} Social media icon component.
 */
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

  // Determine cursor style based on pointer prop
  const cursorStyle = pointer ? "pointer" : "default";

  // Handle click event
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
