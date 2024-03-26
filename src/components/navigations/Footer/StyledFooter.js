import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 30px 0;
  font-weight: 600;
  font-size: 20px;
  align-items: center;
  text-decoration: none;
  width: calc(100% - 240px);
  margin-left: 240px;
`;

export const FooterLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.darkBlue};
  text-decoration: none;
`;

export const UlStyled = styled.ul`
  list-style-type: none;

  justify-content: space-between;
  width: 100%;
`;

export const LiStyled = styled.li`
  display: inline;
  color: ${({ theme }) => theme.colors.main};
`;

export const IconWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: inline;
`;
