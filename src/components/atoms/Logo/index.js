import React from "react";
import logo from "../../../assets/images/LOGO.png";
import { StyledLogo } from "./StyledLogo";

const Logo = ({ width }) => {
  return <StyledLogo src={logo} alt="logo" width={width} />;
};

export default Logo;
