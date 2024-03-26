import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import roadImg from "../../../assets/images/road.jpg";

export const SidebarWrapper = styled.nav`
  width: 240px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding: 0 10px;

  background-image: url("${roadImg}"),
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  background-blend-mode: overlay;

  @media (max-width: 991px) {
    width: 60px;

    &.open {
      position: fixed;
      top: 0;
      left: 0;
      width: 240px;
      z-index: 999;
    }
  }
`;

export const SidebarLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 10px;
  &.active {
    background: ${({ theme }) => theme.colors.main};
    border-radius: 35px;
  }
  @media (max-width: 991px) {
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    padding: 10px;
    font-size: 55px;
    width: 40px;
    height: 40px;

    .open & {
      justify-content: flex-start;
      font-size: 18px;
      padding: 10px 15px;
      width: auto;
      height: auto;
    }
  }
`;

export const SidebarTitle = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: #fff;
  text-decoration: none;
  text-align: center;
  display: block;
  margin: 20px 0;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const RootName = styled.span`
  @media (max-width: 991px) {
    display: none;

    .open & {
      display: inline;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  margin: 20px auto;
  border: none;
  background: none;
  color: #fff;
  font-size: 20px;
  @media (max-width: 991px) {
    display: block;
  }
`;
