/**
 * FormReachOut component for rendering a form to reach out for milestone ceremony.
 * 
 * This component includes form fields for clients to provide their contact information
 * and a message box for additional comments. Upon submission, the form data is validated
 * and sent to the server for processing.
 * 
 * @returns {JSX.Element} FormReachOut component JSX
 */

import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
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

  /**
   * Validates the field based on its type and value.
   * 
   * @param {string} formDataKey - The key of the formData object.
   * @param {string} name - The name of the field being validated.
   * @param {string} value - The value of the field being validated.
   * @param {object} item - The item object containing field properties.
   * @returns {boolean} Whether the field is valid or not.
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
      if (item.isRequired) {
        if (value.length < 1) {
          error = true;
        }
      }
      if (name === "client_cellphone" || name === "celebrant_cellphone") {
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
        const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          error = true;
        }

        setEmailCompare((prevEmailCompare) => {
          const newEmailCompare = { ...prevEmailCompare };

          if (!(formDataKey in newEmailCompare)) {
            newEmailCompare[formDataKey] = {};
          }

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
   * Compares email fields to ensure they match.
   * 
   * @param {object} emails - The object containing email fields.
   * @returns {boolean} Whether the emails match or not.
   */
  const compareEmails = (emails) => {
    const propsEmails = emails;
    if (!emails) {
      console.error("Emails object is undefined.");
      return false;
    }

    const {
      client: { client_confirm_email: confirmEmail, client_email: email } = {},
    } = emails || {};

    return confirmEmail === email;
  };

  /**
   * Updates the message box field in the submitForm state.
   * 
   * @param {object} e - The event object.
   */
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

  /**
   * Handles changes in form fields and validates them.
   * 
   * @param {object} event - The event object.
   * @param {string} formDataKey - The key of the formData object.
   * @param {object} item - The item object containing field properties.
   * @param {number} index - The index of the field.
   */
  const handleChange = (event, formDataKey, item, index) => {
    const { name, value } = event.target;
    const error = validateField(formDataKey, name, value, item);

    const updatedFormData = { ...formData };
    updatedFormData[formDataKey][index] = {
      ...updatedFormData[formDataKey][index],
      error: error,
    };

    setFormData(updatedFormData);

    const confirmEmailFieldMap = {
      client_email: "client_confirm_email",
      client_confirm_email: "client_email",
    };

    const confirmFieldName = confirmEmailFieldMap[name];

    if (confirmFieldName) {
      const confirmFieldIndex = formData[formDataKey].findIndex(
        (field) => field.name === confirmFieldName
      );

      if (confirmFieldIndex !== -1) {
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

  /**
   * Updates the formData state with new values.
   * 
   * @param {object} formData - The current formData state.
   * @param {string} formDataKey - The key of the formData object.
   * @param {number} index - The index of the field.
   * @param {object} updates - The updated values.
   * @returns {object} Updated formData state.
   */
  const updateFormData = (formData, formDataKey, index, updates) => {
    const copyOfFormData = deepCopy(formData);
    copyOfFormData[formDataKey] = ensureArray(copyOfFormData[formDataKey]);
    copyOfFormData[formDataKey][index] = {
      ...copyOfFormData[formDataKey][index],
      ...updates,
    };
    return copyOfFormData;
  };

  /**
   * Updates the submitForm state with new values.
   * 
   * @param {object} submitForm - The current submitForm state.
   * @param {string} formDataKey - The key of the formData object.
   * @param {object} item - The item object containing field properties.
   * @param {string} name - The name of the field being updated.
   * @param {string} value - The new value of the field.
   * @returns {object} Updated submitForm state.
   */
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

  /**
   * Submits the form data to the server after validation.
   * 
   * @param {object} event - The event object.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    setSendingForm(true);

    setFormData(formDataErrorUpdated);
    const updatedFormData = { ...formData };
    for (const formDataKey in formDataErrorUpdated) {
      if (
        updatedFormData.hasOwnProperty(formDataKey) &&
        Array.isArray(updatedFormData[formDataKey])
      ) {
        if (Array.isArray(formDataErrorUpdated[formDataKey])) {
          formDataErrorUpdated[formDataKey].forEach((errorData, index) => {
            if (index >= 0 && index < updatedFormData[formDataKey].length) {
              if (!updatedFormData[formDataKey][index]) {
                updatedFormData[formDataKey][index] = {};
              }
              updatedFormData[formDataKey][index].error = errorData.error;
            } else {
              console.error(`Invalid index: ${index}`);
            }
          });
        }
      }
    }

    setFormData(updatedFormData);

    if (!hasError(updatedFormData)) {
      try {
        const response = await sendEmailReachOut(submitForm);

        setNotification({
          message: "Form submitted successfully!",
          severity: "success",
          show: true,
        });
      } catch (error) {
        console.error("Error submitting form:", error);

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

  /**
   * Checks if any form field has an error.
   * 
   * @param {object} formDataErrorObject - The object containing form data errors.
   * @returns {boolean} Whether any form field has an error or not.
   */
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

  /**
   * Renders form fields based on formData.
   * 
   * @param {object} formData - The formData object containing form field data.
   * @param {string} formDataKey - The key of the formData object.
   * @returns {JSX.Element} Rendered form fields JSX.
   */
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
