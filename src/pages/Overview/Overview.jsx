import React from "react";
import StatsCard from "../../components/StatsCard/StatsCard";
import LatestOrder from "../../containers/LatestOrder/LatestOrder";
import "./Overview.scss";

const OverView = () => {
  return (
    <div className="overview bg-blue-200 h-full">
      <div className="statsArea w-full flex">
        <StatsCard
          cardName="Sales"
          cardDesc="Total sales this week"
          cardInfo="400,000 BDT"
          iconName="dollarSign"
        />
        <StatsCard
          cardName="New Orders"
          cardDesc="New orders today"
          cardInfo="400 Orders"
          iconName="clipBoard"
        />
        <StatsCard
          cardName="Finished Orders"
          cardDesc="Orders finished today"
          cardInfo="900 Orders"
          iconName="checkCircle"
        />
        <StatsCard
          cardName="Finished Orders"
          cardDesc="Orders finished today"
          cardInfo="900 Orders"
          iconName="checkCircle"
        />
      </div>
    </div>
  );
};

export default OverView;
