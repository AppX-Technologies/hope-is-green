import React from "react";
import InputField from "../common/form-controls/InputField";
import TextDropdownToggle from "../common/TextDropdownToggle";

const ClubSearchAndFilter = () => {
  return (
    <div className="flex gap-2 items-center pb-2">
      <div className="grow">
        <InputField placeholder={"Quick search..."} />
      </div>
    </div>
  );
};

export default ClubSearchAndFilter;
