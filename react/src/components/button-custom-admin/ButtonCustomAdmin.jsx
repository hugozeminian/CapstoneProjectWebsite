import * as React from "react";
import ButtonCustom from "../button-custom/ButtonCustom";
import { useStateContext } from "../../context/ContextProvider";

const ButtonCustomAdmin = ({ ...props }) => {
  const { token } = useStateContext();

  return <>{token && <ButtonCustom {...props} />}</>;
};

export default ButtonCustomAdmin;
