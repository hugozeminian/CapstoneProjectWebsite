import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const ButtonCustom = ({
  endIcon,
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
  colorHover = "text.secondary",
}) => {
  const buttonProps = {
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
      color: color,
      bgcolor: background,
      border: border,
      borderColor: borderColor,
      textAlign: "center",
      "&:hover": {
        borderColor: borderColorHover,
        bgcolor: backgroundColorHover,
        color: colorHover,
      },
    },
  };

  return (
    <>
      <Button {...buttonProps} endIcon={endIcon}>
        {label}
      </Button>
    </>
  );
};

export default ButtonCustom;
