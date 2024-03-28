{
  /*
This code defines a functional component called AdminLogin, which represents the login page for administrators. 
It includes form inputs for email and password, a submit button for logging in, and a link to the registration page. 
The component utilizes Material-UI components such as Box, Container, Typography, and Button. It also interacts with the API using the provided api module.
 */
}

import React from "react";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import * as api from "../../api/api.js";
import { useStateContext } from "../../context/TokenContext.jsx";
import { createRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx";
import { Typography } from "@mui/material";
import FormInput from "../../components/form-input/FormInput.jsx";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

const AdminLogin = () => {
  const calcDifViewHeigh = CalcDifViewHeigh();
  const emailRef = createRef();
  const passwordRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  // Function to handle form submission
  const onSubmit = (ev) => {
    ev.preventDefault();

    const email = emailRef.current.value; // Getting value of email input
    const password = passwordRef.current.value; // Getting value of password input

    // Sending login request to API
    api
      .login(email, password)
      .then(( data ) => {
        setUser(data.user);
        setToken(data.token);
        navigate("/users");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      });
  };

  return (
    <>
      <Container
        sx={{
          height: "auto",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight:
              calcDifViewHeigh > window.innerHeight
                ? "auto"
                : `calc(100vh - ${calcDifViewHeigh}px)`,
          }}
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

                <ButtonCustom label="login" width="100%" type="submit" mt={3} />
              </Box>

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

export default AdminLogin;
