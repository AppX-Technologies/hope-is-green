import React, { useMemo, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { toast } from "react-toastify";
import {
  getClubColumns,
  getMemberColumns,
} from "../../helpers/dataTableColumns";
import AlertModal from "../common/AlertModal";
import Button from "../common/Button";
import Label from "../common/Label";
import DataTable from "../common/data-table/DataTable";
import ClubSearchAndFilter from "./ClubSearchAndFilter";
import { useNavigate } from "react-router-dom";
const dummyClubs = [
  {
    _id: 1,
    name: "Golden Lions United",
    logo: `https://source.unsplash.com/random?1`,
    location: "Brandenburg Gate, Berlin",
    members: 416,
    createdAt: "2024/09/15",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    _id: 2,
    name: "Royal Falcons SC",
    logo: `https://source.unsplash.com/random?2`,
    location: "Brandenburg Gate, Berlin",
    members: 56,
    createdAt: "2024/06/28",
    description: "Consectetur adipiscing elit.",
  },
  {
    _id: 3,
    name: "Dynamic Dragons FC",
    logo: `https://source.unsplash.com/random?3`,
    location: "Neuschwanstein Castle, Schwangau",
    members: 46,
    createdAt: "2024/12/23",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    _id: 4,
    name: "Eagle Talons FC",
    logo: `https://source.unsplash.com/random?4`,
    location: "Cologne Cathedral, Cologne",
    members: 466,
    createdAt: "2024/11/16",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    _id: 5,
    name: "Phoenix Rising SC",
    logo: `https://source.unsplash.com/random?5`,
    location: "Zugspitze, Bavaria",
    members: 129,
    createdAt: "2024/04/04",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    _id: 6,
    name: "Titan Titans FC",
    logo: `https://source.unsplash.com/random?6`,
    location: "Neuschwanstein Castle, Schwangau",
    members: 216,
    createdAt: "2024/09/23",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    _id: 7,
    name: "Mystic Mavericks SC",
    logo: `https://source.unsplash.com/random?7`,
    location: "Heidelberg Castle, Heidelberg",
    members: 46,
    createdAt: "2024/07/25",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    _id: 8,
    name: "Galactic Guardians FC",
    logo: `https://source.unsplash.com/random?8`,
    location: "Heidelberg Castle, Heidelberg",
    members: 98,
    createdAt: "2024/12/30",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    _id: 9,
    name: "Diamond Dolphins SC",
    logo: `https://source.unsplash.com/random?9`,
    location: "Neuschwanstein Castle, Schwangau",
    members: 75,
    createdAt: "2024/11/09",
    description:
      "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    _id: 10,
    name: "Supernova Spartans FC",
    logo: `https://source.unsplash.com/random?10`,
    location: "Zugspitze, Bavaria",
    members: 571,
    createdAt: "2024/10/28",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
];
const Clubs = () => {
  const navigate = useNavigate();
  const [clubs, setClubs] = useState(dummyClubs);
  const [addEditClubMeta, setAddEditClubMeta] = useState(false);
  const [deleteClubMeta, setDeleteClubMeta] = useState(null);

  const handleDeleteClub = () => {
    setClubs(clubs.filter((m) => m._id !== deleteClubMeta._id));
    toast.success(`${deleteClubMeta?.name} has been deleted successfully`);
    setDeleteClubMeta(null);
  };

  const onDeleteClubClick = (club) => {
    setDeleteClubMeta(club);
  };

  const tableColumns = useMemo(
    () => getClubColumns(onDeleteClubClick),
    [onDeleteClubClick]
  );

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-2 items-center">
        <Label label={"Clubs"} size={"xl"} className={"font-bold"} />
        <Button
          rightIcon={BiPlus}
          text={"New Club"}
          variant="primary"
          size="sm"
          onClick={() => setAddEditClubMeta(true)}
        />
      </div>

      <div className="bg-white grow p-4 rounded shadow-md mt-4 w-full h-100">
        <ClubSearchAndFilter />
        <DataTable
          rowKey={"_id"}
          columns={tableColumns}
          data={clubs}
          bottomOffset={300}
          onRowClick={(row) => navigate(`${row._id}`, { state: row })}
          allowFilter={false}
          allowSort={false}
        />
      </div>

      <AlertModal
        onContinue={handleDeleteClub}
        show={Boolean(deleteClubMeta)}
        text={
          <span>
            Are you sure you want to delete <b>{deleteClubMeta?.name}</b>?
          </span>
        }
        onHide={() => setDeleteClubMeta(null)}
      />
    </div>
  );
};

export default Clubs;
