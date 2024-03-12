{
  /*
In this code, a FormSelector component is defined to render a dropdown menu for selecting a service. 
It utilizes Material-UI components like FormControl, InputLabel, Select, and MenuItem to create the dropdown. 
The onChange callback is called whenever the selection changes, and it passes the selected value to the parent component.
*/
}

import React, { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { formSelectorService } from "../../repository/FormContent";

const FormSelector = ({ onChange }) => {
  const [selectedService, setSelectedService] = useState("");
  const [age, setAge] = React.useState("");

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  // Function to handle change in service selection
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedService(event.target.value);
    onChange(selectedValue);
  };

  return (
    <Box sx={{ width: "100%", minWidth: 120, m: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Service</InputLabel>

        <Select
          variant="outlined"
          labelId="select-label"
          id="demo-simple-select"
          value={selectedService}
          label="Select Service"
          onChange={handleChange}
          sx={{ color: "primary" }}
        >
          {formSelectorService.services.map((service) => (
            <MenuItem key={service} value={service}>
              {service}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormSelector;
