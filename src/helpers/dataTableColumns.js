import { FaRegTrashAlt } from "react-icons/fa";

export const getMemberColumns = (onDeleteProductClick) => {
  const allLabels = [
    {
      key: "name",
      label: "Name",
      type: "text",
      width: 100,
    },
    {
      key: "role",
      label: "Role",
      width: 60,
    },
    {
      key: "createdAt",
      label: "Joined At",
      type: "date",
      width: 80,
    },
    {
      key: "status",
      label: "Status",
      cellRenderer: (order) => {
        const { status } = order;
        const color =
          status === "Accepted"
            ? "green"
            : status === "Pending"
            ? "yellow"
            : "red";
        return (
          <span
            className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium text-${color}-800 bg-${color}-100`}
          >
            {order.status}
          </span>
        );
      },
      width: 80,
    },
    {
      key: "quantity",
      label: "Quantity Ordered",
      type: "text",
      width: 80,
    },

    {
      key: "view",
      label: "Actions",
      cellRenderer: (product) => (
        <div className="flex justify-center gap-2">
          <FaRegTrashAlt
            className="text-danger cursor-pointer"
            onClick={() => onDeleteProductClick(product)}
          />
        </div>
      ),
    },
  ];

  return allLabels;
};

export const getOrderColumns = (onDeleteProductClick) => {
  const allLabels = [
    {
      key: "item",
      label: "Item",
      type: "text",
      width: 100,
    },
    {
      key: "totalPrice",
      label: "Price",
      width: 60,
    },
    {
      key: "totalWeight",
      label: "Weight",
      type: "text",
      width: 80,
    },
    {
      key: "status",
      label: "Status",
      cellRenderer: (order) => {
        const { status } = order;
        const color =
          status === "Success"
            ? "green"
            : status === "In Process"
            ? "yellow"
            : "red";
        return (
          <span
            className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium text-${color}-800 bg-${color}-100`}
          >
            {order.status}
          </span>
        );
      },
      width: 80,
    },
    {
      key: "orderDate",
      label: "Last Updated",
      type: "date",
      width: 80,
    },
    {
      key: "lastUpdated",
      label: "Last Updated",
      type: "date",
      width: 80,
    },
  ];

  return allLabels;
};
