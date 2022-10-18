import React from "react";
import "./Recents.scss";

const Row = ({ rowData }) => {
  return (
    <div>
      <div className="name">Factory X</div>
      <div className="model">80223XD</div>
      <div className="qty">200pcs</div>
    </div>
  );
};

export default Row;
