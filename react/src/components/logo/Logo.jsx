import React from "react";

const logoImageStyle = {
  maxWidth: "50px",
};

const Logo = ({ logo }) => {
  return (
    <>
      <img src={logo} alt="Milestone Logo" style={logoImageStyle} />
    </>
  );
};

export default Logo; 
