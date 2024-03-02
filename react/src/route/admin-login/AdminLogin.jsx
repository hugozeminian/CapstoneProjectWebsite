import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";

import { Link } from "react-router-dom";
import * as api from "../../api/api.js";
import { useStateContext } from "../../context/ContextProvider.jsx";
import { createRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx";
import { Typography, Button } from "@mui/material";
import FormInput from "../../components/form-input/FormInput.jsx";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

const AdminLogin = () => {
  const calcDifViewHeigh = CalcDifViewHeigh();
  const emailRef = createRef();
  const passwordRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    api
      .login(email, password)
      .then(({ data }) => {
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
