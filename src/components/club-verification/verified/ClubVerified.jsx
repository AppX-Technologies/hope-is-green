import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Tabs from "../../common/Tabs";
import { FaFileAlt, FaUsers } from "react-icons/fa";

const tabs = [
  { title: "Documents", icon: <FaFileAlt />, content: "Documents" },
  { title: "Board Members", icon: <FaUsers />, content: "Board Members" },
];
const ClubVerified = () => {
  return (
    <div>
      <div className="border rounded-md flex gap-4 items-center p-8 bg-green-50 shadow-md">
        <RiVerifiedBadgeFill className="text-green-600" size={70} />
        <div className="">
          <h6 className="text-4xl leading-9 font-medium text-green-600">
            Congratulations
          </h6>
          <h6 className="text-xl">
            Your club has been verified!{" "}
            <span className="font-light">You can view the details below</span>
          </h6>
        </div>
      </div>
      <Tabs className='mt-4' showSaveButton tabs={tabs} />
    </div>
  );
};

export default ClubVerified;
