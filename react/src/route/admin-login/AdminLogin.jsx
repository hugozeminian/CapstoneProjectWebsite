import React from "react";
import { Box, Container } from "@mui/material";
import * as api from "../../api/api.js";
import { useStateContext } from "../../context/TokenContext.jsx";
import { createRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx";
import { Typography } from "@mui/material";
import FormInput from "../../components/form-input/FormInput.jsx";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

/**
 * Component for administrator login.
 * @returns {JSX.Element} AdminLogin component.
 */
const AdminLogin = () => {
  const calcDifViewHeigh = CalcDifViewHeigh(); 
  const emailRef = createRef(); 
  const passwordRef = createRef(); 
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); 

  /**
   * Handles form submission.
   * @param {React.SyntheticEvent} ev - The event object.
   */
  const onSubmit = (ev) => {
    ev.preventDefault();

    const email = emailRef.current.value; 
    const password = passwordRef.current.value; 

    // Send login request to API
    api
      .login(email, password)
      .then((data) => {
        setUser(data.user); 
        setToken(data.token); 
        navigate("/settings"); 
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
      <Container display="flex">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight:
              calcDifViewHeigh > window.innerHeight
                ? `70vh`
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

                {/* Email input field */}
                <FormInput
                  ref={emailRef}
                  type="email"
                  label={"Email"}
                  id={"Email"}
                  isMultiline={false}
                  variant="outlined"
                  sx={{ marginBottom: 3 }}
                />

                {/* Password input field */}
                <FormInput
                  ref={passwordRef}
                  type="password"
                  label={"Password"}
                  id={"password"}
                  isMultiline={false}
                  variant="outlined"
                />

                {/* Login button */}
                <ButtonCustom label="login" width="100%" type="submit" mt={3} />
              </Box>

            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AdminLogin;
