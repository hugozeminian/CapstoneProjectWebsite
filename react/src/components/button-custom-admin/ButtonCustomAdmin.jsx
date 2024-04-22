import React from "react";
import ButtonCustom from "../button-custom/ButtonCustom";
import { useStateContext } from "../../context/TokenContext";

const ButtonCustomAdmin = ({ ...props }) => {
  const { token } = useStateContext();

  return <>{token && <ButtonCustom {...props} />}</>;
};

export default ButtonCustomAdmin;
