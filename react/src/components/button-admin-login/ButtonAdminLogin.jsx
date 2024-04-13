{
  /*This code defines a React functional component called ButtonAdminLogin, 
which renders a link to navigate to the "/admin-login" route. 
It uses Material-UI's Typography component to display text and the EditIcon component for an edit icon. 
The styles are applied using the sx prop provided by Material-UI.*/
}

import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/TokenContext";
import { logout } from "../../api/api";

const ButtonAdminLogin = () => {
  const { token, setToken, setUser } = useStateContext();

  const handleLogout = () => {
    setToken();
    setUser({});
    logout();
  };

  return (
    <>
      <Box width={200}>
        {token ? (
          <Typography
            component={Link}
            to="/admin-login"
            onClick={handleLogout}
            fontSize="small"
            sx={{
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pt: "15px",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            <LogoutIcon fontSize="small" sx={{ marginRight: "4px" }} /> Logout
          </Typography>
        ) : (
          <Link to="/admin-login">
            <Typography
              fontSize="small"
              sx={{
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pt: "15px",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <EditIcon fontSize="small" sx={{ marginRight: "4px" }} /> Admin
              Login
            </Typography>
          </Link>
        )}
      </Box>
    </>
  );
};

export default ButtonAdminLogin;
