import React from "react";
import Label from "../common/Label";
import { BiCart } from "react-icons/bi";

const OrderDetails = ({ order }) => {
  return (
    <div className="p-2 m-2 border">
      <Label icon={BiCart} label={"Order details"} size="sm" iconSize={"lg"} />
      <div className="mt-2 ps-2">
        <table className="w-1/2">
          <thead className="border-b border-primary">
            <tr className="h-8">
              <th className="text-left">Product</th>
              <th className="text-left">Grams</th>
              <th className="text-left">Price</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Total Value</th>
            </tr>
          </thead>
          <tbody>
            {order?.items?.map((item, index) => {
              return (
                <tr key={index} className="h-8 cursor-pointer">
                  <td className="text-left">{item.product}</td>
                  <td className="text-left">{item.grams} gram</td>
                  <td className="text-left">${item.price}</td>
                  <td className="text-left">{item.quantity}</td>
                  <td className="text-left">${item.price * item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="border-t border-primary">
            <tr>
              <td colSpan={3} />

              <td className="text-left font-bold">Total</td>
              <td className="text-left font-bold">
                ${order.items.reduce((a, b) => a + b.price * b.quantity, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
