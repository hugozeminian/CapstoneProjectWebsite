import React, { forwardRef, useState } from "react";
import TextField from "@mui/material/TextField";

/**
 * FormInput component for rendering input fields.
 * @param {Object} props - Props for the FormInput component.
 * @param {boolean} props.isRequired - Indicates whether the input is required.
 * @param {string} props.label - Label for the input field.
 * @param {number} [props.minRows=1] - Minimum number of rows for multiline inputs.
 * @param {boolean} props.isMultiline - Indicates whether the input is multiline.
 * @param {string} [props.variant="outlined"] - Variant of the input field.
 * @param {string} [props.type="text"] - Type of the input field.
 * @param {string} props.id - Unique ID for the input field.
 * @param {string} props.name - Name of the input field.
 * @param {string} props.value - Value of the input field.
 * @param {Object} props.sx - Custom styles for the input field.
 * @param {function} props.onChange - Function to handle onChange event.
 * @param {function} props.onBlur - Function to handle onBlur event.
 * @param {boolean} props.error - Indicates whether the input has an error.
 * @param {string} props.helperText - Helper text to display below the input.
 * @param {string} [props.autoComplete="new-password"] - Auto-complete property for the input field.
 * @param {React.Ref} ref - Ref object forwarded from the parent component.
 * @returns {JSX.Element} - FormInput component.
 */
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
    ref
  ) => {
    const [touched, setTouched] = useState(false);

    /**
     * Function to handle input blur.
     */
    const handleBlur = () => {
      setTouched(true);
    };

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
        />
      </>
    );
  }
);

export default FormInput;
