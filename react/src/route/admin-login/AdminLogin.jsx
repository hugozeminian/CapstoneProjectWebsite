{/*
This code defines a functional component called AdminLogin, which represents the login page for administrators. 
It includes form inputs for email and password, a submit button for logging in, and a link to the registration page. 
The component utilizes Material-UI components such as Box, Container, Typography, and Button. It also interacts with the API using the provided api module.
 */}

import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import * as api from "../../api/api.js"; // Importing api functions
import { useStateContext } from "../../context/ContextProvider.jsx"; // Importing useStateContext from ContextProvider
import { createRef } from "react"; // Importing createRef from React
import { useState } from "react"; // Importing useState hook from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx"; // Importing custom ButtonCustom component
import { Typography, Button } from "@mui/material";
import FormInput from "../../components/form-input/FormInput.jsx"; // Importing custom FormInput component
import { CalcDifViewHeigh } from "../../util/generalFunctions.js"; // Importing CalcDifViewHeigh function from generalFunctions.js

// Functional component for admin login page
const AdminLogin = () => {
  const calcDifViewHeigh = CalcDifViewHeigh(); // Calculating difference in view height
  const emailRef = createRef();
  const passwordRef = createRef();
  const { setUser, setToken } = useStateContext(); // Destructuring setUser and setToken functions from context
  const [message, setMessage] = useState(null); // State for storing error message
  const navigate = useNavigate(); // Getting navigation function from react-router-dom

  // Function to handle form submission
  const onSubmit = (ev) => {
    ev.preventDefault(); // Preventing default form submission behavior


    const email = emailRef.current.value; // Getting value of email input
    const password = passwordRef.current.value; // Getting value of password input

    // Sending login request to API
    api
      .login(email, password)
      .then(({ data }) => {
        setUser(data.user); // Setting user data in context
        setToken(data.token); // Setting token in context
        navigate("/users"); // Navigating to user dashboard
      })
      .catch((err) => {
        const response = err.response; // Getting error response from API
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      });
  };

  return (
    <>
      <Container
        sx={{
          height: `calc(100vh - ${calcDifViewHeigh}px)`,
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={"100%"}
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
              <Box
                display={"flex"}
                flexDirection={"column"}
                component="form"
                onSubmit={onSubmit}
              >
                {message && (
                  <Box mb={1}>
                    <Typography>{message}</Typography>
                  </Box>
                )}
                {/* Form inputs */}
                <FormInput
                  ref={emailRef}
                  type="email"
                  label={"Email"}
                  id={"Email"}
                  isMultiline={false}
                  variant="outlined"
                  sx={{ marginBottom: 3 }}
                />

                <FormInput
                  ref={passwordRef}
                  type="password"
                  label={"Password"}
                  id={"password"}
                  isMultiline={false}
                  variant="outlined"
                />
              
              {/* Submit button */}
                <ButtonCustom label="login" width="100%" type="submit" mt={3} />
              </Box>

              {/* Link to registration page */}
              <Typography>
                Not registered? <Link to="/signup">Create an account</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AdminLogin;// Exporting AdminLogin component as default
