import React from "react";
import InputField from "../common/form-controls/InputField";
import TextDropdownToggle from "../common/TextDropdownToggle";
import { ALL_MEMBER_STATUS, ALL_ROLES } from "../../helpers/constants";
import SelectField from "../common/form-controls/SelectField";

const MemberSearchAndFilter = () => {
  return (
    <div className="flex gap-2 items-center pb-2">
      <div className="grow">
        <InputField placeholder={"Quick search..."} />
      </div>
      <SelectField
        isMulti={false}
        items={ALL_ROLES?.map((r) => ({ label: r, value: r }))}
        onChange={() => {}}
        placeholder="Select role"
      />
      <SelectField
        isMulti={false}
        items={ALL_MEMBER_STATUS?.map((r) => ({ label: r, value: r }))}
        onChange={() => {}}
        placeholder="Select status"
      />
    </div>
  );
};

export default MemberSearchAndFilter;
