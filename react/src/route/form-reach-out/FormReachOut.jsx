import React, { useEffect, useState } from "react";
import { Container, FormControl, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormInput from "../../components/form-input/FormInput";
import { formGeneralTypography } from "../../repository/FormContent";
import { Divider } from "@mui/material";
import ButtonCustom from "../../components/button-custom/ButtonCustom";
import {
  CalcDifViewHeigh,
  deepCopy,
  ensureArray,
  capitalizeFirstLetter,
} from "../../util/generalFunctions.js";
import CustomNotification from "../../components/custom-notification/CustomNotification.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  initialContactFormReachOut,
  initialMessageReachOutForm,
} from "../../repository/FormReachOutContent.js";
import { sendEmailReachOut } from "../../api/api.js";

const FormReachOut = () => {
  const [formData, setFormData] = useState({
    ...initialContactFormReachOut,
    message_box: { ...initialMessageReachOutForm.message_box },
  });
  const [formDataErrorUpdated, setFormDataErrorUpdated] = useState("");
  const [emailCompare, setEmailCompare] = useState({});
  const [submitForm, setSubmitForm] = useState("");

  const [notification, setNotification] = useState(null);
  const [sendingForm, setSendingForm] = useState(false);

  // Errors validation
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
      // Iterate through each key in initialWeddingDataForm
      for (const key in formDataErrorUpdated) {
        if (Array.isArray(formDataErrorUpdated[key])) {
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
                          "🚀 ~ formDataErrorUpdated[key].forEach ~ !isValidComparedEmail CLIENT:",
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
                          "🚀 ~ formDataErrorUpdated[key].forEach ~ !isValidComparedEmail CELEBRANT:",
                          !isValidComparedEmail
                        );
                        error = true;
                      }
                    }
                  }
                  break;
                default:
                  break;
              }
            }
          });
        }
      }
    }
    return error;
  };

  const compareEmails = (emails) => {
    const propsEmails = emails;
    // Check if emails is defined
    if (!emails) {
      console.error("Emails object is undefined.");
      return false; // Or handle the situation accordingly
    }

    // Destructure the object to get the email properties based on userType
    const {
      client: { client_confirm_email: confirmEmail, client_email: email } = {},
    } = emails || {};

    // Check if confirm_email matches email
    return confirmEmail === email;
  };

  // Check form message
  const handleMessageBoxChange = (e) => {
    const { name, value } = e.target;
    const capsLabel = capitalizeFirstLetter(name);

    setSubmitForm({
      ...submitForm,
      message_reachOutBox: [
        {
          label: capsLabel,
          content: value,
        },
      ],
    });
  };

  // Check form fields
  const handleChange = (event, formDataKey, item, index) => {
    const { name, value } = event.target;
    const error = validateField(formDataKey, name, value, item);

    // Create a copy of the formData state
    const updatedFormData = { ...formData };

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
      client_confirm_email: "client_email",
    };

    // Determine the confirm email field name based on the current field name
    const confirmFieldName = confirmEmailFieldMap[name];

    if (confirmFieldName) {
      // Find the index of the confirm field
      const confirmFieldIndex = formData[formDataKey].findIndex(
        (field) => field.name === confirmFieldName
      );
      console.log("🚀 ~ handleChange ~ confirmFieldIndex:", confirmFieldIndex, error)

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
  const handleSubmit = async (event) => {
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
          // console.error(`Invalid formDataKey or formDataKey is not an array: ${formDataKey}`);
        }
      }
    }

    // Update the formData state with the updated error information
    setFormData(updatedFormData);

    console.log("🚀 ~ handleSubmit ~ updatedFormData:", updatedFormData);
    if (!hasError(updatedFormData)) {
      console.log("🚀 ~ handleSubmit ~ submitForm:", submitForm);
      try {
        // Send form data to server
        // const response = await sendEmailReachOut(submitForm);

        // Handle success response
        // console.log("Form submitted successfully!", response);

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

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {formData[formDataKey].map((item, index) => (
          <Box
            key={`field-${formDataKey}-${index}`}
            sx={{
              width: "calc(50% - 16px)",
              marginRight: index % 2 === 0 ? "16px" : "0px",
              marginBottom: "calc(1.25rem + 3px)",
              "@media (max-width: 600px)": {
                width: "100%",
                marginRight: 0,
              },
            }}
          >
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
              fullWidth
            />
          </Box>
        ))}
      </Box>
    );
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
    <>
      <Container sx={{ height: "auto" }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
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
              Milestone Ceremony Reach Out To Me
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
            ></Box>

            <Divider />

            {/* Title */}
            <Box
              sx={{
                display: "flex",
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
              <>
                {/* Reach Out Form */}
                <Box sx={flexColumnRowStyles}>
                  <Box sx={{ width: "100%" }}>
                    {renderFormFields(initialContactFormReachOut, "client")}
                  </Box>
                </Box>
              </>
            </Box>

            {/* Message box */}
            <Box sx={flexColumnRowStyles}>
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
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
                    name={initialMessageReachOutForm.message_box.name}
                    onChange={(message) => handleMessageBoxChange(message)}
                    isRequired={
                      initialMessageReachOutForm.message_box.isRequired
                    }
                    label={initialMessageReachOutForm.message_box.label}
                    id={initialMessageReachOutForm.message_box.id}
                    isMultiline={true}
                    minRows={initialMessageReachOutForm.message_box.minRows}
                    maxRows={initialMessageReachOutForm.message_box.maxRows}
                    variant="outlined"
                  />
                </Box>
              </Box>
            </Box>

            {/* Submit Button */}
            <Box
              sx={{
                display: "flex",
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

export default FormReachOut;
