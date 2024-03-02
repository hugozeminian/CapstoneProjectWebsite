import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const FormInput = React.forwardRef(
  (
    { isRequired, label, minRows = 1, isMultiline, variant, type, id, sx },
    ref
  ) => {
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleBlur = () => {
      setTouched(true);
    };

    const isError = touched && value === "" && isRequired;

    return (
      <>
        <TextField
          inputRef={ref}
          required={isRequired}
          multiline={isMultiline}
          error={isError}
          helperText={isError ? "This field is required." : ""}
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
