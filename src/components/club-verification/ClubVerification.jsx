import React, { useMemo } from "react";
import Label from "../common/Label";
import ClubVerified from "./verified/ClubVerified";
import UnverifiedClub from "./unverified/UnverifiedClub";
import useAuth from "../../hooks/useAuth";

const ClubVerification = () => {
  const { user } = useAuth();
  const clubVerificationStatus = useMemo(
    () => user?.clubVerificationStatus,
    [user]
  );

  return (
    <div className="w-full h-full flex flex-col">
      <Label label={"Club Verification"} size={"xl"} className={"font-bold"} />
      <div className="bg-white grow p-4 rounded shadow-md mt-4 w-full">
        {clubVerificationStatus === "Verified" ? (
          <ClubVerified />
        ) : (
          <UnverifiedClub clubVerificationStatus={clubVerificationStatus} />
        )}
      </div>
    </div>
  );
};

export default ClubVerification;
