import React from "react";
import Icon from "../Icon/Icon";
import { NavItem, DropDown } from "../NavComponents/NavComponents";

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <DropDown name="Products" icon="products" color="white">
        <NavItem url="/overview" icon="overview" color="white">
          Overview
        </NavItem>
        <NavItem url="/inventory" icon="inventory" color="white">
          Inventory
        </NavItem>
      </DropDown>
      <NavItem url="/accounts" icon="accounts-invoice" color="white">
        Accounts
      </NavItem>
      <NavItem url="/staff" icon="users">
        Staff
      </NavItem>
      <NavItem url="/employee" icon="users">
        Employees
      </NavItem>
    </div>
  );
};

export default NavMenu;
