import { AiOutlineClose } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import Progressbar from "../components/common/Progressbar";



export const getClubColumns = (onDeleteClubClick) => {
  const allLabels = [
    {
      key: "logo",
      label: "Logo",
      cellRenderer: (club) => (
        <div className="flex justify-center gap-2">
         <img src={club?.logo} alt="club-logo" className="rounded-md h-9 w-12 cursor-pointer" />
        </div>
      ),
    },
    {
      key: "name",
      label: "Name",
      type: "text",
      align: "left",
      width: 100,
    },
    {
      key: "location",
      label: "Location",
      align: "left",
      width: 60,
    },
    {
      key: "createdAt",
      label: "Joined At",
      type: "date",
      align: "left",
      width: 80,
    },
    {
      key: "members",
      label: "Members",
      type: "text",
      align: "left",
      width: 60,
    },
    {
      key: "view",
      label: "Actions",
      cellRenderer: (club) => (
        <div className="flex justify-center gap-2">
          <FaRegTrashAlt
            className="text-danger cursor-pointer"
            onClick={() => onDeleteClubClick(club)}
          />
        </div>
      ),
    },
  ];

  return allLabels;
};

export const getMemberColumns = (onDeleteMemberClick, handleStatusChange) => {
  const allLabels = [
    {
      key: "name",
      label: "Name",
      type: "text",
      align: "left",
      width: 100,
    },
    {
      key: "role",
      label: "Role",
      align: "left",
      width: 60,
    },
    {
      key: "createdAt",
      label: "Joined At",
      type: "date",
      align: "left",
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
            ? "red"
            : "red";
        return (
          <div
            className={`inline-flex h-6 rounded-md  text-xs font-medium text-${color}-800 bg-${color}-100`}
          >
            <div className="flex items-center mx-2">{member.status}</div>
            {status === "Pending" && (
              <div
                title="Decline"
                onClick={() => handleStatusChange(member, "Declined")}
                className="bg-red-100 grow flex items-center hover:bg-red-300 text-red-800  px-1 "
              >
                <AiOutlineClose />
              </div>
            )}
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
      cellRenderer: (member) => {
        const { quantity } = member;
        return (
          <div className="flex justify-center items-center">
            <div className="w-3/4">
              <Progressbar
                variant="purple-300"
                value={quantity}
                text={`${quantity}/70 gm`}
              />
            </div>
          </div>
        );
      },
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

export const getOrderColumns = (handleStatusChange) => {
  const allLabels = [
    {
      key: "orderedBy",
      label: "Ordered By",
      type: "text",
      width: 100,
    },
    {
      key: "orderCount",
      label: "Item Count",
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
      cellRenderer: (member) => {
        const { status } = member;
        const color =
          status === "Finished" ? "green" : status === "New" ? "red" : "red";
        return (
          <div
            className={`inline-flex h-6 rounded-md  text-xs font-medium text-${color}-800 bg-${color}-100`}
          >
            <div className="flex items-center mx-2">{member.status}</div>
            {status === "New" && (
              <div
                title="Decline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatusChange(member, "Cancelled");
                }}
                className="bg-red-100 grow flex items-center hover:bg-red-300 text-red-800  px-1 "
              >
                <AiOutlineClose />
              </div>
            )}
            {status === "New" && (
              <div
                title="Approve"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatusChange(member, "Finished");
                }}
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
      key: "orderDate",
      label: "Ordered Date",
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
