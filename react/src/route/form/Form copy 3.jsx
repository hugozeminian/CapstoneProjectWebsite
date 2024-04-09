import React, { useEffect, useState } from "react";
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
import {
  CalcDifViewHeigh,
  deepCopy,
  ensureArray,
  formatDate,
  isDateGreaterThanOrEqualToToday,
} from "../../util/generalFunctions.js";
import { helperTextField } from "../../repository/FormContent.js";

const Form = () => {
  const [formData, setFormData] = useState("");
  // const [formDataErrorUpdated, setFormDataErrorUpdated] = useState({
  //   "Event Date": [{ error: true }],
  // });
  const [formDataErrorUpdated, setFormDataErrorUpdated] = useState(
    initialWeddingDataForm
  );
  const [ceremonyService, setCeremonyService] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [emailCompare, setEmailCompare] = useState({});
  const [submitForm, setSubmitForm] = useState("");

  useEffect(() => {
    console.log("🚀 ~ Form ~ emailCompare:", emailCompare);
  }, [emailCompare]);

  useEffect(() => {
    console.log("🚀 ~ Form ~ formDataErrorUpdated:", formDataErrorUpdated);
  }, [formDataErrorUpdated]);

  // Errors validation
  const validateField = (formDataKey, name, value, item) => {
    console.log("🚀 ~ validateField ~ name:", name);
    // console.log("🚀 ~ validateField ~ formDataKey:", formDataKey);
    let error = false;

    // Iterate through each key in initialWeddingDataForm
    for (const key in formDataErrorUpdated) {
      // Iterate through each field in the array associated with the current key
      formDataErrorUpdated[key].forEach((field) => {
        // Check if the field name matches the provided name
        if (field.name === name) {
          // Add validation logic based on the field name
          switch (`${key}-${name}`) {
            // Add cases for each specific field name
            case `${key}-${field.name}`:
              // Example validation: name should be at least 1 characters long if field is required
              if (item.isRequired) {
                if (value.length < 1) {
                  console.log(
                    "🚀 ~ formDataErrorUpdated[key].forEach ~ value.length:",
                    value.length
                  );
                  error = true;
                }
              }
              // Example validation:
              if (
                name === "client_cellphone" ||
                name === "celebrant_cellphone"
              ) {
                // telephone number validation: Must be exactly 10 digits
                const telephoneRegex = /^\d{10}$/;
                if (!telephoneRegex.test(value)) {
                  console.log(
                    "🚀 ~ formDataErrorUpdated[key].forEach ~ !telephoneRegex.test(value):",
                    !telephoneRegex.test(value)
                  );
                  error = true;
                }
              } else if (
                name === "client_email" ||
                name === "celebrant_email" ||
                name === "client_confirm_email" ||
                name === "celebrant_confirm_email"
              ) {
                // Example email validation -> regex minumum a@example.co
                const emailRegex =
                  /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/;
                if (!emailRegex.test(value)) {
                  console.log(
                    "🚀 ~ formDataErrorUpdated[key].forEach ~ !emailRegex.test(value):",
                    !emailRegex.test(value)
                  );
                  error = true;
                }

                setEmailCompare((prevEmailCompare) => {
                  // Create a copy of the previous emailCompare object
                  const newEmailCompare = { ...prevEmailCompare };

                  // Check if the formDataKey already exists in emailCompare
                  if (!(formDataKey in newEmailCompare)) {
                    // If not, create a new entry with an empty object
                    newEmailCompare[formDataKey] = {};
                  }

                  // Add or update the value for the given name
                  newEmailCompare[formDataKey][name] = value;

                  return newEmailCompare;
                });
                if (
                  name === "client_email" ||
                  name === "client_confirm_email"
                ) {
                  const isValidComparedEmail = compareEmails(
                    emailCompare,
                    "client"
                  );
                  if (!isValidComparedEmail) {
                    console.log(
                      "🚀 ~ formDataErrorUpdated[key].forEach ~ !isValidComparedEmail: CLIENT: ",
                      !isValidComparedEmail
                    );
                    error = true;
                  }
                } else {
                  const isValidComparedEmail = compareEmails(
                    emailCompare,
                    "celebrant"
                  );
                  if (!isValidComparedEmail) {
                    console.log(
                      "🚀 ~ formDataErrorUpdated[key].forEach ~ !isValidComparedEmail: CELEBRANT: ",
                      !isValidComparedEmail
                    );
                    error = true;
                  }
                }

                console.log(
                  "🚀 ~ initialWeddingDataForm[key].forEach ~ emailCompare:",
                  emailCompare
                );
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

  const compareEmails = (emails, userType) => {
    // Check if emails is defined
    if (!emails) {
      console.error("Emails object is undefined.");
      return false; // Or handle the situation accordingly
    }

    // Destructure the object to get the email properties based on userType
    const {
      [`${userType}`]: {
        [`${userType}_email`]: email,
        [`${userType}_confirm_email`]: confirmEmail,
      } = {},
    } = emails || {};

    // Check if confirm_email matches email
    return confirmEmail === email;
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
    console.log("🚀 ~ handleDateChange ~ date:", date);
    const formattedDate = formatDate(date);
    const isDateValid = isDateGreaterThanOrEqualToToday(formattedDate);
    console.log("🚀 ~ handleDateChange ~ formattedDate:", formattedDate);
    console.log("🚀 ~ handleDateChange ~ isDateValid:", isDateValid);
    setSubmitForm({ ...submitForm, ["Event Date"]: formattedDate });
    setFormDataErrorUpdated({
      ...formDataErrorUpdated,
      "Event Date": isDateValid ? [{ error: false }] : [{ error: true }],
    });
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

    // const updatedFormData = updateFormData(formData, formDataKey, index, {
    //   error: error,
    // });

    formData[formDataKey][index] = {
      ...formData[formDataKey][index],
      error: error,
    };

    // Define a mapping between email fields and their corresponding confirm email fields
    const confirmEmailFieldMap = {
      client_email: "client_confirm_email",
      celebrant_email: "celebrant_confirm_email",
      client_confirm_email: "client_email",
      celebrant_confirm_email: "celebrant_email",
    };

    // Determine the confirm email field name based on the current field name
    const confirmFieldName = confirmEmailFieldMap[name];

    if (confirmFieldName) {
      // Find the index of the confirm field
      const confirmFieldIndex = formData[formDataKey].findIndex(
        (field) => field.name === confirmFieldName
      );

      if (confirmFieldIndex !== -1) {
        // Update error for the confirm field
        formData[formDataKey][confirmFieldIndex] = {
          ...formData[formDataKey][confirmFieldIndex],
          error: error,
        };
      }
    }

    console.log("🚀 ~ handleChange ~ formData:", formData);

    const updatedSubmitForm = updateSubmitForm(
      submitForm,
      formDataKey,
      item,
      name,
      value
    );

    setFormDataErrorUpdated({
      ...formDataErrorUpdated,
      ...formData,
    });

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
      ...updates,
    };
    return copyOfFormData;
  };

  // Check form fields --> updateSubmitForm
  const updateSubmitForm = (submitForm, formDataKey, item, name, value) => {
    const updatedSubmitForm = { ...submitForm };
    const existingArray = updatedSubmitForm[formDataKey];

    if (Array.isArray(existingArray)) {
      const existingIndex = existingArray.findIndex(
        (obj) => obj.label === item.label
      );
      if (existingIndex !== -1) {
        existingArray[existingIndex][name] = value;
      } else {
        updatedSubmitForm[formDataKey].push({
          label: item.label,
          [name]: value,
        });
      }
    } else {
      updatedSubmitForm[formDataKey] = [
        {
          label: item.label,
          [name]: value,
        },
      ];
    }
    return updatedSubmitForm;
  };

  // Submit the form
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData(formDataErrorUpdated);
    // Create a copy of the formData state to check the error
    const updatedFormData = { ...formData };
    console.log("🚀 ~ handleSubmit ~ formData:", updatedFormData);

    // Iterate over each formDataKey in formDataErrorUpdated
    for (const formDataKey in formDataErrorUpdated) {
      // Check if formDataKey exists in updatedFormData and is an array
      if (
        updatedFormData.hasOwnProperty(formDataKey) &&
        Array.isArray(updatedFormData[formDataKey])
      ) {
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
    console.log("🚀 ~ handleSubmit ~ updatedFormData:", updatedFormData);
    setFormData(updatedFormData);

    if (!hasError(updatedFormData)) {
      console.log("🚀 ~ handleSubmit ~ submitForm GONNA:", submitForm);
    } else {
      console.log("🚀 ~ handleSubmit ~ submitForm with ERROR");
    }
    //TO DO LINK DO POST TO BACKEND. Impedir submit if error no formdataerrorupdated

    // submitForm("");
    // formDataErrorUpdated("");
  };

  const hasError = (formDataErrorObject) => {
    for (const key in formDataErrorObject) {
      if (Array.isArray(formDataErrorObject[key])) {
        for (const item of formDataErrorObject[key]) {
          if (item && item.error === true) {
            return true;
          }
        }
      }
    }
    return false;
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
                ? `70vh`
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
              mb={
                formDataErrorUpdated["Event Date"] &&
                formDataErrorUpdated["Event Date"][0].error === true
                  ? "30px"
                  : "8px"
              }
              // sx={{ width: "50%", paddingLeft: "10px" }}
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
                    disablePast
                    slotProps={{
                      textField: {
                        required: true,
                        helperText:
                          formDataErrorUpdated["Event Date"] &&
                          formDataErrorUpdated["Event Date"][0]?.error === true
                            ? helperTextField
                            : null,
                        error:
                          formDataErrorUpdated["Event Date"] &&
                          formDataErrorUpdated["Event Date"][0]?.error === true
                            ? true
                            : false,
                      },
                    }}
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
