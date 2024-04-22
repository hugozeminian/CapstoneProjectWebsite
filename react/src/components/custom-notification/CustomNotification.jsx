import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

/**
 * CustomNotification component for displaying notifications.
 * @param {Object} props - Props for the CustomNotification component.
 * @param {string} props.message - Message to be displayed in the notification.
 * @param {string} props.severity - Severity of the notification (e.g., 'success', 'error', 'warning').
 * @param {boolean} [props.show=false] - Flag indicating whether the notification should be initially shown.
 * @returns {JSX.Element} - Returns the CustomNotification component.
 */
const CustomNotification = ({ message, severity, show = false }) => {
  const [open, setOpen] = useState(show);

  /**
   * Handles the close event of the Snackbar.
   */
  const handleClose = () => {
    setOpen(false);
    window.location.reload(); // Reloading the page after closing the notification
  };

  // Update the state when the 'show' prop changes
  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000} // Duration for which the notification is displayed
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
        // Custom styles for success notifications
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
