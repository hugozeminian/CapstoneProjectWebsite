{/*This code defines a React functional component called ButtonAdminLogin, 
which renders a link to navigate to the "/admin-login" route. 
It uses Material-UI's Typography component to display text and the EditIcon component for an edit icon. 
The styles are applied using the sx prop provided by Material-UI.*/}

import React from "react"; 
import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material"; 
import { Link } from "react-router-dom"; 


const ButtonAdminLogin = () => {
  return (
    <>
      <Link to="/admin-login">
        <Typography
          fontSize="small" 
          sx={{
            color: "text.secondary",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: "15px", 
          }}
        >

          <EditIcon fontSize="small" sx={{ marginRight: "4px" }} /> Admin Login
        </Typography>
      </Link>
    </>
  );
};

export default ButtonAdminLogin; 
