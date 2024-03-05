{/*
This code defines a functional component Signup that renders a signup form. 
Users can input their name, email, password, and password confirmation. 
Upon submission, the form data is sent to the server for user registration. 
If there are any errors during signup, they are displayed to the user. 
Additionally, there is a link to navigate to the signin page if the user is already registered. 
The layout adjusts dynamically based on the height of the viewport.
 */}

import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import { useRef, useState } from "react"; // Importing useRef and useState hooks from React
import { Typography, Box, Container } from "@mui/material";
import { useStateContext } from "../../context/ContextProvider.jsx"; // Importing useStateContext from ContextProvider
import * as api from "../../api/api.js"; // Importing API functions from api.js
import FormInput from "../../components/form-input/FormInput.jsx"; // Importing FormInput component
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx"; // Importing ButtonCustom component
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom
import { CalcDifViewHeigh } from "../../util/generalFunctions.js"; // Importing CalcDifViewHeigh function from generalFunctions.js

// Functional component for rendering the signup page
export default function Signup() {
  const calcDifViewHeigh = CalcDifViewHeigh(); // Calculating the height difference of the view
  const nameRef = useRef(null); // Creating a ref for the name input field
  const emailRef = useRef(null); // Creating a ref for the email input field
  const passwordRef = useRef(null); // Creating a ref for the password input field
  const passwordConfirmationRef = useRef(null); // Creating a ref for the password confirmation input field
  const { setUser, setToken } = useStateContext(); // Destructuring setUser and setToken functions from the context
  const [errors, setErrors] = useState(null); // State variable to store errors
  const navigate = useNavigate(); // Creating a navigate function to navigate between routes

  // Function to handle form submission
  const onSubmit = (ev) => {
    ev.preventDefault(); // Preventing the default form submission behavior

    // Creating a payload object with user input data
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    // Calling the signupUser function from the API with the payload
    api
      .signupUser(payload)
      .then((data) => {
        // If signup is successful, setUser and setToken with user and token data, then navigate to /users route
        setUser(data.user);
        setToken(data.token);
        navigate("/users");
      })
      .catch((error) => {
        // If there's an error, check if it's a 422 status error, then setErrors with the error data
        const response = error.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <Container
      sx={{
        height: `calc(100vh - ${calcDifViewHeigh}px)`, // Setting the container height dynamically
      }}
    >
      {/* Box to contain the signup form */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70vh"
      >
        <Box
          width={300}
          p={3}
          sx={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
            borderRadius: "5px",
          }}
        >
          <Box>
            <Box component="form" onSubmit={onSubmit}>
               {/* Displaying errors if present */}
              {errors && (
                <Box mb={1}>
                  {Object.keys(errors).map((key) => (
                    <Typography key={key}>{errors[key][0]}</Typography>
                  ))}
                </Box>
              )}
               {/* Form input fields */}
              <FormInput
                ref={nameRef}
                type="text"
                label={"Full Name"}
                id={"name"}
                isMultiline={false}
                variant="outlined"
                sx={{ marginBottom: 3, width: "100%" }}
              />
              <FormInput
                ref={emailRef}
                type="email"
                label={"Email Address"}
                id={"email"}
                isMultiline={false}
                variant="outlined"
                sx={{ marginBottom: 3, width: "100%" }}
              />
              <FormInput
                ref={passwordRef}
                type="password"
                label={"Password"}
                id={"password"}
                isMultiline={false}
                variant="outlined"
                sx={{ marginBottom: 3, width: "100%" }}
              />
              <FormInput
                ref={passwordConfirmationRef}
                type="password"
                label={"Repeat Password"}
                id={"passwordConfirmation"}
                isMultiline={false}
                variant="outlined"
                sx={{ marginBottom: 3, width: "100%" }}
              />
              {/* Signup button */}
              <ButtonCustom label="Signup" width="100%" type="submit" mt={3} />
               {/* Link to the signin page */}
              <Typography variant="body1" mt={1}>
                Already registered? <Link to="/admin-login">Sign In</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
