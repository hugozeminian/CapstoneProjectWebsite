import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FormSelector = ({
  onChange,
  options,
  labelText = "Select Option",
  returnObj = false,
  objDataKey,
  objItem,
  isRequired = false,
  mb,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle change in option selection
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue, objDataKey, objItem);
  };

  return (
    <Box sx={{ width: "100%", minWidth: 120, m: 1, mb: mb }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">
          {labelText} {isRequired && <span>*</span>}
        </InputLabel>

        <Select
          variant="outlined"
          labelId="select-label"
          id="demo-simple-select"
          value={selectedOption}
          label={labelText}
          onChange={handleChange}
          required={isRequired}
          sx={{ color: "primary" }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormSelector;
