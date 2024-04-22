import React from "react";
import Box from "@mui/material/Box";
import { useStateContext } from "../../context/TokenContext";

/**
 * A custom Box component that enhances the MUI Box component with additional functionality.
 * @param {object} props - The props for the Box component.
 * @returns {JSX.Element} - Returns the custom Box component.
 */
const BoxCustom = (props) => {
  // Get the token from the context
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
