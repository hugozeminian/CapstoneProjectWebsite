{/*
This code defines a functional component UserForm that renders a form for creating or updating user information. 
The form includes input fields for name, email, password, and password confirmation. 
Users can submit the form to either create a new user or update an existing user. 
Errors, if any, are displayed to the user. The layout adjusts dynamically based on the height of the viewport.
 */}
import { useRef, useState } from "react"; // Importing useRef and useState hooks from React
import { Typography, Box, Container } from "@mui/material";
import { useStateContext } from "../../context/ContextProvider.jsx"; // Importing useStateContext from ContextProvider
import * as api from "../../api/api.js"; // Importing API functions from api.js
import FormInput from "../../components/form-input/FormInput.jsx"; // Importing FormInput component
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx"; // Importing ButtonCustom component
import { useNavigate, useParams } from "react-router-dom"; // Importing useNavigate and useParams hooks from react-router-dom
import { CalcDifViewHeigh } from "../../util/generalFunctions.js"; // Importing CalcDifViewHeigh function from generalFunctions.js

// Functional component for rendering the user form
export default function UserForm() {
  const calcDifViewHeigh = CalcDifViewHeigh(); // Calculating the height difference of the view
  const navigate = useNavigate(); // Creating a navigate function to navigate between routes
  const { id } = useParams(); // Destructuring id from the route parameters
  const nameRef = useRef(null); // Creating a ref for the name input field
  const emailRef = useRef(null); // Creating a ref for the email input field
  const passwordRef = useRef(null); // Creating a ref for the password input field
  const passwordConfirmationRef = useRef(null); // Creating a ref for the password confirmation input field
  const { setNotification } = useStateContext(); // Destructuring setNotification function from the context
  const [user, setUser] = useState({ // State variable to store user data
    id: null,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState(null); // State variable to store errors

   // Function to handle form submission
  const onSubmit = (ev) => {
    ev.preventDefault(); // Preventing the default form submission behavior

    // If user id exists, update user, otherwise create new user
    if (user.id) {
      api
        .updateUser(user.id, user)
        .then(() => {
          setNotification("User was successfully updated"); // Setting notification message
          navigate("/users"); // Navigating to the users page
        })
        .catch((error) => {
          const response = error.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors); // Setting errors if any
          }
        });
    } else {
      api
        .createUser(user)
        .then(() => {
          setNotification("User was successfully created"); // Setting notification message
          navigate("/users"); // Navigating to the users page
        })
        .catch((error) => {
          const response = error.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors); // Setting errors if any
          }
        });
    }
  };

  return (
    <Container
      sx={{
        height: `calc(100vh - ${calcDifViewHeigh}px)`,
      }}
    >
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
               {/* Displaying user update/new information */}
              {user.id && (
                <Typography variant="h6">Update User: {user.name}</Typography>
              )}
              {!user.id && <Typography variant="h6">New User</Typography>}
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
               {/* Submit button */}
              <ButtonCustom label="Submit" width="100%" type="submit" mt={3} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
