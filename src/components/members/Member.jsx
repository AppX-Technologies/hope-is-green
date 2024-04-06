import React, { useMemo } from "react";
import { getMemberColumns } from "../../helpers/dataTableColumns";
import DataTable from "../common/data-table/DataTable";
import Label from "../common/Label";
import { BsPersonGear } from "react-icons/bs";

const Member = () => {
  const tableColumns = useMemo(() => getMemberColumns(), []);
  const dummyMembers = [
    {
      _id: 231243,
      name: "Alice Smith",
      role: "Manager",
      createdAt: "2024/09/15",
      status: "Accepted",
      quantity: "23 gram",
    },
    {
      _id: 2243123,
      name: "John Doe",
      role: "Employee",
      createdAt: "2024/11/03",
      status: "Pending",
      quantity: "23 gram",
    },
    {
      _id: 231323,
      name: "Emily Johnson",
      role: "Supervisor",
      createdAt: "2024/08/21",
      status: "Accepted",
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
      role: "Developer",
      createdAt: "2024/12/05",
      status: "Accepted",
      quantity: "423 gram",
    },
    {
      _id: 236123,
      name: "Liam Wilson",
      role: "Designer",
      createdAt: "2024/06/12",
      status: "Pending",
      quantity: "232 gram",
    },
    {
      _id: 2312663,
      name: "Emma Taylor",
      role: "Assistant",
      createdAt: "2024/05/28",
      status: "Rejected",
      quantity: "842 gram",
    },
    {
      _id: 2314423,
      name: "Noah Anderson",
      role: "Analyst",
      createdAt: "2024/04/02",
      status: "Pending",
      quantity: "982 gram",
    },
    {
      _id: 2312423,
      name: "Olivia Garcia",
      role: "Coordinator",
      createdAt: "2024/03/19",
      status: "Accepted",
      quantity: "623 gram",
    },
  ];

  return (
    <div className="w-[calc(100vw-320px)] p-2">
      <Label
        label={"Members"}
        size={"2xl"}
        className={"mb-2"}
        icon={BsPersonGear}
      />
      <DataTable
        rowKey={"_id"}
        columns={tableColumns}
        data={dummyMembers}
        bottomOffset={300}
        onRowClick={() => {}}
        allowFilter={false}
        allowSort={false}
      />
    </div>
  );
};

export default Member;
