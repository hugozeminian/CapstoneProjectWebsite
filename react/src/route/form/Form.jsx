import React, { useState } from "react";
import { Container, FormControl, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormSelector from "../../components/form-selector/FormSelector";
import FormInput from "../../components/form-input/FormInput";
import {
  formSelectorService,
  formGeneralTypography,
  initialWeddingDataForm,
  initialBaptismDataForm,
  initialMemorialDataForm,
  initialMasterClassDataForm,
  ceremonyServices,
  initialCeremonyDetailDataForm,
  initialCeremonyVenueDataForm,
  initialMessageDataForm,
} from "../../repository/FormContent";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import { Divider } from "@material-ui/core";
import ButtonCustom from "../../components/button-custom/ButtonCustom";
import { CalcDifViewHeigh, formatDate } from "../../util/generalFunctions.js";

const Form = () => {
  const [formData, setFormData] = useState("");
  const [ceremonyService, setCeremonyService] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [submitForm, setSubmitForm] = useState("");

  const handleChange = (event, formDataKey, item, index) => {
    const { name, value } = event.target;
  
    // Create a copy of the submitForm state
    const updatedFormData = { ...submitForm };
  
    // Check if formDataKey exists in submitForm and if it's an array
    if (updatedFormData.hasOwnProperty(formDataKey) && Array.isArray(updatedFormData[formDataKey])) {
      // Find the index of the object with the matching label
      const existingIndex = updatedFormData[formDataKey].findIndex(obj => obj.label === item.label);
  
      if (existingIndex !== -1) {
        // If an object with the same label is found, update its value
        updatedFormData[formDataKey][existingIndex][name] = value;
      } else {
        // If no object with the same label is found, push a new object into the array
        updatedFormData[formDataKey].push({
          label: item.label,
          [name]: value,
        });
      }
    } else {
      // If formDataKey doesn't exist or is not an array, create a new array with the new object
      updatedFormData[formDataKey] = [{
        label: item.label,
        [name]: value,
      }];
    }

    // Update the submitForm state
    setSubmitForm({
      ...updatedFormData,
      "Selected Service": selectedService,
    });
  };
  
  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSubmitForm({ ...submitForm, ["Event Date"]: formattedDate });
  };

  const handleMessageBoxChange = (e) => {
    const { value } = e.target;
    setSubmitForm({ ...submitForm, ["Message"]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("🚀 ~ handleChange ~ submitForm:", submitForm);
    // submitForm("");
  };

  const handleServiceChange = (selectedValue) => {
    setSelectedService(selectedValue);

    if (selectedValue === formSelectorService.services[0]) {
      setFormData(initialWeddingDataForm);
      setCeremonyService(ceremonyServices.wedding);
    }

    if (selectedValue === formSelectorService.services[1]) {
      setFormData(initialBaptismDataForm);
      setCeremonyService(ceremonyServices.baptism);
    }

    if (selectedValue === formSelectorService.services[2]) {
      setFormData(initialMemorialDataForm);
      setCeremonyService(ceremonyServices.memorial);
    }

    if (selectedValue === formSelectorService.services[3]) {
      setFormData(initialMasterClassDataForm);
      setCeremonyService(ceremonyServices.master_class);
    }
  };

  const renderFormFields = (formData, formDataKey) => {
    if (!formData || !formData[formDataKey]) {
      return null;
    }

    return Object.values(formData[formDataKey]).map((item, index) => (
      <Box
        key={`box-${formDataKey}-${item.id}`}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          width: "100%",
          flexDirection: "row",
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "@media (max-width: 600px)": { flexDirection: "column" },
        }}
      >
        <FormInput
          id={item.id}
          name={item.name}
          label={item.label}
          type={item.type}
          onChange={(e) => handleChange(e, formDataKey, item, index)}
          isRequired={item.isRequired}
          isMultiline={false}
        />
      </Box>
    ));
  };

  const flexColumnRowStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    "@media (min-width: 600px)": {
      flexDirection: "row",
    },
  };

  const calcDifViewHeigh = CalcDifViewHeigh();

  return (
    <Container sx={{ height: "auto" }}>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          sx={{
            minHeight:
              calcDifViewHeigh > window.innerHeight
                ? "auto"
                : `calc(100vh - ${calcDifViewHeigh}px)`,
          }}
        >
          <Typography variant="h5" pb={1}>
            Milestone Ceremony
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              "@media (min-width: 600px)": { flexDirection: "row" },
            }}
          >
            <FormSelector
              onChange={handleServiceChange}
              sx={{ width: "50%", paddingLeft: "10px" }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box sx={{ width: "100%", padding: "10px" }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="event-date"></InputLabel>
                  <DatePicker
                    id="event-date"
                    label="Event Date"
                    variant="standard"
                    onChange={(date) => handleDateChange(date)}
                    textField={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </Box>
            </LocalizationProvider>
          </Box>

          <Divider />

          {/* Title */}
          <Box
            sx={{
              display: selectedService !== "" ? "flex" : "none",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginLeft: "10px",
              marginTop: "10px",
              width: "100%",
            }}
          >
            <Typography variant="h6">
              {formGeneralTypography.form_title}
            </Typography>
          </Box>

          {/* Forms */}
          <Box>
            {selectedService &&
              selectedService === formSelectorService.services[0] && (
                <>
                  {/* Wedding */}
                  <Box sx={flexColumnRowStyles}>
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="h7" sx={{ marginLeft: "10px" }}>
                        {formGeneralTypography.wedding.client}
                      </Typography>
                      {renderFormFields(initialWeddingDataForm, "client")}
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="h7" sx={{ marginLeft: "10px" }}>
                        {formGeneralTypography.wedding.celebrant}
                      </Typography>
                      {renderFormFields(initialWeddingDataForm, "celebrant")}
                    </Box>
                  </Box>
                </>
              )}

            {selectedService &&
              selectedService === formSelectorService.services[1] && (
                <>
                  {/* Baptism */}
                  <Box sx={flexColumnRowStyles}>
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="h7" sx={{ marginLeft: "10px" }}>
                        {formGeneralTypography.baptism.client}
                      </Typography>
                      {renderFormFields(initialBaptismDataForm, "client")}
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="h7" sx={{ marginLeft: "10px" }}>
                        {formGeneralTypography.baptism.celebrant}
                      </Typography>
                      {renderFormFields(initialBaptismDataForm, "celebrant")}
                    </Box>
                  </Box>
                </>
              )}

            {selectedService &&
              selectedService === formSelectorService.services[2] && (
                <>
                  {/* Memorial */}
                  <Box sx={flexColumnRowStyles}>
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="h7" sx={{ marginLeft: "10px" }}>
                        {formGeneralTypography.memorial.client}
                      </Typography>
                      {renderFormFields(initialMemorialDataForm, "client")}
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="h7" sx={{ marginLeft: "10px" }}>
                        {formGeneralTypography.memorial.celebrant}
                      </Typography>
                      {renderFormFields(initialMemorialDataForm, "celebrant")}
                    </Box>
                  </Box>
                </>
              )}

            {selectedService &&
              selectedService === formSelectorService.services[3] && (
                <>
                  {/* Master Class */}
                  <Typography variant="h7" sx={{ marginLeft: "10px" }}>
                    {formGeneralTypography.master_class.client}
                  </Typography>
                  {renderFormFields(initialMasterClassDataForm, "client")}
                </>
              )}

            {/* Ceremony Details */}
            {selectedService &&
              (selectedService === formSelectorService.services[0] ||
                selectedService === formSelectorService.services[1] ||
                selectedService === formSelectorService.services[2] ||
                selectedService === formSelectorService.services[3]) && (
                <>
                  <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                    {formGeneralTypography.ceremony_details}
                  </Typography>
                  {renderFormFields(
                    initialCeremonyDetailDataForm,
                    ceremonyService
                  )}
                </>
              )}

            {/* Ceremony Venue */}
            {selectedService &&
              (selectedService === formSelectorService.services[0] ||
                selectedService === formSelectorService.services[1] ||
                selectedService === formSelectorService.services[2] ||
                selectedService === formSelectorService.services[3]) && (
                <>
                  <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                    {formGeneralTypography.ceremony_venue}
                  </Typography>
                  {renderFormFields(
                    initialCeremonyVenueDataForm,
                    ceremonyService
                  )}
                </>
              )}
          </Box>

          {/* Message box */}
          <Box
            sx={{
              display: selectedService !== "" ? "flex" : "none",
              justifyContent: "center",
              marginBottom: "20px",
              marginLeft: "10px",
              marginRight: "0px",
              width: "100%",
            }}
          >
            <FormInput
              name={initialMessageDataForm.message_box.name}
              onChange={(message) => handleMessageBoxChange(message)}
              isRequired={initialMessageDataForm.message_box.isRequired}
              label={initialMessageDataForm.message_box.label}
              id={initialMessageDataForm.message_box.id}
              isMultiline={true}
              minRows={initialMessageDataForm.message_box.minRows}
              maxRows={initialMessageDataForm.message_box.maxRows}
              variant="outlined"
            />
          </Box>

          {/* Submit Button */}
          <Box
            sx={{
              display: selectedService !== "" ? "flex" : "none",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <ButtonCustom label="submit" type="submit" />
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default Form;
