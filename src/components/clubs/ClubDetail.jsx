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
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="bg-white p-4 flex flex-col gap-2 rounded items-center shadow-md">
            <img
              className="rounded w-24 h-24 object-cover"
              src={clubDetail?.logo}
              alt="Club Logo"
            />
            <div>
              <p className="text-xl font-semibold">{clubDetail?.name}</p>
              <p className="text-gray-600 text-sm">Active members: 30</p>
            </div>
          </div>
          <div className="bg-white p-4 flex gap-3 rounded items-center shadow-md">
            <img
              className="rounded-full w-24 h-24 object-cover"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              alt="Owner"
            />
            <div className="flex flex-col">
              <p className="font-semibold">Royal Falcon</p>
              <p className="text-gray-500 text-sm">Owner</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded md:flex-1">
          <div className="grid grid-cols-2 gap-4 items-center mb-4">
            <div className="flex items-center gap-1">
              <MdLocationPin />
              <p>{clubDetail?.location}</p>
            </div>
            <p className="bg-primary/20 w-20 px-3 py-1 text-sm rounded-full text-primary text-center">
              Active
            </p>
          </div>
          <div className="flex flex-col gap-4">
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
                <div key={index} className="w-full md:w-1/2">
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

export default ClubDetail;
