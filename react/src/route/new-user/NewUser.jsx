/**
 * NewUser component for rendering the user form.
 * 
 * This component allows users to create new accounts or update existing ones.
 * 
 * @returns {JSX.Element} NewUser component JSX
 */

import { useEffect, useRef, useState } from "react";
import { Typography, Box, Container } from "@mui/material";
import { useStateContext } from "../../context/TokenContext.jsx";
import * as api from "../../api/api.js";
import FormInput from "../../components/form-input/FormInput.jsx";
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";

export default function NewUser() {
  const calcDifViewHeigh = CalcDifViewHeigh();
  const navigate = useNavigate(); 
  const { id } = useParams(); 
  const nameRef = useRef(null); 
  const emailRef = useRef(null); 
  const passwordRef = useRef(null); 
  const passwordConfirmationRef = useRef(null); 
  const { setNotification } = useStateContext(); 
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const userData = await api.getUserById(id);
          setUser({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            password: "",
            password_confirmation: "",
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, [id]);

  // Function to handle form submission
  const onSubmit = (ev) => {
    ev.preventDefault();

    if (user.id) {
      api
        .updateUser(user.id, user)
        .then(() => {
          setNotification("User was successfully updated");
          navigate("/settings");
        })
        .catch((error) => {
          const response = error.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      api
        .createUser(user)
        .then(() => {
          setNotification("User was successfully created");
          navigate("/settings");
        })
        .catch((error) => {
          const response = error.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
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
              {user.id && (
                <Typography mb={2} variant="h6">Update User: {user.name}</Typography>
              )}
              {!user.id && <Typography mb={2} variant="h6">New User</Typography>}

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
                value={user.name}
                onChange={(ev) => setUser({ ...user, name: ev.target.value })}
              />
              <FormInput
                ref={emailRef}
                type="email"
                label={"Email Address"}
                id={"email"}
                isMultiline={false}
                variant="outlined"
                sx={{ marginBottom: 3, width: "100%" }}
                value={user.email}
                onChange={(ev) => setUser({ ...user, email: ev.target.value })}
              />
              <FormInput
                ref={passwordRef}
                type="password"
                label={"Password"}
                id={"password"}
                isMultiline={false}
                variant="outlined"
                sx={{ marginBottom: 3, width: "100%" }}
                value={user.password}
                onChange={(ev) =>
                  setUser({ ...user, password: ev.target.value })
                }
              />
              <FormInput
                ref={passwordConfirmationRef}
                type="password"
                label={"Repeat Password"}
                id={"passwordConfirmation"}
                isMultiline={false}
                variant="outlined"
                sx={{ marginBottom: 3, width: "100%" }}
                value={user.password_confirmation}
                onChange={(ev) =>
                  setUser({
                    ...user,
                    password_confirmation: ev.target.value,
                  })
                }
              />

              <ButtonCustom label="Submit" width="100%" type="submit" mt={3} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
