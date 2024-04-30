import React from "react";
import { useLocation } from "react-router-dom";
import Tabs from "../Tabs";
import { FaUsers, FaFileAlt } from "react-icons/fa";
import ClubMembers from "./ClubMembers";
import ClubDocuments from "./ClubDocuments";
import Select from "../common/Select";
import { MdLocationPin } from "react-icons/md";

const ClubDetail = () => {
  const location = useLocation();
  const clubDetail = location?.state || {};

  const options = ["Yes", "No"];

  const tabs = [
    { title: "Members", icon: <FaUsers />, content: ClubMembers },
    { title: "Documents", icon: <FaFileAlt />, content: ClubDocuments },
  ];

  return (
    <div className="flex flex-col gap-4 font-medium max-w-[calc(100vw-300px)]">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-2 flex flex-col gap-2 rounded">
            <img className="rounded w-16 h-14" src={clubDetail?.logo} alt="" />
            <div>
              <p className="">{clubDetail?.name}</p>
              <p className="text-gray-600 text-sm text-start">
                Active member: 30
              </p>
            </div>
          </div>
          <div className="bg-white p-2 flex gap-3 rounded items-center w-full">
            <img
              className="rounded aspect-square h-14"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              alt=""
            />
            <div className="flex flex-col justify-center">
              <p className="font-medium">Royal Falcon</p>
              <p className="text-gray-500 text-sm">Owner</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-2 rounded" style={{ flex: "1" }}>
          <div className="grid grid-cols-2 gap-1 items-center">
            <div className="items-center flex gap-1">
              <MdLocationPin />
              <p>{clubDetail?.location}</p>
            </div>
            <p className="bg-primary/20 w-fit px-2.5 text-sm rounded-full">
              Active
            </p>
          </div>
          <div className="flex items-ceenter gap-3">
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
                  "Does new threads need to be approved by admins before publishing?",
                name: "threadApproval",
              },
            ].map((item, index) => (
              <Select
                key={index}
                heading={item.heading}
                options={options}
                onChange={(e) => console.log(item.name, e.target.value)}
              />
            ))}
          </div>
        </div>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default ClubDetail;
