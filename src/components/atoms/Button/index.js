import React from "react";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";
import { StyledButton } from "./StyledButton";

const Button = ({
  children,
  bgColor = mainTheme.colors.main,
  onClick,
  type,
  }) => {
  return (
    <StyledButton bgColor={bgColor} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
