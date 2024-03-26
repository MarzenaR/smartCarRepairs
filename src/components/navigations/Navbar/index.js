import React from "react";
import { useDispatch } from "react-redux";
import { unloggedRoutes } from "../../../utils/routes";
import Button from "../../atoms/Button";
import { StyledNav } from "./StyledNavbar";
import { openModal } from "../../../redux/actions";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";
import Logo from "../../atoms/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledNav>
        <div className="left-column">
          <Link to={unloggedRoutes.home}>
            <Logo width="150px" />
          </Link>
          <Link to={unloggedRoutes.contactUnlogged} className="contact-link">
            Contact Us
          </Link>
        </div>

        <div className="buttons-wrapper">
          <Button
            bgColor={mainTheme.colors.secondary}
            onClick={() => dispatch(openModal("register"))}
          >
            Register
          </Button>

          <Button
            bgColor={mainTheme.colors.main}
            onClick={() => dispatch(openModal("login"))}
          >
            Login
          </Button>
        </div>
      </StyledNav>
    </>
  );
};

export default Navbar;
