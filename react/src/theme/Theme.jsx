import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C29B24", // Golden
      accent: "#FFFFFF", // White accent
      highlight: "#FFDDC1", // Light peach highlight
      main_transparent: "#c29b2440", // Golden
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
      alternate_dark: "#c0c0c0", // Light pink alternate
      overlay: "rgba(0, 0, 0, 0.6)", // Semi-transparent black overlay
    },
  },
  typography: {
    fontFamily: [
      "EB Garamond",
      "Arial",
      "Verdana",
      "Helvetica",
      "sans-serif",
    ].join(","),

    h3: {
      fontFamily: "Caveat",
    },
    h4: {
      fontFamily: "Parisienne",
    },
    h7: {
      fontFamily: "EB Garamond",
      fontWeight: "500",
    },
    mobileFontSizeLarge: {
      fontSize: "24px"
    },
    mobileFontSizeMedium: {
      fontSize: "20px"
    },
    mobileFontSizeSmall: {
      fontSize: "16px"
    }
  },
});

export default theme;
