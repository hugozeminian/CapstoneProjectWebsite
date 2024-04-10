{
  /*
This code defines a functional component Signup that renders a signup form. 
Users can input their name, email, password, and password confirmation. 
Upon submission, the form data is sent to the server for user registration. 
If there are any errors during signup, they are displayed to the user. 
Additionally, there is a link to navigate to the signin page if the user is already registered. 
The layout adjusts dynamically based on the height of the viewport.
 */
}

import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Typography, Box, Container } from "@mui/material";
import { useStateContext } from "../../context/TokenContext.jsx";
import * as api from "../../api/api.js";
import FormInput from "../../components/form-input/FormInput.jsx";
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx";
import { useNavigate } from "react-router-dom";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

export default function Signup() {
  const calcDifViewHeigh = CalcDifViewHeigh();
  const nameRef = useRef(null); // Creating a ref for the name input field
  const emailRef = useRef(null); // Creating a ref for the email input field
  const passwordRef = useRef(null); // Creating a ref for the password input field
  const passwordConfirmationRef = useRef(null); // Creating a ref for the password confirmation input field
  const { setUser, setToken } = useStateContext(); // Destructuring setUser and setToken functions from the context
  const [errors, setErrors] = useState(null); // State variable to store errors
  const navigate = useNavigate(); // Creating a navigate function to navigate between routes

  // Function to handle form submission
  const onSubmit = (ev) => {
    ev.preventDefault();

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
        setUser(data.user);
        setToken(data.token);
        navigate("/settings");
      })
      .catch((error) => {
        const response = error.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
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
            <Box component="form" onSubmit={onSubmit}>
              {errors && (
                <Box mb={1}>
                  {Object.keys(errors).map((key) => (
                    <Typography key={key}>{errors[key][0]}</Typography>
                  ))}
                </Box>
              )}

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

              <ButtonCustom label="Signup" width="100%" type="submit" mt={3} />

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
