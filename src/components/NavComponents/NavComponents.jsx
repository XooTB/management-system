import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./NavComponents.scss";

const NavItem = ({ children, url, icon, color }) => {
  return (
    <div className="navItem">
      <div className="icon">
        <Icon name={icon} color={color} />
      </div>
      <Link to={url}>{children}</Link>
    </div>
  );
};

const DropDown = ({ children, name, icon, color }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
  };

  return (
    <div className="DropDown">
      <div className="name" onClick={handleClick}>
        <NavItem icon={icon} color={color}>
          {name}
        </NavItem>
      </div>
      <div className="subMenu">{open && children}</div>
    </div>
  );
};

export { NavItem, DropDown };
