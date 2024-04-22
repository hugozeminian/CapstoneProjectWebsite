import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

/**
 * A custom button component with customizable styles and functionality.
 * @param {object} props - The props for the ButtonCustom component.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {React.ReactNode} props.endIcon - Icon to be displayed at the end of the button.
 * @param {React.ReactNode} [props.endIcon_hover=props.endIcon] - Icon to be displayed at the end of the button on hover.
 * @param {string} [props.type] - The type of the button.
 * @param {string} [props.label="label"] - Label text for the button.
 * @param {Function} [props.onClick] - Event handler for button click.
 * @param {string} [props.linkTo=null] - Destination for navigation when button is clicked.
 * @param {string} [props.target="_self"] - Target attribute for link navigation.
 * @param {string} [props.rel=""] - Relationship attribute for link navigation.
 * @param {string} [props.width="fit-content"] - Width of the button.
 * @param {number|string} [props.py] - Padding on the y-axis.
 * @param {number|string} [props.px=3] - Padding on the x-axis.
 * @param {number|string} [props.pt] - Padding on the top.
 * @param {number|string} [props.pl] - Padding on the left.
 * @param {number|string} [props.pb] - Padding on the bottom.
 * @param {number|string} [props.pr] - Padding on the right.
 * @param {number|string} [props.my=2] - Margin on the y-axis.
 * @param {number|string} [props.mx] - Margin on the x-axis.
 * @param {number|string} [props.mt] - Margin on the top.
 * @param {number|string} [props.ml] - Margin on the left.
 * @param {number|string} [props.mb] - Margin on the bottom.
 * @param {number|string} [props.mr] - Margin on the right.
 * @param {string} [props.color="primary.accent"] - Text color of the button.
 * @param {string} [props.background="primary.main"] - Background color of the button.
 * @param {string} [props.border="2px solid transparent"] - Border style of the button.
 * @param {string} [props.borderColor] - Border color of the button.
 * @param {string} [props.backgroundColorHover="background.default"] - Background color of the button on hover.
 * @param {string} [props.borderColorHover="primary.main"] - Border color of the button on hover.
 * @param {string} [props.colorHover="primary.main"] - Text color of the button on hover.
 * @param {object} [props.MuiBoxRootStyles] - Additional styles for MuiBox-root.
 * @returns {JSX.Element} - Returns the ButtonCustom component.
 */
const ButtonCustom = ({
  disabled = false,
  endIcon,
  endIcon_hover = endIcon,
  type,
  label = "label",
  onClick,
  linkTo = null,
  target = "_self",
  rel = "",
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
  colorHover = "primary.main",
  MuiBoxRootStyles = {
    fontSize: "10px",
  },
}) => {
  // State to track hover
  const [isHover, setIsHover] = React.useState(false);

  // Constructing props for the Button component based on provided properties
  const buttonProps = {
    disabled: disabled,
    component: linkTo ? Link : "button",
    to: linkTo,
    type: type,
    onClick: onClick,
    target: linkTo ? target : undefined,
    rel: linkTo ? rel : undefined,
    sx: {
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
