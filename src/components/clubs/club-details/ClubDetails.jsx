import React from "react";
import { useLocation } from "react-router-dom";
import Tabs from "../../common/Tabs";
import { FaUsers, FaFileAlt } from "react-icons/fa";
import ClubMembers from "./ClubMembers";
import ClubDocuments from "./ClubDocuments";
import Select from "../../common/Select";
import { MdLocationPin } from "react-icons/md";
import SelectField from "../../common/form-controls/SelectField";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import BoardMember from "../../club-verification/unverified/board-members/BoardMember";
import ClubBoardMembers from "./ClubBoardMembers";
import ClubAdditionalInformation from "./ClubAdditionalInformation";

const ClubDetails = () => {
  const location = useLocation();
  const clubDetail = location?.state || {};

  const options = ["Yes", "No"];

  const tabs = [
    { title: "Club Members", icon: <FaUsers />, content: ClubMembers },
    { title: "Additional Information", icon: <BiMessageSquareDetail />, content: <ClubAdditionalInformation /> },
    { title: "Documents", icon: <FaFileAlt />, content: ClubDocuments },
    { title: "Board Members", icon: <HiUserGroup />, content: ClubBoardMembers },
  ];

  return (
    <div className="flex flex-col gap-4 font-medium max-w-[calc(100vw-300px)]">
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 ">
          <div className="bg-white p-3 flex flex-col gap-2 rounded items-center shadow-md h-full">
            <img
              className="rounded w-24 h-24 object-cover"
              src={clubDetail?.logo}
              alt="Club Logo"
            />
            <div>
              <p className="text-xl font-semibold">{clubDetail?.name}</p>
              <p className="text-gray-600 text-sm text-center">
                Active members: 30
              </p>
            </div>
          </div>
          <div className="bg-white p-4 flex gap-3 rounded items-center shadow-md h-full">
            <img
              className="rounded-sm w-[60px] h-[60px] object-cover"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              alt="Owner"
            />
            <div className="flex flex-col">
              <p className="font-semibold">Royal Falcon</p>
              <p className="text-gray-500 text-sm">Owner</p>
            </div>
          </div>
        </div>

        <div className="bg-white grow p-3 rounded md:flex-1 flex flex-col shadow-md">
          <div className="items-center flex justify-between">
            <div className="flex items-center gap-1">
              <MdLocationPin />
              <p>{clubDetail?.location}</p>
            </div>
            <SelectField
              items={["Active", "Pending", "Declined"].map((s) => ({
                label: s,
                value: s,
              }))}
              placeholder="Select status"
              selectedItems={[]}
              onChange={()=>{}}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              {
                heading: "Do new members need to be approved before joining?",
                name: "newMembersApproval",
              },

              {
                heading: "Can people search your club when joining?",
                name: "clubSearch",
              },
              {
                heading:
                  "Do new threads need to be approved by admins before publishing?",
                name: "threadApproval",
              },
            ].map((item, index) => {
              return (
                <div key={index} className="w-[48%]">
                  <Select
                    heading={item.heading}
                    options={options}
                    onChange={(e) => console.log(item.name, e.target.value)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default ClubDetails;
