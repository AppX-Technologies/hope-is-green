import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import FloatingButton from "../common/FloatingButton";
import { FaPlus } from "react-icons/fa";
import AppModal from "../AppModal";
import InputField from "../common/form-controls/InputField";

const OrderCard = ({ item, quantity, itemNumber, status, weight }) => {
    return (
      <div className="bg-white text-dark py-6 px-8 flex items-center gap-4 w-full max-w-2xl rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h6 className="text-base font-semibold">{itemNumber}.</h6>
        <div className="flex-1">
          <h5 className="font-semibold text-lg">{item}</h5>
          <p className="text-secondary text-sm mt-1">{weight} gram</p>
        </div>
        <span
          className={`px-4 py-2 text-sm rounded-full text-white ${
            status === "Pending" ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {status}
        </span>
        <h6 className="font-bold text-lg text-right">${quantity}</h6>
      </div>
    );
  };
  

const Orders = () => {
  const [addEditOrderMeta, setAddEditOrderMeta] = useState(null);
  const orders = [
    {
      item: "Purple Haze",
      quantity: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
      status: "Pending",
      lastUpdated: "16/08/2024",
      weight: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
    },
    {
      item: "OG Kush",
      quantity: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
      status: "In Process",
      lastUpdated: "17/08/2024",
      weight: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
    },
    {
      item: "Blue Dream",
      quantity: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
      status: "In Process",
      lastUpdated: "17/08/2024",
      weight: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
    },
    {
      item: "White Widow",
      quantity: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
      status: "In Process",
      lastUpdated: "17/08/2024",
      weight: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
    },
    {
      item: "Sour Diesel",
      quantity: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
      status: "In Process",
      lastUpdated: "17/08/2024",
      weight: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
    },
    {
      item: "Girl Scout Cookies",
      quantity: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
      status: "In Process",
      lastUpdated: "17/08/2024",
      weight: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
    },
    {
      item: "Granddaddy Purple",
      quantity: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
      status: "In Process",
      lastUpdated: "17/08/2024",
      weight: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
    },
    {
      item: "AK-47",
      quantity: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
      status: "In Process",
      lastUpdated: "17/08/2024",
      weight: Math.floor(Math.random() * (70 - 5 + 1)) + 5,
    },
  ];

  return (
    <div className="py-2">
      <div className="border p-5  text-dark rounded-lg">
        <div className="flex items-center gap-2">
          <BsCart4 size={24} />
          <h6 className="text-xl font-medium">Your Orders</h6>
        </div>
        <div className="p-4 flex flex-col gap-4 mt-3">
          {orders.map((order, index) => (
            <OrderCard key={order.item} {...order} itemNumber={index + 1} />
          ))}
        </div>
      </div>
      <FloatingButton
        className="mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out"
        text={"New Order"}
        icon={<FaPlus size={16} />}
        onClick={() => setAddEditOrderMeta(true)}
      />
      <AppModal
        show={Boolean(addEditOrderMeta)}
        onHide={() => setAddEditOrderMeta(null)}
      >
        <div className="flex gap-2">
          <InputField placeholder={"Enter Order name"} label={"Order Name"} />
        </div>
      </AppModal>
    </div>
  );
};

export default Orders;
