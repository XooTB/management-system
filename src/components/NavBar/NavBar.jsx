import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import UserArea from "../UserArea/UserArea";
import NavMenu from "../NavMenu/NavMenu";
import "./NavBar.scss";

import { useAuthContext } from "../../hooks/useAuth";

const NavBar = () => {
  const { user } = useAuthContext();

  return (
    <div className="NavBar">
      <div className="logo">
        <Logo color="white" />
      </div>
      <NavMenu />
      <div className="user">
        <UserArea />
      </div>
      <Link to="/Login" />
    </div>
  );
};

export default NavBar;
