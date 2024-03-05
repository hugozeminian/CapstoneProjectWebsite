{/*
In this code, a FormInput component is defined using forwardRef to handle input elements. 
It provides functionality for handling input changes, blur events, and validation. 
The component renders a TextField component from Material-UI with customizable properties such as 
label, required flag, multiline flag, variant, type, and custom styles.
 */}

import React, { useState } from "react";
import TextField from "@mui/material/TextField";

// Define FormInput component with forwardRef

const FormInput = React.forwardRef(
  (
    {
      isRequired, // Flag to indicate if the input is required
      label, // Label for the input
      minRows = 1, // Minimum number of rows for multiline input
      isMultiline, // Flag to indicate if the input is multiline
      variant, // Variant of the input
      type = "text", // Type of the input (default is text)
      id, // ID for the input element
      sx, // Custom styles for the input
    },
    ref // Ref object forwarded from the parent component
  ) => {
    const [value, setValue] = useState(""); // State to store the input value
    const [touched, setTouched] = useState(false); // State to track if the input has been touched (blurred)

     // Function to handle input change
    const handleChange = (event) => {
      setValue(event.target.value); // Updating input value
    };

    // Function to handle input blur
    const handleBlur = () => {
      setTouched(true); // Marking input as touched
    };

    // Checking if the input is in error state
    const isError = touched && value === "" && isRequired;

    return (
      <>
      {/* Rendering TextField component from Material-UI */}
        <TextField
          inputRef={ref}
          required={isRequired} // Setting required attribute based on the flag
          multiline={isMultiline} // Setting multiline attribute based on the flag
          error={isError}
          helperText={isError ? "This field is required." : ""} // Helper text for error state
          id={id}
          label={label}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          minRows={minRows}
          variant={variant}
          type={type}
          sx={sx} // Applying custom styles to the input
        />
      </>
    );
  }
);

export default FormInput; // Exporting FormInput component as default
