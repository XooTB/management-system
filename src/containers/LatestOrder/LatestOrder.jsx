import React from "react";
import { useAtom } from "jotai";
import { latestOrderAtom } from "../../atoms/orderAtom";
import OrderRow from "../../components/OrderRow/OrderRow";

const LatestOrder = () => {
  const [latestOrder, setLatestOrder] = useAtom(latestOrderAtom);
  console.log(latestOrder);
  return (
    <div>
      <h3 className="">LatestOrder</h3>
      {latestOrder && <OrderRow order={latestOrder.order} />}
    </div>
  );
};

export default LatestOrder;
