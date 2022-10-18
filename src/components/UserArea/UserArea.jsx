import React from "react";
import { useAuthContext } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";
import logoutLogo from "../../images/icons/logout.svg";
import pimage from "../../images/profile_image.jpg";
import "./UserArea.scss";

const UserArea = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="userArea">
      <div className="info">
        <img src={pimage} className="userImg" />
        <p>Admin</p>
      </div>

      <img
        src={logoutLogo}
        color="white"
        onClick={handleLogout}
        className="logout"
      />
    </div>
  );
};

export default UserArea;
