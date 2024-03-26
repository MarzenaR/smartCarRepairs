import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  margin: auto;
  padding: 30px 0;

  @media (max-width: 900px) {
    display: block;
  }

  .left-column {
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
      display: block;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .contact-link {
    margin-left: 40px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main};
    font-weight: 600;
    font-size: 20px;

    @media (max-width: 900px) {
      display: block;
      margin-left: 0;
    }
  }

  .buttons-wrapper {
    gap: 15px;
    display: flex;

    @media (max-width: 900px) {
      justify-content: center;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0 20px;
`;
