import React from "react";

import { StyledPageTitle } from "./StyledPageTitle";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PageTitle = ({ children }) => {
  const navigate = useNavigate();

  return (
    <StyledPageTitle>
      <AiOutlineArrowLeft
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      />
      {children}
    </StyledPageTitle>
  );
};

export default PageTitle;
