import React from "react";
import Box from "@mui/material/Box";
import { useStateContext } from "../../context/TokenContext";

const BoxCustom = (props) => {
  const { token } = useStateContext();

  return (
    <Box
      {...props}
      sx={{
        ...(token
          ? {
              "&:hover": {
                borderColor: "primary.main",
              },
              border: "4px solid transparent",
            }
          : {}),
        ...props.sx,
      }}
    />
  );
};

export default BoxCustom;
