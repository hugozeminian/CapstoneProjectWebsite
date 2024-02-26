import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C29B24", // Golden
      accent: "#FFFFFF", // White accent
      highlight: "#FFDDC1", // Light peach highlight
    },
    secondary: {
      main: "#A1A09F", // Silver
      accent: "#F4F4F4", // Light gray accent
      highlight: "#E4E4E4", // Even lighter gray highlight
    },
    text: {
      primary: "#808080", // Gray
      secondary: "#000000", // Black
      info: "#007BFF", // Blue info
      success: "#28A745", // Green success
      error: "#DC3545", // Red error
      warning: "#FFC107", // Yellow warning
    },
    background: {
      default: "#FFFFFF", // White
      alternate: "#f0f0f0", // Light pink alternate
      overlay: "rgba(0, 0, 0, 0.6)", // Semi-transparent black overlay
    },
  },
  typography: {
    fontFamily: ["EB Garamond", "Arial", "Verdana", "Helvetica", "sans-serif"].join(","),

    h3: {
      fontFamily: "Caveat",
    },
    h4: {
      fontFamily: "Parisienne",
    },
  },
});

export default theme;
