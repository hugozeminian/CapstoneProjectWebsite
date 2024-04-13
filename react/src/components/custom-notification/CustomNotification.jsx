import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const CustomNotification = ({ message, severity, show = false }) => {
  const [open, setOpen] = useState(show);

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
        style={
          severity === "success"
            ? { backgroundColor: "#C29B24", color: "#fff" }
            : null
        }
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomNotification;
