{/*
This code defines a simple functional component called Logo, which renders an image (<img>) based on the provided logo prop. 
The image's maximum width is set to 50 pixels using an inline style. 
Finally, the component is exported as default for use in other parts of the application.
*/}

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
