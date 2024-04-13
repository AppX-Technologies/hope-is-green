import React from "react";
import InputField from "../common/form-controls/InputField";
import TextDropdownToggle from "../common/TextDropdownToggle";
import { ALL_MEMBER_STATUS, ALL_ROLES } from "../../helpers/constants";

const MemberSearchAndFilter = () => {
  return (
    <div className="flex gap-2 items-center pb-2">
      <div className="grow">
        <InputField placeholder={"Quick search..."} />
      </div>
      <TextDropdownToggle
        hint="Select Role"
        options={ALL_ROLES}
        onOptionClick={() => {}}
      />
      <TextDropdownToggle
        hint="Select Status"
        options={ALL_MEMBER_STATUS}
        onOptionClick={() => {}}
      />
    </div>
  );
};

export default MemberSearchAndFilter;
