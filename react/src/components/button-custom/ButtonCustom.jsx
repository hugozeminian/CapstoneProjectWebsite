import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ButtonCustom = ({
  disabled = false,
  endIcon, // Icon to be displayed at the end of the button
  endIcon_hover = endIcon,
  type,
  label = "label", // Label text for the button, default is "label"
  onClick, // Event handler for button click
  linkTo = null, // Destination for navigation when button is clicked
  target = "_self", // Target attribute for link navigation
  rel = "", // Relationship attribute for link navigation
  width = "fit-content",
  py,
  px = 3,
  pt,
  pl,
  pb,
  pr,
  my = 2,
  mx,
  mt,
  ml,
  mb,
  mr,
  color = "primary.accent",
  background = "primary.main",
  border = "2px solid transparent",
  borderColor,
  backgroundColorHover = "background.default",
  borderColorHover = "primary.main",
  colorHover = "text.secondary",
  // Additional styles for MuiBox-root
  MuiBoxRootStyles = {
    fontSize: "10px",
  },
}) => {
  // State to track hover
  const [isHover, setIsHover] = React.useState(false);

  // Constructing props for the Button component based on provided properties
  const buttonProps = {
    disabled: disabled,
    component: linkTo ? Link : "button", // Determining the component based on linkTo prop
    to: linkTo, // Setting the destination for Link component
    type: type, // Setting the type of button
    onClick: onClick, // Setting the event handler for button click
    target: linkTo ? target : undefined, // Setting the target attribute if linkTo is provided
    rel: linkTo ? rel : undefined, // Setting the rel attribute if linkTo is provided
    sx: {
      // Styling object for Material-UI Button component
      width: width,
      py: py,
      px: px,
      pt: pt,
      pl: pl,
      pb: pb,
      pr: pr,
      my: my,
      mx: mx,
      mt: mt,
      ml: ml,
      mb: mb,
      mr: mr,
      color: isHover ? colorHover : color,
      bgcolor: isHover ? backgroundColorHover : background,
      border: border,
      borderColor: isHover ? borderColorHover : borderColor,
      textAlign: "center",
      "& .MuiBox-root": {
        ...MuiBoxRootStyles,
      },
      "&:hover": {
        borderColor: borderColorHover,
        bgcolor: backgroundColorHover,
        color: colorHover,
      },
    },
    // Set the state of hover
    onMouseEnter: () => setIsHover(true),
    onMouseLeave: () => setIsHover(false),
  };

  // Returning the Button component with constructed props
  return (
    <>
      <Button {...buttonProps} endIcon={isHover ? endIcon_hover : endIcon}>
        {label}
      </Button>
    </>
  );
};

export default ButtonCustom;
