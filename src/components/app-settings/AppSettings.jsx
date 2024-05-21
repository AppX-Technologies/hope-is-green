import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import {
  IoDocumentTextOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import Button from "../common/Button";
import Label from "../common/Label";
import Tabs from "../common/Tabs";
import GeneralInformation from "./GeneralInformation";
import DocumentTypes from "./DocumentTypes";

const tabs = [
  {
    title: "General Info",
    icon: <IoInformationCircleOutline />,
    content: GeneralInformation,
  },
  {
    title: "Document Types",
    icon: <IoDocumentTextOutline />,
    content: DocumentTypes,
  },
];

const AppSettings = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <div className="flex gap-2 items-center">
        <Label label={"App Settings"} size={"xl"} className={"font-bold"} />
      </div>
      <div className="h-full bg-white shadow p-4">
        <Tabs tabs={tabs} />
       
      </div>
    </div>
  );
};

export default AppSettings;
