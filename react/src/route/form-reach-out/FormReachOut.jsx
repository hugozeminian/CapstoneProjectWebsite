import React from "react";
import { Container } from "@mui/material";
import { CalcDifViewHeigh } from "../../util/generalFunctions.js";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { initialMessageReachOutForm } from "../../repository/FormReachOutContent.js";
import FormInput from "../../components/form-input/FormInput.jsx";

const FormReachOut = () => {
  const calcDifViewHeigh = CalcDifViewHeigh();

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
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <Box sx={{ display: "flex", gap: "50px" }}>
              <Box sx={{ width: "50%" }}>
                <TextField
                  id="outlined-search"
                  label="First Name"
                  type="search"
                  fullWidth
                  sx={{ mb: 4 }}
                />

                <TextField
                  id="outlined-search"
                  label="Email"
                  type="search"
                  fullWidth
                  sx={{ mb: 4 }}
                />

                <TextField
                  id="outlined-search"
                  label="Cell Phone"
                  type="search"
                  fullWidth
                  sx={{ mb: 4 }}
                />
              </Box>

              <Box sx={{ width: "50%" }}>
                <TextField
                  id="outlined-search"
                  label="Last Name"
                  type="search"
                  fullWidth
                  sx={{ mb: 4 }}
                />

                <TextField
                  id="outlined-search"
                  label="Confirm Email"
                  type="search"
                  fullWidth
                  sx={{ mb: 4 }}
                />

                <TextField
                  id="outlined-search"
                  label="City"
                  type="search"
                  fullWidth
                  sx={{ mb: 4 }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                justifyContent: "center",
                marginBottom: "20px",
                marginLeft: "10px",
                marginRight: "0px",
                width: "100%",
              }}
            >
              <FormInput
                name={initialMessageReachOutForm.message_reachOutBox.name}
                //onChange={handleChange}
                isRequired={
                  initialMessageReachOutForm.message_reachOutBox.isRequired
                }
                label={initialMessageReachOutForm.message_reachOutBox.label}
                id={initialMessageReachOutForm.message_reachOutBox.id}
                isMultiline={true}
                minRows={initialMessageReachOutForm.message_reachOutBox.minRows}
                maxRows={initialMessageReachOutForm.message_reachOutBox.maxRows}
                variant="outlined"
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default FormReachOut;
