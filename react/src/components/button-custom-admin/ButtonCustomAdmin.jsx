import React from "react";
import ButtonCustom from "../button-custom/ButtonCustom";
import { useStateContext } from "../../context/TokenContext";

/**
 * A custom button component for admin users, conditionally rendered based on the presence of a token.
 * @param {object} props - The props for the ButtonCustomAdmin component.
 * @returns {JSX.Element|null} - Returns the ButtonCustomAdmin component if a token is present, otherwise returns null.
 */
const ButtonCustomAdmin = ({ ...props }) => {
  // Get the token from the context
  const { token } = useStateContext();

  // Render the ButtonCustom component if a token is present
  return <>{token && <ButtonCustom {...props} />}</>;
};

export default ButtonCustomAdmin;
