import React from "react";
import InputField from "../common/form-controls/InputField";
import TextDropdownToggle from "../common/TextDropdownToggle";

const MemberSearchAndFilter = () => {
  return (
    <div className="flex py-2">
      <div className="flex gap-2 items-center">
        <InputField placeholder={"Quick search..."} />
        <TextDropdownToggle hint="Select Role" options={["abd", "asd"]} />
        <TextDropdownToggle hint="Select Status" options={["abd", "asd"]} />
      </div>
    </div>
  );
};

export default MemberSearchAndFilter;
