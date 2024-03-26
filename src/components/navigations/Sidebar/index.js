import React, { useState } from "react";
import { adminSidebarData, userSidebarData } from "./sidebarData";
import {
  SidebarWrapper,
  SidebarLink,
  SidebarTitle,
  RootName,
  MenuButton,
} from "./StyledSidebar";
import { loggedRoutes } from "../../../utils/routes";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { useSelector } from "react-redux";
import Logo from "../../atoms/Logo";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useSelector((state) => state);
  const selectSidebarDataByRole = () => {
    switch (currentUser?.role) {
      case "admin":
        return adminSidebarData;
      default:
        return userSidebarData;
    }
  };

  const getMenuIcon = () =>
    openMenu ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />;

  return (
    <SidebarWrapper className={openMenu ? "open" : ""}>
      <SidebarTitle to={loggedRoutes.bookings}>
        <Logo size="medium" width="150px" />
      </SidebarTitle>
      <MenuButton onClick={() => setOpenMenu((state) => !state)}>
        {getMenuIcon()}
      </MenuButton>
      <ul className="sidenav">
        {selectSidebarDataByRole().map(({ routeName, path, icon }) => (
          <li key={routeName}>
            <SidebarLink to={path}>
              {icon}
              <RootName> {routeName} </RootName>
            </SidebarLink>
          </li>
        ))}
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
