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
import {
  CalcDifViewHeigh,
  deepCopy,
  ensureArray,
  formatDate,
  isDateGreaterThanOrEqualToToday,
} from "../../util/generalFunctions.js";
import { helperTextField } from "../../repository/FormContent.js";
import { sendEmailFormRequest } from "../../api/api.js";
import CustomNotification from "../../components/custom-notification/CustomNotification.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

/**
 * Form component for submitting ceremony data.
 * @returns {JSX.Element} Form component.
 */

const Form = () => {
  const [mergedRepositoryData, setMergedRepositoryData] = useState("");
  const [formData, setFormData] = useState("");
  const [formDataErrorUpdated, setFormDataErrorUpdated] = useState("");
  const [ceremonyService, setCeremonyService] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [emailCompare, setEmailCompare] = useState({});
  const [submitForm, setSubmitForm] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDateWithErrorStatus, setEventDateWithErrorStatus] = useState("");
  const [eventMessage, setEventMessage] = useState("");
  const [notification, setNotification] = useState(null);
  const [sendingForm, setSendingForm] = useState(false);

  // Errors validation
  /**
   * Validates form field.
   * @param {string} formDataKey - Key of form data.
   * @param {string} name - Name of the field.
   * @param {string} value - Value of the field.
   * @param {object} item - Form item object.
   * @returns {boolean} - Returns true if error is found.
   */
  const validateField = (formDataKey, name, value, item) => {
    let error = false;

    const fieldsToCheck = [
      "number_of_guests",
      "language",
      "venue_name",
      "street_address",
      "city",
    ];

    if (!fieldsToCheck.includes(name)) {
      // Example validation: name should be at least 1 characters long if field is required
      if (item.isRequired) {
        if (value.length < 1) {
          error = true;
        }
      }
      // Example validation:
      if (name === "client_cellphone" || name === "celebrant_cellphone") {
        // telephone number validation: Must be exactly 10 digits
        const telephoneRegex = /^\d{10}$/;
        if (!telephoneRegex.test(value)) {
          error = true;
        }
      } else if (
        name === "client_email" ||
        name === "celebrant_email" ||
        name === "client_confirm_email" ||
        name === "celebrant_confirm_email"
      ) {
        // Example email validation -> regex minumum a@example.co
        const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
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

        if (name === "client_email" || name === "client_confirm_email") {
          const isValidComparedEmail = compareEmails(emailCompare, "client");
          if (!isValidComparedEmail) {
            error = true;
          }
        } else {
          const isValidComparedEmail = compareEmails(emailCompare, "celebrant");
          if (!isValidComparedEmail) {
            error = true;
          }
        }
      }
    }
    return error;
  };

  /**
   * Compares emails for equality.
   * @param {object} emails - Email object.
   * @param {string} userType - User type.
   * @returns {boolean} - Returns true if emails match.
   */
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
  /**
   * Handles service change.
   * @param {string} selectedValue - Selected service value.
   */
  const handleServiceChange = (selectedValue) => {
    resetVariables();

    setSelectedService(selectedValue);

    setSubmitForm({ ...eventDate, ...eventMessage });
    setFormData({ ...eventDate, ...eventMessage, ...eventDateWithErrorStatus });

    if (selectedValue === formSelectorService.services[0]) {
      setFormData(initialWeddingDataForm);
      setCeremonyService(ceremonyServices.wedding);
      setMergedRepositoryData({
        initialWeddingDataForm,
      });
      setMergedRepositoryData({
        ...initialWeddingDataForm,
        wedding: [
          ...initialCeremonyDetailDataForm.wedding,
          ...initialCeremonyVenueDataForm.wedding,
        ],
        message_box: { ...initialMessageDataForm.message_box },
        ...formDataErrorUpdated,
      });
    }

    if (selectedValue === formSelectorService.services[1]) {
      setFormData(initialBaptismDataForm);
      setCeremonyService(ceremonyServices.baptism);
      setMergedRepositoryData({
        initialBaptismDataForm,
      });
      setMergedRepositoryData({
        ...initialBaptismDataForm,
        baptism: [
          ...initialCeremonyDetailDataForm.baptism,
          ...initialCeremonyVenueDataForm.baptism,
        ],
        message_box: { ...initialMessageDataForm.message_box },
        ...formDataErrorUpdated,
      });
    }

    if (selectedValue === formSelectorService.services[2]) {
      setFormData(initialMemorialDataForm);
      setCeremonyService(ceremonyServices.memorial);
      setMergedRepositoryData({
        initialMemorialDataForm,
      });
      setMergedRepositoryData({
        ...initialMemorialDataForm,
        memorial: [
          ...initialCeremonyDetailDataForm.memorial,
          ...initialCeremonyVenueDataForm.memorial,
        ],
        message_box: { ...initialMessageDataForm.message_box },
        ...formDataErrorUpdated,
      });
    }

    if (selectedValue === formSelectorService.services[3]) {
      setFormData(initialMasterClassDataForm);
      setCeremonyService(ceremonyServices.master_class);
      setMergedRepositoryData({
        initialMasterClassDataForm,
      });
      setMergedRepositoryData({
        ...initialMasterClassDataForm,
        master_class: [
          ...initialCeremonyDetailDataForm.master_class,
          ...initialCeremonyVenueDataForm.master_class,
        ],
        message_box: { ...initialMessageDataForm.message_box },
        ...formDataErrorUpdated,
      });
    }
  };

  // Function to reset error properties to false in an array of objects
  /**
   * Resets error properties.
   * @param {object} objects - Object containing properties.
   */ const resetErrorProperties = (objects) => {
    for (const sectionKey in objects) {
      const section = objects[sectionKey];
      if (Array.isArray(section)) {
        for (const item of section) {
          if (item.error === true) {
            item.error = false;
          }
        }
      }
    }
  };

  // Function to clear properties of an object
  /**
   * Clears object properties.
   * @param {object} object - Object to clear properties.
   */ const clearObjectProperties = (object) => {
    if (typeof object === "object") {
      for (const sectionKey in object) {
        if (object.hasOwnProperty(sectionKey)) {
          delete object[sectionKey];
        }
      }
    }
  };

  // Main function to reset variables and clear properties
  /**
   * Resets variables and clears properties.
   */
  const resetVariables = () => {
    resetErrorProperties(formDataErrorUpdated);
    resetErrorProperties(eventDateWithErrorStatus);

    clearObjectProperties(mergedRepositoryData);
    clearObjectProperties(formData);
    clearObjectProperties(formDataErrorUpdated);
    clearObjectProperties(ceremonyService);
    clearObjectProperties(emailCompare);
    clearObjectProperties(submitForm);
    // clearObjectProperties(eventDate);
    // clearObjectProperties(eventDateWithErrorStatus);
    // clearObjectProperties(eventMessage);
  };

  // Function to add properties to an object
  // const addObjectProperties = (object, properties) => {
  //   if (typeof object === "object") {
  //     for (const key in properties) {
  //       if (properties.hasOwnProperty(key)) {
  //         object[key] = properties[key];
  //       }
  //     }
  //   }
  // };

  // Check form date
  /**
   * Handles date change.
   * @param {Date} date - Selected date.
   */ const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    const isDateValid = isDateGreaterThanOrEqualToToday(formattedDate);

    const _eventDate = { ["Event Date"]: formattedDate };
    const _eventDateWithErrorStatus = {
      "Event Date": isDateValid ? [{ error: false }] : [{ error: true }],
    };

    setEventDate(_eventDate);
    setSubmitForm({ ...submitForm, ..._eventDate });

    setEventDateWithErrorStatus(_eventDateWithErrorStatus);
    setFormDataErrorUpdated({
      ...formDataErrorUpdated,
      ..._eventDateWithErrorStatus,
    });

    const updatedFormData = {
      ...mergedRepositoryData,
      ..._eventDateWithErrorStatus,
    };

    // Update the formData state with the updated value
    setFormData(updatedFormData);
  };

  // Check form message
  /**
   * Handles message box change.
   * @param {object} e - Event object.
   */ const handleMessageBoxChange = (e) => {
    const { value } = e.target;
    const _eventMessage = { ["Message"]: value };
    setEventMessage(_eventMessage);
    setSubmitForm({ ...submitForm, ..._eventMessage });
  };

  // Set selected list dropdown in the form
  /**
   * Handles selector change.
   * @param {object} e - Event object.
   */ const handleSelectorChange = (selectedValue, formDataKey, item) => {
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
  /**
   * Handles the change event for form fields.
   * @param {Event} event - The change event object.
   * @param {string} formDataKey - The key corresponding to the form data in the state.
   * @param {Object} item - The metadata of the form field.
   * @param {number} index - The index of the form field in the array.
   */
  const handleChange = (event, formDataKey, item, index) => {
    const { name, value } = event.target;
    const error = validateField(formDataKey, name, value, item);
    // Create a copy of the formData state
    const updatedFormData = { ...mergedRepositoryData };

    // Update the specific field's error property
    updatedFormData[formDataKey][index] = {
      ...updatedFormData[formDataKey][index],
      error: error,
    };
    // Update the formData state with the updated value
    setFormData(updatedFormData);

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

  // Form submit handler
  /**
   * Handles form submission.
   * @param {object} e - Event object.
   */ const handleSubmit = async (event) => {
    event.preventDefault();

    setSendingForm(true);

    setFormData(formDataErrorUpdated);
    // Create a copy of the formData state to check the error
    const updatedFormData = { ...formData };
    // Iterate over each formDataKey in formDataErrorUpdated
    for (const formDataKey in formDataErrorUpdated) {
      // Check if formDataKey exists in updatedFormData and is an array
      if (
        updatedFormData.hasOwnProperty(formDataKey) &&
        Array.isArray(updatedFormData[formDataKey])
      ) {
        if (Array.isArray(formDataErrorUpdated[formDataKey])) {
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
          console.error(
            `Invalid formDataKey or formDataKey is not an array: ${formDataKey}`
          );
        }
      }
    }

    // Update the formData state with the updated error information
    setFormData(updatedFormData);

    if (!hasError(updatedFormData)) {
      try {
        // Send form data to server
        const response = await sendEmailFormRequest(submitForm);

        // Set success notification
        setNotification({
          message: "Form submitted successfully!",
          severity: "success",
          show: true,
        });

      } catch (error) {
        // Handle error response
        console.error("Error submitting form:", error);

        // Set error notification
        setNotification({
          message: "Error submitting form. Please try again later.",
          severity: "error",
          show: true,
        });
      }
    } else {
      console.log(
        "Form submission failed due to errors in fill up the fields."
      );
    }

    setSendingForm(false);
  };

  const hasError = (formDataErrorObject) => {
    // Check all keys in formDa
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
        key={`box-${formDataKey}-${item.id}-${index}`}
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
            key={`form-input-${formDataKey}-${item.id}-${index}`}
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
            key={`form-input-${formDataKey}-${item.id}-${index}`}
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

  const getServiceFieldLabel = (selectedService, field) => {
    switch (selectedService) {
      case formSelectorService.services[0]:
        return formGeneralTypography.wedding[field];
      case formSelectorService.services[1]:
        return formGeneralTypography.baptism[field];
      case formSelectorService.services[2]:
        return formGeneralTypography.memorial[field];
      case formSelectorService.services[3]:
        return formGeneralTypography.master_class[field];
      default:
        return "";
    }
  };

  const shouldRenderCeremonyDetails = (selectedService) => {
    return (
      selectedService === formSelectorService.services[0] ||
      selectedService === formSelectorService.services[1] ||
      selectedService === formSelectorService.services[2]
    );
  };

  const shouldRenderCeremonyVenue = (selectedService) => {
    return (
      selectedService === formSelectorService.services[0] ||
      selectedService === formSelectorService.services[1] ||
      selectedService === formSelectorService.services[2]
    );
  };

  const getInitialFormData = (selectedService) => {
    switch (selectedService) {
      case formSelectorService.services[0]:
        return initialWeddingDataForm;
      case formSelectorService.services[1]:
        return initialBaptismDataForm;
      case formSelectorService.services[2]:
        return initialMemorialDataForm;
      case formSelectorService.services[3]:
        return initialMasterClassDataForm;
      default:
        return {};
    }
  };

  const calcDifViewHeigh = CalcDifViewHeigh();

  return (
    <>
      <Container sx={{ height: "auto" }}>
        <form onSubmit={handleSubmit} autoComplete="new-password">
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
                setFormGetQuote={true}
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
                            formDataErrorUpdated["Event Date"][0]?.error ===
                              true
                              ? helperTextField
                              : null,
                          error:
                            formDataErrorUpdated["Event Date"] &&
                            formDataErrorUpdated["Event Date"][0]?.error ===
                              true
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
              {selectedService && (
                <Box sx={flexColumnRowStyles}>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="h7" sx={{ marginLeft: "10px" }}>
                      {getServiceFieldLabel(selectedService, "client")}
                    </Typography>
                    {renderFormFields(
                      getInitialFormData(selectedService),
                      "client"
                    )}
                  </Box>

                  {selectedService !== "" &&
                    selectedService !== formSelectorService.services[3] && (
                      <Box sx={{ width: "100%" }}>
                        <Typography variant="h7" sx={{ marginLeft: "10px" }}>
                          {getServiceFieldLabel(selectedService, "celebrant")}
                        </Typography>
                        {renderFormFields(
                          getInitialFormData(selectedService),
                          "celebrant"
                        )}
                      </Box>
                    )}
                </Box>
              )}

              {selectedService !== "" &&
                selectedService !== formSelectorService.services[3] && (
                  <Divider />
                )}
              <Box sx={flexColumnRowStyles}>
                <Box sx={{ width: "100%" }}>
                  {shouldRenderCeremonyDetails(selectedService) && (
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
                  {shouldRenderCeremonyVenue(selectedService) && (
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
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <ButtonCustom label="submit" type="submit" />
              {sendingForm && (
                <Typography>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  Wait a moment, sending your information.
                </Typography>
              )}
            </Box>
          </Box>
        </form>
        <CustomNotification
          message={notification ? notification.message : ""}
          severity={notification ? notification.severity : ""}
          show={notification ? notification.show : false}
        />
      </Container>
    </>
  );
};

export default Form;
