import { IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import Modal from "../components/atoms/Modal";
import Sidebar from "../components/navigations/Sidebar";
import LoggedRouter from "../routings/LoggedRouter";
import {
  StyledLoggedPanelWrapper,
  LoggedRouterWrapper,
  StyledLogoutWrapper,
} from "./styled/StyledLoggedTemplate";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Welcome from "../views/Welcome";

const LoggedTemplate = () => {
  const { currentUser } = useSelector((state) => state);

  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate("/", { replace: true });
  };

  return (
    <>
      <Modal />

      <StyledLogoutWrapper>
        <Tooltip title="Log out">
          <IconButton onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </StyledLogoutWrapper>

      <StyledLoggedPanelWrapper>
        <Sidebar />
        <LoggedRouterWrapper>
          {currentUser.status === "pending" ? <Welcome /> : <LoggedRouter />}
        </LoggedRouterWrapper>
      </StyledLoggedPanelWrapper>
    </>
  );
};

export default LoggedTemplate;
