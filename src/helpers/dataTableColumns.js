import { AiOutlineClose } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoCheck } from "react-icons/go";

export const getMemberColumns = (onDeleteMemberClick, handleStatusChange) => {
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
      cellRenderer: (member) => {
        const { status } = member;
        const color =
          status === "Approved"
            ? "green"
            : status === "Pending"
            ? "amber"
            : "red";
        return (
          <div
            className={`inline-flex h-6 rounded-md  text-xs font-medium text-${color}-800 bg-${color}-100`}
          >
            {status === "Pending" && (
              <div
                title="Decline"
                onClick={() => handleStatusChange(member, "Declined")}
                className="bg-red-100 grow flex items-center hover:bg-red-300 text-red-800  px-1 rounded-l-md"
              >
                <AiOutlineClose />
              </div>
            )}
            <div className="flex items-center mx-2">{member.status}</div>
            {status === "Pending" && (
              <div
                title="Approve"
                onClick={() => handleStatusChange(member, "Approved")}
                className="bg-green-100 flex items-center text-green-800 hover:bg-green-300 px-1 rounded-r-md"
              >
                <GoCheck />
              </div>
            )}
          </div>
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
      cellRenderer: (member) => (
        <div className="flex justify-center gap-2">
          <FaRegTrashAlt
            className="text-danger cursor-pointer"
            onClick={() => onDeleteMemberClick(member)}
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
