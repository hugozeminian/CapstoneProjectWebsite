import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ButtonCustom = ({
  endIcon,
  type,
  label = "label",
  onClickHandler,
  linkTo = null,
  target = "_self",
  rel = "",
  width = "fit-content",
  px = 3,
  my = 2,
  color = "primary.accent",
  background = "primary.main",
  border = "2px solid transparent",
  backgroundColorHover = "background.default",
  borderColorHover = "primary.main",
  colorHover = "text.secondary",
}) => {
  const buttonProps = {
    component: linkTo ? Link : "button",
    to: linkTo,
    onClick: onClickHandler,
    target: linkTo ? target : undefined,
    rel: linkTo ? rel : undefined,
    sx: {
      width: width,
      px: px,
      my: my,
      color: color,
      bgcolor: background,
      border: border,
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
