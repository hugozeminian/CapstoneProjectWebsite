{/*
This code defines a React functional component called ButtonCustom, 
which renders a button with customizable properties such as label, onClick event handler, link destination, and styles. 
It utilizes Material-UI's Button component and incorporates conditional rendering for either a button or a Link component based on the linkTo prop. 
Styles are applied using the sx prop provided by Material-UI.
*/}

import * as React from "react"; // Importing React library for using React components
import Button from "@mui/material/Button"; // Importing Button component from Material-UI
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation

// Defining a functional component ButtonCustom
const ButtonCustom = ({
  endIcon, // Icon to be displayed at the end of the button
  type,
  label = "label", // Label text for the button, default is "label"
  onClick, // Event handler for button click
  linkTo = null, // Destination for navigation when button is clicked
  target = "_self", // Target attribute for link navigation
  rel = "", // Relationship attribute for link navigation
  width = "fit-content", //default is "fit-content"
  py, // Padding on the y-axis
  px = 3, // Padding on the x-axis, default is 3
  pt, // Padding top
  pl, // Padding left
  pb, // Padding bottom
  pr, // Padding right
  my = 2, // Margin on the y-axis, default is 2
  mx, // Margin on the x-axis
  mt, // Margin top
  ml, // Margin left
  mb, // Margin bottom
  mr, // Margin right

  // Text color, background color, border and border color of the button.
  color = "primary.accent",  //default is "primary.accent"
  background = "primary.main", // default is "primary.main"
  border = "2px solid transparent", //default is "2px solid transparent"
  borderColor, 

  // Background color,border and color on hover,
  backgroundColorHover = "background.default",
  borderColorHover = "primary.main",
  colorHover = "text.secondary",
}) => {
  // Constructing props for the Button component based on provided properties
  const buttonProps = {
    component: linkTo ? Link : "button", // Determining the component based on linkTo prop
    to: linkTo, // Setting the destination for Link component
    type: type, // Setting the type of button
    onClick: onClick, // Setting the event handler for button click
    target: linkTo ? target : undefined, // Setting the target attribute if linkTo is provided
    rel: linkTo ? rel : undefined, // Setting the rel attribute if linkTo is provided
    sx: { // Styling object for Material-UI Button component
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

      //Setting text and background color. Border and border color
      color: color,
      bgcolor: background,
      border: border,
      borderColor: borderColor,
      textAlign: "center",
      "&:hover": { // Styling for hover state
        borderColor: borderColorHover,
        bgcolor: backgroundColorHover,
        color: colorHover,
      },
    },
  };

    // Returning the Button component with constructed props
  return (
    <>
      <Button {...buttonProps} endIcon={endIcon}>
        {label}
      </Button>
    </>
  );
};

export default ButtonCustom;
// Exporting ButtonCustom component as default