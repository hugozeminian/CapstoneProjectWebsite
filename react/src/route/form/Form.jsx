{/*
This code defines a functional component called Form, which represents a form for various milestone ceremonies. 
It includes form inputs for different fields, a selector to choose the type of ceremony, and a submit button. 
The component utilizes Material-UI components such as Container, Typography, Box, and custom components like FormSelector, FormInput, and ButtonCustom. 
The form content varies based on the selected service.
 */}

import React, { useState } from "react"; // Importing necessary modules from React

import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormSelector from "../../components/form-selector/FormSelector"; // Importing custom FormSelector component
import FormInput from "../../components/form-input/FormInput"; // Importing custom FormInput component
import { formSelectorService, formWeeding } from "../../repository/FormContent";// Importing form data from repository
import ButtonCustom from "../../components/button-custom/ButtonCustom"; // Importing custom ButtonCustom component
import { CalcDifViewHeigh } from "../../util/generalFunctions.js"; // Importing CalcDifViewHeigh function from generalFunctions.js

// Functional component for handling form
const Form = () => {
  const [formData, setFormData] = useState({ // State for form data
    field1: "",
    field2: "",
    field3: "",
  });

  const [selectedService, setSelectedService] = useState(""); // State for selected service

  // Function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing default form submission behavior

    setFormData({ // Resetting form data
      field1: "",
      field2: "",
      field3: "",
    });

    window.location.reload();
  };

  // Function to handle service change
  const handleServiceChange = (e) => {
    const selectedValue = e;
    setSelectedService(selectedValue);
  };

  const calcDifViewHeigh = CalcDifViewHeigh(); // Calculating difference in view height

  return (
    <Container
      sx={{
        height: `calc(100vh - ${calcDifViewHeigh}px)`, 
      }}
    >
      <Typography variant="h6" pb={1}>
        Milestone Ceremony Form Content
      </Typography>

      <FormSelector onChange={handleServiceChange} />
      {/* Wedding */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display:
            selectedService === formSelectorService.services[0]
              ? "flex"
              : "none",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "@media (max-width: 600px)": {
            "& .MuiTextField-root": { m: 0 },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
            flexDirection: "row",
            "& .MuiTextField-root": { m: 1, width: "100%" },
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <FormInput
            name="field1"
            value={formData.field1}
            onChange={handleInputChange}
            isRequired={true}
            label={formWeeding.first_name.label}
            id={"UNIQUE1"}
            isMultiline={false}
          />
          <FormInput
            name="field2"
            value={formData.field2}
            onChange={handleInputChange}
            isRequired={true}
            label={formWeeding.last_name.label}
            id={"UNIQUE2"}
            isMultiline={true}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
            flexDirection: "row",
            "& .MuiTextField-root": { m: 1, width: "100%" },
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <FormInput
            name="field1"
            value={formData.field1}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 1"}
            id={"UNIQUE1"}
            isMultiline={false}
          />
          <FormInput
            name="field2"
            value={formData.field2}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 2"}
            id={"UNIQUE2"}
            isMultiline={true}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <FormInput
            name="field3"
            value={formData.field3}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 3"}
            id={"UNIQUE3"}
            isMultiline={true}
            minRows={5}
            maxRows={10}
            variant="outlined"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <ButtonCustom label="submit" type="submit" />
        </Box>
      </Box>

      {/* BAPTISM */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display:
            selectedService === formSelectorService.services[1]
              ? "flex"
              : "none",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "@media (max-width: 600px)": {
            "& .MuiTextField-root": { m: 0 },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
            flexDirection: "row",
            "& .MuiTextField-root": { m: 1, width: "100%" },
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <FormInput
            name="field1"
            value={formData.field1}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 1"}
            id={"UNIQUE1"}
            isMultiline={false}
          />
          <FormInput
            name="field2"
            value={formData.field2}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 2"}
            id={"UNIQUE2"}
            isMultiline={true}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <FormInput
            name="field3"
            value={formData.field3}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 3"}
            id={"UNIQUE3"}
            isMultiline={true}
            minRows={5}
            maxRows={10}
            variant="outlined"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <ButtonCustom label="submit" type="submit" />
        </Box>
      </Box>

      {/* MEMORIAL */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display:
            selectedService === formSelectorService.services[2]
              ? "flex"
              : "none",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "@media (max-width: 600px)": {
            "& .MuiTextField-root": { m: 0 },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
            flexDirection: "row",
            "& .MuiTextField-root": { m: 1, width: "100%" },
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <FormInput
            name="field1"
            value={formData.field1}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 1"}
            id={"UNIQUE1"}
            isMultiline={false}
          />
          <FormInput
            name="field2"
            value={formData.field2}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 2"}
            id={"UNIQUE2"}
            isMultiline={true}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <FormInput
            name="field3"
            value={formData.field3}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 3"}
            id={"UNIQUE3"}
            isMultiline={true}
            minRows={5}
            maxRows={10}
            variant="outlined"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <ButtonCustom label="submit" type="submit" />
        </Box>
      </Box>

      {/* M.CLASS */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display:
            selectedService === formSelectorService.services[3]
              ? "flex"
              : "none",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "@media (max-width: 600px)": {
            "& .MuiTextField-root": { m: 0 },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
            flexDirection: "row",
            "& .MuiTextField-root": { m: 1, width: "100%" },
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          }}
        >
          <FormInput
            name="field1"
            value={formData.field1}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 1"}
            id={"UNIQUE1"}
            isMultiline={false}
          />
          <FormInput
            name="field2"
            value={formData.field2}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 2"}
            id={"UNIQUE2"}
            isMultiline={true}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <FormInput
            name="field3"
            value={formData.field3}
            onChange={handleInputChange}
            isRequired={true}
            label={"SOME LABEL 3"}
            id={"UNIQUE3"}
            isMultiline={true}
            minRows={5}
            maxRows={10}
            variant="outlined"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <ButtonCustom label="submit" type="submit" />
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
