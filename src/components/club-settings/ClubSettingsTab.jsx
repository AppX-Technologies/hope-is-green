import { CiSettings } from "react-icons/ci";
import { FaFileAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import Tabs from "../Tabs";
import ClubSettings from "./ClubSettings";
import { ClubLeagalSettings } from "./ClubLeagalSettings";
import { BoardMemeberSettings } from "./BoardMemberSettings";
export function ClubSettingsTabs() {
    const tabs = [
        { title: "General Info", icon: <CiSettings />, content: ClubSettings },
        { title: "Leagal", icon: <GiCheckMark />, content: ClubLeagalSettings },
        { title: "Board member", icon: <FaFileAlt />, content: BoardMemeberSettings },
      ];
    return (
        <div>
            <h1>Club Settings</h1>
            <Tabs tabs={tabs} />
        </div>
    )
}