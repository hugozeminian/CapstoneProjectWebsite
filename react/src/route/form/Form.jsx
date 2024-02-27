import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import Box from "@mui/material/Box";
import FormInput from "../../components/form-input/FormInput";
import ButtonCustom from "../../components/button-custom/ButtonCustom";

const Form = () => {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      field1: "",
      field2: "",
      field3: "",
    });

    window.location.reload();
  };

  return (
    <Container sx={{ height: "100%" }}>
      <h1>FORM CONTENT</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "@media (max-width: 600px)": {
            "& .MuiTextField-root": { m: 0 }
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
            rows={5}
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
