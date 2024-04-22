import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

/**
 * FormSelector component for rendering a select input.
 * @param {Object} props - Props for the FormSelector component.
 * @param {function} props.onChange - Function to handle onChange event.
 * @param {Array} props.options - Array of options for the select input.
 * @param {string} [props.labelText="Select Option"] - Label for the select input.
 * @param {boolean} [props.returnObj=false] - Indicates whether to return the selected object.
 * @param {string} props.objDataKey - Key of the data object corresponding to the selected option.
 * @param {Object} props.objItem - Data object corresponding to the selected option.
 * @param {boolean} [props.isRequired=false] - Indicates whether the select input is required.
 * @param {number} [props.mb] - Margin bottom for the select input.
 * @returns {JSX.Element} - FormSelector component.
 */
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

  /**
   * Function to handle change in option selection.
   * @param {Object} event - The event object.
   */
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
