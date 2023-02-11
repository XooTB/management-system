import React from "react";

const OrderRow = ({ order }) => {
  return (
    <div className="flex bg-slate-400 h-10 font-serif">
      <div className="pl-10">{order.details.factoryName}</div>
      <div className="pl-10">{order.details.styleNumber}</div>
      <div className="pl-10">{order.details.color}</div>
      <div className="pl-10">{order.details.quantity}</div>
    </div>
  );
};

export default OrderRow;
