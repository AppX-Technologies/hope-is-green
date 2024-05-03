import { CiSettings } from "react-icons/ci";
import { FaFileAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import Tabs from "../Tabs";
import GeneralInfo from "./GeneralInfo.jsx";
import { ClubLeagalSettings } from "./ClubLeagalSettings";
import { BoardMemeberSettings } from "./BoardMemberSettings";
import Label from "../common/Label.jsx";

export function ClubSettings() {
  const tabs = [
    { title: "General Info", icon: <CiSettings />, content: GeneralInfo },
    { title: "Leagal", icon: <GiCheckMark />, content: ClubLeagalSettings },
    {
      title: "Board member",
      icon: <FaFileAlt />,
      content: BoardMemeberSettings,
    },
  ];
  return (
    <div className="">
      <Label label={"Club Settings"} size={"xl"} className={"font-bold"} />
      <div className="mt-4 h-full bg-white shadow p-3">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
