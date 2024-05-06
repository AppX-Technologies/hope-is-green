import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const ClubVerified = () => {
  return (
    <div>
      <div className="border rounded-md flex gap-4 items-center p-8 bg-green-50 shadow-md w-fit">
        <RiVerifiedBadgeFill className="text-green-600" size={70} />
        <h6 className="text-2xl"><span className="text-4xl font-medium text-green-600">Congratulations</span> on being verified!</h6>
      </div>
    </div>
  );
};

export default ClubVerified;
