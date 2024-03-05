{/*This code defines a React functional component called ButtonAdminLogin, 
which renders a link to navigate to the "/admin-login" route. 
It uses Material-UI's Typography component to display text and the EditIcon component for an edit icon. 
The styles are applied using the sx prop provided by Material-UI.*/}

import React from "react"; // Importing React library for using React components
import EditIcon from "@mui/icons-material/Edit"; // Importing EditIcon component from Material-UI icons
import { Typography } from "@mui/material"; // Importing Typography component from Material-UI
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation

// Defining a functional component ButtonAdminLogin
const ButtonAdminLogin = () => {
  return (
    <>
      <Link to="/admin-login">
        <Typography
          fontSize="small" //font size to small
          sx={{
            color: "text.secondary",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: "15px", // Adding padding top of 15px
          }}
        >
           {/* Displaying EditIcon with small font size and adding margin to the right */}
          <EditIcon fontSize="small" sx={{ marginRight: "4px" }} /> Admin Login
        </Typography>
      </Link>
    </>
  );
};

export default ButtonAdminLogin; // Exporting ButtonAdminLogin component as default
