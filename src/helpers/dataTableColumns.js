import { AiOutlineClose } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import Progressbar from "../components/common/Progressbar";
import TextDropdownToggle from "../components/common/TextDropdownToggle";
import { ALL_MEMBER_STATUS, ALL_ORDER_STATUS } from "./constants";
import { isAdmin } from "./session";

const MemberStatusColor = {
  Active: "green",
  Suspended: "yellow",
  Terminated: "red",
};

export const getClubColumns = (onDeleteClubClick) => {
  const allLabels = [
    {
      key: "logo",
      label: "Logo",
      cellRenderer: (club) => (
        <div className="flex justify-center gap-2">
          <img
            src={club?.logo}
            alt="club-logo"
            className="rounded-md h-9 w-12 cursor-pointer"
          />
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

export const getMemberColumns = (
  onDeleteMemberClick,
  handleStatusChange,
  user
) => {
  let { role } = user;
  const allLabels = [
    {
      key: "image",
      label: "Image",
      cellRenderer: (club) => (
        <div className="flex justify-center gap-2">
          <img
            src={club?.image}
            alt="member-profile"
            className="rounded-md h-9 w-12 cursor-pointer"
          />
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
    isAdmin(role) && {
      key: "club",
      label: "Club",
      cellRenderer: (member) => {
        return <h6>{member?.club?.name}</h6>;
      },
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
        const color = MemberStatusColor[status];

        return (
          <TextDropdownToggle
            options={ALL_MEMBER_STATUS}
            value={status}
            onOptionClick={(status) => handleStatusChange(member, status)}
          />
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
      cellRenderer: (order) => {
        return <h6>{order?.items?.length}</h6>;
      },
      width: 50,
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

        return (
          <TextDropdownToggle
            options={ALL_ORDER_STATUS}
            value={status}
            onOptionClick={(status) => handleStatusChange(order, status)}
          />
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
