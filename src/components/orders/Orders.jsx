import React, { useMemo, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { getOrderColumns } from "../../helpers/dataTableColumns";
import Label from "../common/Label";
import DataTable from "../common/data-table/DataTable";
import OrderSearchAndFilter from "./OrderSearchAndFilter";
import OrderDetails from "./OrderDetails";
import { toast } from "react-toastify";
const scrollToOrderRow = (contactId) => {
  setTimeout(() => {
    const trElement = document.getElementById(`data-row-${contactId}`);
    const containerElement = document.getElementById("table-container"); // Replace 'your-container-id' with the actual ID of your container element
    const offset = -80; // Adjust this value based on the height of your fixed element

    if (trElement && containerElement) {
      containerElement.scroll({
        top: trElement.offsetTop + offset,
        behavior: "smooth",
      });
    }
  }, 100);
};
const Orders = () => {
  const [activeOrder, setActiveOrder] = useState();
  const dummyOrders = useMemo(
    () => [
      {
        _id: 231153223,
        orderedBy: "Andy Brown",
        itemCount: 3,
        items: [
          {
            product: "Ak 47",
            grams: 55,
            price: 102,
            quantity: 52,
          },
          {
            product: "Purple Haze",
            grams: 15,
            price: 10,
            quantity: 2,
          },
          {
            product: "Brown Leaf",
            grams: 15,
            price: 108,
            quantity: 28,
          },
        ],
        totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
        totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
        status: "New",
        orderDate: "2024/12/12",
        lastUpdated: "2024/11/24",
      },
      {
        _id: 2155323123,
        orderedBy: "Emma Davis",
        itemCount: 23,
        items: [
          {
            product: "Ak 47",
            grams: 55,
            price: 102,
            quantity: 52,
          },
          {
            product: "Purple Haze",
            grams: 15,
            price: 10,
            quantity: 2,
          },
          {
            product: "Brown Leaf",
            grams: 15,
            price: 108,
            quantity: 28,
          },
        ],
        totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
        totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
        status: "Cancelled",
        orderDate: "2024/08/22",
        lastUpdated: "2024/12/04",
      },
      {
        _id: 231523123,
        orderedBy: "Michael Smith",
        itemCount: 5,
        items: [
          {
            product: "Ak 47",
            grams: 55,
            price: 102,
            quantity: 52,
          },
          {
            product: "Purple Haze",
            grams: 15,
            price: 10,
            quantity: 2,
          },
          {
            product: "Brown Leaf",
            grams: 15,
            price: 108,
            quantity: 28,
          },
        ],
        totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
        totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
        status: "New",
        orderDate: "2024/02/11",
        lastUpdated: "2024/11/05",
      },
      {
        _id: 2312352323,
        orderedBy: "Sophia Williams",
        itemCount: 6,
        items: [
          {
            product: "Ak 47",
            grams: 55,
            price: 102,
            quantity: 52,
          },
          {
            product: "Purple Haze",
            grams: 15,
            price: 10,
            quantity: 2,
          },
          {
            product: "Brown Leaf",
            grams: 15,
            price: 108,
            quantity: 28,
          },
        ],
        totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
        totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
        status: "Finished",
        orderDate: "2024/05/12",
        lastUpdated: "2024/06/24",
      },
      {
        _id: 231211123,
        orderedBy: "William by",
        itemCount: 3,
        items: [
          {
            product: "Ak 47",
            grams: 55,
            price: 102,
            quantity: 52,
          },
          {
            product: "Purple Haze",
            grams: 15,
            price: 10,
            quantity: 2,
          },
          {
            product: "Brown Leaf",
            grams: 15,
            price: 108,
            quantity: 28,
          },
        ],
        totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
        totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
        status: "Cancelled",
        orderDate: "2024/07/22",
        lastUpdated: "2024/03/27",
      },
      {
        _id: 2312433,
        orderedBy: "Olivia Johnson",
        itemCount: 1,
        items: [
          {
            product: "Ak 47",
            grams: 55,
            price: 102,
            quantity: 52,
          },
          {
            product: "Purple Haze",
            grams: 15,
            price: 10,
            quantity: 2,
          },
          {
            product: "Brown Leaf",
            grams: 15,
            price: 108,
            quantity: 28,
          },
        ],
        totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
        totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
        status: "Cancelled",
        orderDate: "2024/11/17",
        lastUpdated: "2024/09/30",
      },
      {
        _id: 2312133,
        orderedBy: "James by",
        itemCount: 65,
        items: [
          {
            product: "Ak 47",
            grams: 55,
            price: 102,
            quantity: 52,
          },
          {
            product: "Purple Haze",
            grams: 15,
            price: 10,
            quantity: 2,
          },
          {
            product: "Brown Leaf",
            grams: 15,
            price: 108,
            quantity: 28,
          },
        ],
        totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
        totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
        status: "Finished",
        orderDate: "2024/01/10",
        lastUpdated: "2024/04/12",
      },
      {
        _id: 231235551,
        orderedBy: "Brown Williams",
        itemCount: 32,
        items: [
          {
            product: "Ak 47",
            grams: 55,
            price: 102,
            quantity: 52,
          },
          {
            product: "Purple Haze",
            grams: 15,
            price: 10,
            quantity: 2,
          },
          {
            product: "Brown Leaf",
            grams: 15,
            price: 108,
            quantity: 28,
          },
        ],
        totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
        totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
        status: "Cancelled",
        orderDate: "2024/03/04",
        lastUpdated: "2024/08/25",
      },
    ],
    []
  );
  const [orders, setOrders] = useState(dummyOrders);

  const handleStatusChange = (order, status) => {
    setOrders(orders.map((m) => (m._id === order._id ? { ...m, status } : m)));
  };
  const tableColumns = useMemo(
    () => getOrderColumns(handleStatusChange),
    [handleStatusChange]
  );
  const onOrderClick = (order) => {
    setActiveOrder(activeOrder?._id === order._id ? null : order);
    if (activeOrder?._id !== order._id) {
      scrollToOrderRow(order._id);
    }
  };

  return (
    <div className="w-full">
      <Label label={"Orders"} size={"xl"} className={"font-bold"} />

      <div className="bg-white p-4 rounded shadow-md mt-4 w-full">
        <OrderSearchAndFilter />
        <DataTable
          rowKey={"_id"}
          columns={tableColumns}
          data={orders}
          bottomOffset={300}
          onRowClick={onOrderClick}
          expandedRowKeys={[activeOrder?._id].filter(Boolean)}
          renderExpandedRow={() => <OrderDetails order={activeOrder} />}
          allowFilter={false}
          allowSort={false}
        />
      </div>
    </div>
  );
};

export default Orders;
