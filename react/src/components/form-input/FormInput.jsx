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
      isRequired, 
      label, 
      minRows = 1, 
      isMultiline, 
      variant, 
      type = "text", 
      id, 
      sx, 
    },
    ref // Ref object forwarded from the parent component
  ) => {
    const [value, setValue] = useState(""); // State to store the input value
    const [touched, setTouched] = useState(false); // State to track if the input has been touched (blurred)

     // Function to handle input change
    const handleChange = (event) => {
      setValue(event.target.value); 
    };

    // Function to handle input blur
    const handleBlur = () => {
      setTouched(true); 
    };

    // Checking if the input is in error state
    const isError = touched && value === "" && isRequired;

    return (
      <>
        <TextField
          inputRef={ref}
          required={isRequired}
          multiline={isMultiline} 
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
          sx={sx} 
        />
      </>
    );
  }
);

export default FormInput; 
