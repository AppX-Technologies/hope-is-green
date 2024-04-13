import React from "react";
import InputField from "../common/form-controls/InputField";
import TextDropdownToggle from "../common/TextDropdownToggle";
import { ALL_ORDER_STATUS } from "../../helpers/constants";

const OrderSearchAndFilter = () => {
  return (
    <div className="flex gap-2 pb-2 items-center">
      <div className="grow">
        <InputField placeholder={"Quick search..."} />
      </div>
      <TextDropdownToggle hint="Select Status" options={ALL_ORDER_STATUS} onOptionClick={(s)=>console.log(s)} />
    </div>
  );
};

export default OrderSearchAndFilter;
