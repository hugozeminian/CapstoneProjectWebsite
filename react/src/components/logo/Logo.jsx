import React from "react";

/**
 * Component to display a logo image.
 * @param {Object} props - Props for the Logo component.
 * @param {string} props.logo - URL of the logo image.
 * @returns {JSX.Element} - Logo component.
 */
const Logo = ({ logo }) => {
  return (
    <>
      {/* Render the logo image */}
      <img src={logo} alt="Milestone Logo" style={logoImageStyle} />
    </>
  );
};

// Style for the logo image
const logoImageStyle = {
  maxWidth: "50px",
};

export default Logo;
