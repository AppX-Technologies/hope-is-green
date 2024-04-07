import React from "react";
import InputField from "../common/form-controls/InputField";
import TextDropdownToggle from "../common/TextDropdownToggle";

const MemberSearchAndFilter = () => {
  return (
    <div className="flex gap-2 items-center py-2">
      <div className="grow">
        <InputField placeholder={"Quick search..."} />
      </div>
      <TextDropdownToggle hint="Select Role" options={["abd", "asd"]} />
      <TextDropdownToggle hint="Select Status" options={["abd", "asd"]} />
    </div>
  );
};

export default MemberSearchAndFilter;
