import React, { forwardRef, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

// Define FormInput component with forwardRef

const FormInput = forwardRef(
  (
    {
      isRequired,
      label,
      minRows = 1,
      isMultiline,
      variant = "outlined",
      type = "text",
      id,
      name,
      value,
      sx,
      onChange,
      onBlur,
      error,
      helperText,
      autoComplete = "new-password",
    },
    ref // Ref object forwarded from the parent component
  ) => {
    const [touched, setTouched] = useState(false); // State to track if the input has been touched (blurred)

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
          error={error}
          helperText={error ? helperText : ""} // Helper text for error state
          id={id}
          label={label}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          minRows={minRows}
          variant={variant}
          type={type}
          sx={sx}
          name={name}
          fullWidth
          inputProps={{ min: 1, step: 1 }}
          autoComplete={autoComplete}
          // defaultValue={id}
        />
      </>
    );
  }
);

export default FormInput;
