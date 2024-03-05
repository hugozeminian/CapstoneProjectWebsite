{/*
In this code, a FormSelector component is defined to render a dropdown menu for selecting a service. 
It utilizes Material-UI components like FormControl, InputLabel, Select, and MenuItem to create the dropdown. 
The onChange callback is called whenever the selection changes, and it passes the selected value to the parent component.
*/}

import React, { useState } from "react"; // Importing React library for using React components

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { formSelectorService } from "../../repository/FormContent"; // Importing formSelectorService from FormContent repository

// Importing formSelectorService from FormContent repository
const FormSelector = ({ onChange }) => {
  const [selectedService, setSelectedService] = useState(""); // State to store the selected service

  // Function to handle change in service selection
  const handleChange = (event) => {
    const selectedValue = event.target.value; // Getting the selected value from event
    setSelectedService(selectedValue); // Updating selected service state
    onChange(selectedValue); // Calling onChange callback function with selected value
  };

  return (
    <Box sx={{ minWidth: 120, m: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Service</InputLabel>
        <Select
          variant="standard"
          labelId="select-label"
          id="select"
          value={selectedService}
          label="Select Service"
          onChange={handleChange}
          displayEmpty // Display empty option
          sx={{ color: "primary" }}
        >
            {/* Mapping through services */}
          {formSelectorService.services.map((service) => (
            <MenuItem key={service} value={service}> {/* MenuItem for each service */}
              {service}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormSelector;
// Exporting FormSelector component as default