import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function FormInput({ isRequired, label, rows, isMultiline, variant, id }) {
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
        required={isRequired}
        multiline={isMultiline}
        error={isError}
        helperText={isError ? "This field is required." : ""}
        id={id}
        label={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        rows={rows}
        maxRows={Infinity}
        variant={variant}
      />
    </>
  );
}

export default FormInput;
