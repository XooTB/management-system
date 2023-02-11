import React from "react";
import { useState, useRef } from "react";
import { orderAtom } from "../../atoms/orderAtom";
import { useAtom } from "jotai";
import { useAddOrder } from "../../hooks/useAddOrder";

const AddForm = () => {
  // refs
  const rateRef = useRef();
  const quantityRef = useRef();

  //states and atoms
  const [total, setTotal] = useState();
  const [order, setOrder] = useAtom(orderAtom);
  const { add, isLoading, error } = useAddOrder();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let orderDetails = {
      factoryName: e.target.factoryName.value,
      styleNumber: e.target.styleNumber.value,
      color: e.target.color.value,
      quantity: e.target.quantity.value,
      rate: e.target.rate.value,
      total: e.target.total.value,
    };

    let shippingDetails = {
      driverName: e.target.driverName.value,
      delivery_man: e.target.deliveryMan.value,
      van_number: e.target.vanNumber.value,
      orderStatus: "Running",
    };

    await add(orderDetails, shippingDetails);
  };

  const calculateTotal = (e) => {
    e.preventDefault();
    setTotal(rateRef.current.value * quantityRef.current.value);
  };

  return (
    <form
      className="w-4/5 font-mono bg-white m-auto mb-20 rounded-xl"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-full p-4">
        <label>Factory Name: </label>
        <input
          type="text"
          className="border border-slate-600 rounded-xl pl-3"
          name="factoryName"
          required
        />
      </div>
      <div className="flex flex-col w-full p-4 pt-0">
        <label>Style Number: </label>
        <input
          type="text"
          className="border border-slate-600 rounded-xl pl-3"
          name="styleNumber"
          required
        />
      </div>
      <div className="flex w-full">
        <div className="flex flex-col p-4 pt-0 w-1/2">
          <label>Color </label>
          <input
            type="text"
            className="border border-slate-600 rounded-xl w-full pl-3"
            name="color"
            required
          />
        </div>
        <div className="flex flex-col p-4 pt-0 w-1/2">
          <label>Quantity </label>
          <input
            type="number"
            className="border border-slate-600 rounded-xl w-full pl-3"
            name="quantity"
            ref={quantityRef}
            onChange={calculateTotal}
            required
          />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col p-4 pt-0 w-1/2">
          <label>Rate </label>
          <input
            type="number"
            className="border border-slate-600 rounded-xl w-full pl-3"
            name="rate"
            ref={rateRef}
            onChange={calculateTotal}
            required
          />
        </div>
        <div className="flex flex-col p-4 pt-0 w-1/2">
          <label>Total </label>
          <input
            type="number"
            className="border border-slate-600 rounded-xl w-full pl-3"
            value={total}
            name="total"
            readOnly
            required
          />
        </div>
      </div>
      <div className="flex flex-col w-full p-4 pt-0">
        <label>Van Number: </label>
        <input
          type="text"
          className="border border-slate-600 rounded-xl pl-3"
          name="vanNumber"
          required
        />
      </div>
      <div className="flex w-full">
        <div className="flex flex-col p-4 pt-0 w-1/2">
          <label>Driver </label>
          <input
            type="text"
            className="border border-slate-600 rounded-xl w-full pl-3"
            name="driverName"
            required
          />
        </div>
        <div className="flex flex-col p-4 pt-0 w-1/2">
          <label>Delivery Man </label>
          <input
            type="text"
            className="border border-slate-600 rounded-xl w-full pl-3"
            name="deliveryMan"
            required
          />
        </div>
      </div>
      <div className="flex">
        <button
          className="bg-slate-600 m-4 mb-2 rounded-xl hover:bg-slate-400  w-full pl-3"
          type="submit"
        >
          Add
        </button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
};

export default AddForm;
