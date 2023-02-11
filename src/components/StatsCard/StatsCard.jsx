import React from "react";
import Icon from "../Icon/Icon";

const StatsCard = ({ cardName, cardDesc, cardInfo, iconName }) => {
  return (
    <div className="statsCard bg-white bg-opacity-50 rounded-xl w-1/4 h-40 text-black ml-3 mr-3 mt-10">
      <div className="flex w-full pl-5 pt-4">
        <Icon name={iconName} color="black" size="40px" />
        <h2 className="text-2xl">{cardName}</h2>
      </div>
      <p className="text-sm font-bold text-gray-500 pl-8 pt-1">{cardDesc}</p>
      <p className="text-3xl pl-7 pt-6">{cardInfo}</p>
    </div>
  );
};

export default StatsCard;
