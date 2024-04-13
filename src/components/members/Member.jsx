import React, { useMemo, useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { getMemberColumns } from "../../helpers/dataTableColumns";
import AlertModal from "../common/AlertModal";
import Button from "../common/Button";
import Label from "../common/Label";
import DataTable from "../common/data-table/DataTable";
import InviteMemberModal from "./InviteMemberModal";
import MemberSearchAndFilter from "./MemberSearchAndFilter";
const dummyMembers = [
  {
    _id: 231243,
    name: "Alice Smith",
    role: "Site Moderator",
    createdAt: "2024/09/15",
    status: "Active",
    image: `https://source.unsplash.com/random?1`,
    quantity: 23,
  },
  {
    _id: 2243123,
    name: "John Doe",
    role: "Club Owner",
    createdAt: "2024/11/03",
    status: "Suspended",
    image: `https://source.unsplash.com/random?2`,
    quantity: 53,
  },
  {
    _id: 231323,
    name: "Emily Johnson",
    role: "Club Moderator",
    createdAt: "2024/08/21",
    status: "Active",
    image: `https://source.unsplash.com/random?3`,
    quantity: 67,
  },
  {
    _id: 235123,
    name: "Michael Brown",
    role: "Admin",
    createdAt: "2024/07/17",
    status: "Suspended",
    image: `https://source.unsplash.com/random?4`,
    quantity: 34,
  },
  {
    _id: 231263,
    name: "Sophia Martinez",
    role: "Club Member",
    createdAt: "2024/12/05",
    status: "Active",
    image: `https://source.unsplash.com/random?5`,
    quantity: 64,
  },
  {
    _id: 236123,
    name: "Liam Wilson",
    role: "Club Moderator",
    createdAt: "2024/06/12",
    status: "Terminated",
    image: `https://source.unsplash.com/random?6`,
    quantity: 41,
  },
  {
    _id: 2312663,
    name: "Emma Taylor",
    role: "Club Member",
    createdAt: "2024/05/28",
    status: "Terminated",
    image: `https://source.unsplash.com/random?7`,
    quantity: 23,
  },
  {
    _id: 2314423,
    name: "Noah Anderson",
    role: "Club Owner",
    createdAt: "2024/04/02",
    status: "Suspended",
    image: `https://source.unsplash.com/random?8`,
    quantity: 44,
  },
  {
    _id: 2312423,
    name: "Olivia Garcia",
    role: "Club Moderator",
    createdAt: "2024/03/19",
    status: "Active",
    image: `https://source.unsplash.com/random?9`,
    quantity: 62,
  },
];
const Member = () => {
  const [members, setMembers] = useState(dummyMembers);
  const [addEditMemberMeta, setAddEditMemberMeta] = useState(false);
  const [deleteMemberMeta, setDeleteMemberMeta] = useState(null);

  const onDeleteMemberClick = () => {
    setMembers(members.filter((m) => m._id !== deleteMemberMeta._id));
    toast.success(`${deleteMemberMeta?.name} has been deleted`);
    setDeleteMemberMeta(null);
  };

  const handleStatusChange = (member, status) => {
    setMembers(
      members.map((m) => (m._id === member._id ? { ...m, status } : m))
    );
    toast.success(`${member?.name}'s status has been changed to ${status}`);
  };

  const tableColumns = useMemo(
    () => getMemberColumns(setDeleteMemberMeta, handleStatusChange),
    [setDeleteMemberMeta, handleStatusChange]
  );

  return (
    <div className="w-full">
      <div className="flex gap-2 items-center">
        <Label label={"Members"} size={"xl"} className={"font-bold"} />
        <Button
          rightIcon={RiMailSendLine}
          title={"Invite"}
          variant="primary"
          size="sm"
          onClick={() => setAddEditMemberMeta(true)}
        />
      </div>

      <div className="bg-white p-4 rounded shadow-md mt-4 w-full">
        <MemberSearchAndFilter />
        <DataTable
          rowKey={"_id"}
          columns={tableColumns}
          data={members}
          bottomOffset={300}
          onRowClick={() => {}}
          allowFilter={false}
          allowSort={false}
        />
      </div>
      <InviteMemberModal
        show={addEditMemberMeta}
        onHide={() => setAddEditMemberMeta(false)}
      />
      <AlertModal
        onContinue={onDeleteMemberClick}
        show={Boolean(deleteMemberMeta)}
        text={
          <span>
            Are you sure you want to delete <b>{deleteMemberMeta?.name}</b>?
          </span>
        }
        onHide={() => setDeleteMemberMeta(null)}
      />
    </div>
  );
};

export default Member;
