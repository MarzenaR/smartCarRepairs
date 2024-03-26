import React from "react";
import { footerData } from "./footerData";

import {
  StyledFooter,
  FooterLink,
  UlStyled,
  LiStyled,
  IconWrapper,
} from "./StyledFooter";

import { RootName } from "../Sidebar/StyledSidebar";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div>
          <UlStyled>
            {footerData.map(({ routeName, path }) => (
              <LiStyled key={routeName}>
                <FooterLink to={path}>
                  <RootName> {routeName} </RootName>
                  <IconWrapper></IconWrapper>
                </FooterLink>
              </LiStyled>
            ))}
          </UlStyled>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
