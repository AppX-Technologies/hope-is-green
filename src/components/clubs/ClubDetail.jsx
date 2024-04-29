import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Tabs from "../Tabs";
import { FaUsers, FaFileAlt } from "react-icons/fa";
import ClubMembers from "./ClubMembers";
import ClubDocuments from "./ClubDocuments";
import Button from "../common/Button";

const ClubDetail = () => {
  const location = useLocation();
  const data = location?.state || {};

  const tabs = [
    { title: "Members", icon: <FaUsers />, content: ClubMembers },
    { title: "Documents", icon: <FaFileAlt />, content: ClubDocuments },
  ];

  return (
    <div className="flex flex-col gap-10 font-medium">
      {/* <div className="flex gap-3">
        <div className="flex gap-3 border w-fit pe-3 rounded bg-white p-3">
          <img class="rounded aspect-square h-32" src={data?.logo} alt="" />
          <p className="">{data?.name}</p>
        </div>
        <div className="items-center border w-fit h-fit p-3 rounded bg-white">
          <div className="mb-5">
            <p className="">{data?.name}</p>
            <p className="text-sm font-normal">{data?.location}</p>
          </div>
          <p className="text-gray-600 text-sm">Active member: 30</p>
          <p className="text-gray-600 text-sm">Club Owner: Royal Falcon</p>
          <p className="text-gray-600 text-sm">Club Settings</p>
        </div>
      </div> */}
      <div className="bg-white p-3 w-fit flex flex-col gap-2">
        <img class="rounded aspect-square h-40" src={data?.logo} alt="" />
        <div className="mb-4">
          <p className="">{data?.name}</p>
          <p className="text-sm font-normal">{data?.location}</p>
        </div>
        <p className="text-gray-600 text-sm text-start">Active member: 30</p>
        <p className="text-gray-600 text-sm">Club Owner: Royal Falcon</p>
        <Button
          className="!text-black my-2"
          variant="outline"
          text={"Club Settings"}
        />
      </div>
      <div className="mt-auto">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default ClubDetail;
