import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ButtonAdmin = () => {
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

export default ButtonAdmin;
