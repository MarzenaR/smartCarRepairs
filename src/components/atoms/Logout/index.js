import { useNavigate } from "react-router-dom";
import React from "react";

import { StyledLogout } from "./StyledLogout";
import { MdAccountCircle } from "react-icons/md";

const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // auth.signOut();
    navigate("/", { replace: true });
  };

  return (
    <StyledLogout>
      <MdAccountCircle onClick={logout} />
    </StyledLogout>
  );
};

export default Logout;
