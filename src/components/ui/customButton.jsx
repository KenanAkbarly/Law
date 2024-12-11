import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  leftIcon,
  children,
  rightIcon,
  width,
  height,
  padding,
  bgColor,
  border,
  ...props
}) => {
  return <Button>
    {leftIcon}
    {children}
    {rightIcon}
  </Button>;
};

export default CustomButton;
