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
import { CalcDifViewHeigh, deepCopy, ensureArray, formatDate } from "../../util/generalFunctions.js";

const Form = () => {
  const [formData, setFormData] = useState("");
  const [formDataErrorUpdated, setFormDataErrorUpdated] = useState("");
  const [ceremonyService, setCeremonyService] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [submitForm, setSubmitForm] = useState("");

  //  TO DO, dropbox with options for GENDER, Packages, type of ceremony [inserir na base de dados package and ceremony?]

  // Errors validation
  const validateField = (formDataKey, name, value, item) => {
    let error = false;

    // Iterate through each key in initialWeddingDataForm
    for (const key in initialWeddingDataForm) {
      // Iterate through each field in the array associated with the current key
      initialWeddingDataForm[key].forEach((field) => {
        // Check if the field name matches the provided name
        if (field.name === name) {
          // Add validation logic based on the field name
          switch (`${key}-${name}`) {
            // Add cases for each specific field name
            case `${key}-${field.name}`:
              // Example validation: Client name should be at least 3 characters long if field is required
              if (item.isRequired) {
                if (value.length < 3) {
                  error = true;
                }
                if (value === "Gender") {
                  error = true;
                }
              }
              // Example validation: Client name should be at least 3 characters long if field is required
              if (
                name === "client_cellphone" ||
                name === "celebrant_cellphone"
              ) {
                // Example telephone number validation: Must be in the format (XXX) XXX-XXXX
                const telephoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
                if (!telephoneRegex.test(value)) {
                  error = true;
                }
              } else if (
                name === "client_email" ||
                name === "celebrant_email"
              ) {
                // Example email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                  error = true;
                }
              } else {
                // Other validation logic here
              }

              break;
            // Add more cases for other fields as needed
            default:
              break;
          }
        }
      });
    }

    return error;
  };

  // Set selected service dropdown
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

  // Check form date
  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSubmitForm({ ...submitForm, ["Event Date"]: formattedDate });
  };

  // Check form message
  const handleMessageBoxChange = (e) => {
    const { value } = e.target;
    setSubmitForm({ ...submitForm, ["Message"]: value });
  };

  // Set selected list dropdown in the form
  const handleSelectorChange = (selectedValue, formDataKey, item) => {
    const { name, value } = item;

    // Create a copy of the submitForm state
    const formatFormDataForSubmit = { ...submitForm };

    // Check if formDataKey exists in submitForm and if it's an array
    if (
      formatFormDataForSubmit.hasOwnProperty(formDataKey) &&
      Array.isArray(formatFormDataForSubmit[formDataKey])
    ) {
      // Find the index of the object with the matching label
      const existingIndex = formatFormDataForSubmit[formDataKey].findIndex(
        (obj) => obj.label === item.label
      );

      if (existingIndex !== -1) {
        // If an object with the same label is found, update its value
        formatFormDataForSubmit[formDataKey][existingIndex][name] =
          selectedValue;
      } else {
        // If no object with the same label is found, push a new object into the array
        formatFormDataForSubmit[formDataKey].push({
          label: item.label,
          [name]: selectedValue,
        });
      }
    } else {
      // If formDataKey doesn't exist or is not an array, create a new array with the new object
      formatFormDataForSubmit[formDataKey] = [
        {
          label: item.label,
          [name]: selectedValue,
        },
      ];
    }

    // Update the submitForm state
    setSubmitForm({
      ...formatFormDataForSubmit,
      "Selected Service": selectedService,
    });
  };

  // Check form fields
  const handleChange = (event, formDataKey, item, index) => {
    const { name, value } = event.target;
    const error = validateField(formDataKey, name, value, item);
  
    const updatedFormData = updateFormData(formData, formDataKey, index, {
      error: error
    });
  
    const updatedSubmitForm = updateSubmitForm(submitForm, formDataKey, item, name, value);
  
    setFormDataErrorUpdated(updatedFormData);
    setSubmitForm({
      ...updatedSubmitForm,
      "Selected Service": selectedService,
    });
  };
  
  // Check form fields --> updateFormData
  const updateFormData = (formData, formDataKey, index, updates) => {
    const copyOfFormData = deepCopy(formData);
    copyOfFormData[formDataKey] = ensureArray(copyOfFormData[formDataKey]);
    copyOfFormData[formDataKey][index] = {
      ...copyOfFormData[formDataKey][index],
      ...updates
    };
    return copyOfFormData;
  };
  
  // Check form fields --> updateSubmitForm
  const updateSubmitForm = (submitForm, formDataKey, item, name, value) => {
    const updatedSubmitForm = { ...submitForm };
    const existingArray = updatedSubmitForm[formDataKey];
  
    if (Array.isArray(existingArray)) {
      const existingIndex = existingArray.findIndex(obj => obj.label === item.label);
      if (existingIndex !== -1) {
        existingArray[existingIndex][name] = value;
      } else {
        updatedSubmitForm[formDataKey].push({
          label: item.label,
          [name]: value,
        });
      }
    } else {
      updatedSubmitForm[formDataKey] = [{
        label: item.label,
        [name]: value,
      }];
    }
    return updatedSubmitForm;
  };
  
  // Submit the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a copy of the formData state to check the error
    const updatedFormData = { ...formData };

    // Iterate over each formDataKey in formDataErrorUpdated
    for (const formDataKey in formDataErrorUpdated) {
        // Check if formDataKey exists in updatedFormData and is an array
        if (updatedFormData.hasOwnProperty(formDataKey) && Array.isArray(updatedFormData[formDataKey])) {
            // Iterate over each index in formDataErrorUpdated[formDataKey]
            formDataErrorUpdated[formDataKey].forEach((errorData, index) => {
                // Check if index is within bounds
                if (index >= 0 && index < updatedFormData[formDataKey].length) {
                    // Initialize object at index if it doesn't exist
                    if (!updatedFormData[formDataKey][index]) {
                        updatedFormData[formDataKey][index] = {};
                    }
                    // Update the error property of the specified object in the nested array
                    updatedFormData[formDataKey][index].error = errorData.error;
                } else {
                    console.error(`Invalid index: ${index}`);
                }
            });
        } else {
            // console.error(`Invalid formDataKey or formDataKey is not an array: ${formDataKey}`);
        }
    }

    // Update the formData state with the updated error information
    setFormData(updatedFormData);

    console.log("🚀 ~ handleSubmit ~ submitForm:", submitForm);
    //TO DO LINK DO POST TO BACKEND. Impedir submit if error no formdataerrorupdated

    // submitForm("");
    // formDataErrorUpdated("");
  };

  // Render all form fields
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
          marginBottom: item.error ? "0px" : "calc(1.25rem + 3px)",
          width: "100%",
          flexDirection: "row",
          "& .MuiTextField-root": { m: 1, width: "100%" },
          "@media (max-width: 600px)": { flexDirection: "column" },
        }}
      >
        {item.isSelectorList ? (
          <FormSelector
            onChange={handleSelectorChange}
            options={item.selectorList}
            labelText={item.label}
            returnObj={item.isSelectorList}
            objDataKey={formDataKey}
            objItem={item}
            isRequired={item.isRequired}
            sx={{ width: "50%", paddingLeft: "10px" }}
          />
        ) : (
          <FormInput
            id={item.id}
            name={item.name}
            label={item.label}
            type={item.type}
            helperText={item.helperText}
            error={item.error}
            onChange={(e) => handleChange(e, formDataKey, item, index)}
            isRequired={item.isRequired}
            isMultiline={false}
          />
        )}
      </Box>
    ));
  };

  const flexColumnRowStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "10px",
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
              options={formSelectorService.services}
              labelText="Select Service"
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

          {selectedService !== "" && <Divider />}

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

            {selectedService !== "" && <Divider />}

            <Box sx={flexColumnRowStyles}>
              <Box sx={{ width: "100%" }}>
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
              </Box>
              <Box sx={{ width: "100%" }}>
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
            </Box>

            
          </Box>

          {selectedService !== "" && <Divider />}

          {/* Message box */}
          <Box sx={flexColumnRowStyles}>
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: selectedService !== "" ? "flex" : "none",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                    marginBottom: "calc(1.25rem + 3px)",
                    width: "100%",
                    flexDirection: "row",
                    "& .MuiTextField-root": { m: 1, width: "100%" },
                    "@media (max-width: 600px)": { flexDirection: "column" },
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
              </Box>
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
