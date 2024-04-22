import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/TokenContext";
import { logout } from "../../api/api";

/**
 * A button component for admin login/logout functionality.
 * @returns {JSX.Element} - Returns the ButtonAdminLogin component.
 */
const ButtonAdminLogin = () => {
  // Get token, setToken, and setUser from context
  const { token, setToken, setUser } = useStateContext();

  /**
   * Handles the logout functionality.
   */
  const handleLogout = () => {
    // Clear token, remove user from localStorage, reset user context, and call logout API
    setToken();
    localStorage.removeItem("user");
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
            Logout
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
              Admin Login
            </Typography>
          </Link>
        )}
      </Box>
    </>
  );
};

export default ButtonAdminLogin;
