
/*
In this code, a FormInput component is defined using forwardRef to handle input elements.
It provides functionality for handling input changes, blur events, and validation.
The component renders a TextField component from Material-UI with customizable properties such as
label, required flag, multiline flag, variant, type, and custom styles.
 */


import React, { forwardRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const FormInput = forwardRef((
  {
    isRequired,
    label,
    minRows = 1,
    isMultiline,
    variant = "outlined",
    type = "text",
    id,
    name,
    initialValue = '', // Sets an initial value as an empty string if not provided
    sx,
    onChange, // This function is called when the field value changes
  },
  ref
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false); // Starts without error
  const [helperText, setHelperText] = useState('');
  const [touched, setTouched] = useState(false); // New state to track if the field has been touched

  // Function to validate the input
  const validateInput = (value) => {
    if (!touched) return; // Does not validate until the field has been touched
    if (isRequired && !value) {
      setError(true);
      setHelperText('This field is required'); // Example error message
    } else {
      setError(false);
      setHelperText('');
    }
  };

  // Effect to validate the input whenever the value changes, but only if the field has already been touched
  useEffect(() => {
    validateInput(value);
  }, [value, touched]);

  // Handler for input changes
  const handleInputChange = (event) => {
    setValue(event.target.value);
    if (!touched) setTouched(true); // Marks the field as touched on the first change
    if (onChange) onChange(event); // If an onChange function is provided as a prop, call it
  };

  // Adds onBlur to mark the field as touched when it loses focus
  const handleBlur = () => {
    setTouched(true);
    validateInput(value); // Performs validation when the field loses focus
  };

  return (
    <TextField
      inputRef={ref}
      required={isRequired}
      multiline={isMultiline}
      error={error}
      helperText={helperText}
      id={id}
      label={label}
      value={value}
      onChange={handleInputChange}
      onBlur={handleBlur} // Adds the onBlur event
      minRows={minRows}
      variant={variant}
      type={type}
      sx={{
        ...sx, // Maintains custom styles provided through the sx prop
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: error ? 'red' : '', // Applies the border color based on the error state
          },
          '&:hover fieldset': {
            borderColor: error ? 'red' : 'rgba(0, 0, 0, 0.23)', // Maintains standard behavior on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: error ? 'red' : 'rgba(0, 0, 0, 0.23)', // Maintains standard behavior when focused
          },
        },
      }}
      name={name}
      fullWidth
      inputProps={{ min: 1, step: 1 }}
    />
  );
});

export default FormInput;
