{/*This code defines a React functional component called ButtonCustomAdmin, 
which conditionally renders the ButtonCustom component based on the presence of a token obtained from the context. 
If the token is available, it renders the ButtonCustom component with the provided props; otherwise, it renders nothing. */}

import * as React from "react";
import ButtonCustom from "../button-custom/ButtonCustom"; 
import { useStateContext } from "../../context/TokenContext"; 

// Defining a functional component ButtonCustomAdmin
const ButtonCustomAdmin = ({ ...props }) => {
  // Destructuring token from the context
  const { token } = useStateContext();

  // Rendering ButtonCustom component only if token is available
  return <>{token && <ButtonCustom {...props} />}</>;
};

export default ButtonCustomAdmin;
