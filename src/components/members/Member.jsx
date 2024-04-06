import React, { useMemo, useState } from "react";
import { getMemberColumns } from "../../helpers/dataTableColumns";
import DataTable from "../common/data-table/DataTable";
import Label from "../common/Label";
import { BsPersonGear } from "react-icons/bs";
import AppModal from "../AppModal";
import { FaPlus } from "react-icons/fa";
import MemberSearchAndFilter from "./MemberSearchAndFilter";
import { RiMailSendLine } from "react-icons/ri";

const Member = () => {
  const tableColumns = useMemo(() => getMemberColumns(), []);
  const [addEditMemberMeta, setAddEditMemberMeta] = useState(false);

  const dummyMembers = [
    {
      _id: 231243,
      name: "Alice Smith",
      role: "Site Moderator",
      createdAt: "2024/09/15",
      status: "Approved",
      quantity: "23 gram",
    },
    {
      _id: 2243123,
      name: "John Doe",
      role: "Club Owner",
      createdAt: "2024/11/03",
      status: "Pending",
      quantity: "23 gram",
    },
    {
      _id: 231323,
      name: "Emily Johnson",
      role: "Club Moderator",
      createdAt: "2024/08/21",
      status: "Approved",
      quantity: "23 gram",
    },
    {
      _id: 235123,
      name: "Michael Brown",
      role: "Admin",
      createdAt: "2024/07/17",
      status: "Pending",
      quantity: "213 gram",
    },
    {
      _id: 231263,
      name: "Sophia Martinez",
      role: "Club Member",
      createdAt: "2024/12/05",
      status: "Approved",
      quantity: "423 gram",
    },
    {
      _id: 236123,
      name: "Liam Wilson",
      role: "Club Moderator",
      createdAt: "2024/06/12",
      status: "Denied",
      quantity: "232 gram",
    },
    {
      _id: 2312663,
      name: "Emma Taylor",
      role: "Club Member",
      createdAt: "2024/05/28",
      status: "Denied",
      quantity: "842 gram",
    },
    {
      _id: 2314423,
      name: "Noah Anderson",
      role: "Club Owner",
      createdAt: "2024/04/02",
      status: "Pending",
      quantity: "982 gram",
    },
    {
      _id: 2312423,
      name: "Olivia Garcia",
      role: "Club Moderator",
      createdAt: "2024/03/19",
      status: "Approved",
      quantity: "623 gram",
    },
  ];

  return (
    <div className="w-[calc(100vw-320px)] p-2">
      <div className="flex gap-2 items-center">
        <Label
          label={"Members"}
          size={"2xl"}
          className={"mb-2"}
          icon={BsPersonGear}
        />
        
        <RiMailSendLine />
      </div>
      <MemberSearchAndFilter />
      <DataTable
        rowKey={"_id"}
        columns={tableColumns}
        data={dummyMembers}
        bottomOffset={300}
        onRowClick={() => {}}
        allowFilter={false}
        allowSort={false}
      />
      <AppModal
        show={addEditMemberMeta}
        onHide={() => setAddEditMemberMeta(false)}
        TitleIcon={FaPlus}
        title={"Add New Order"}
      ></AppModal>
    </div>
  );
};

export default Member;
