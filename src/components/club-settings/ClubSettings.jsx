import React from "react";
import Label from "../common/Label";
import ClubSettingForm from "./ClubSettingForm";

const ClubSettings = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Label label={"Club Settings"} size={"xl"} className={"font-bold"} />
      <div className="bg-white grow p-4 rounded shadow-md mt-4 w-full">
        <div className="w-full lg:w-[50%] md:w-[60%]">
          <ClubSettingForm />
        </div>
      </div>
    </div>
  );
};

export default ClubSettings;
