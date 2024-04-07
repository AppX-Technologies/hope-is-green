import React from "react";
import InputField from "../common/form-controls/InputField";
import TextDropdownToggle from "../common/TextDropdownToggle";

const OrderSearchAndFilter = () => {
  return (
    <div className="flex gap-2 py-2 items-center">
      <div className="grow">
        <InputField placeholder={"Quick search..."} />
      </div>
      <TextDropdownToggle hint="Select Status" options={["abd", "asd"]} />
    </div>
  );
};

export default OrderSearchAndFilter;
