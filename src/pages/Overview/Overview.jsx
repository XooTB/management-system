import React from "react";
import "./Overview.scss";
import { Recents } from "../../components/Recents/Recents";

const OverView = () => {
  return (
    <div className="products">
      <h1 className="title">OverView</h1>
      <div className="section">
        <Recents />
      </div>
      <div className="section"></div>
    </div>
  );
};

export default OverView;
