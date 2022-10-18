import React from "react";
import icons from "../../assets/icons.svg";

const Icon = ({ name, color, size }) => {
  return (
    <svg
      // style={{ position: "absolute" }}
      width={size}
      viewBox="0 0 30 20"
      fill={color}
    >
      <use href={icons + `#${name}`} />
    </svg>
  );
};

export default Icon;
