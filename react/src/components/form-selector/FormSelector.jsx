import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { formSelectorService } from "../../repository/FormContent";

const FormSelector = ({ onChange }) => {
  const [selectedService, setSelectedService] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedService(selectedValue);
    onChange(selectedValue);
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
          displayEmpty
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
