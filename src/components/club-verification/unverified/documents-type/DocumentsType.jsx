import React, { useEffect, useState } from "react";
import { GrDocumentUpload } from "react-icons/gr";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import Button from "../../../common/Button";

const DocumentsType = ({ documentType, onNextClick }) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    setValue(documentType);
  }, [documentType]);
  return (
    <div className="h-full flex flex-col p-2">
      <h6 className="font-normal text-xl">Is your club already verified?</h6>
      <div className="grow flex pt-4 gap-4">
        <div
          onClick={() => setValue("yes")}
          className={`${
            value === "yes" ? "border-2 border-primary" : "border"
          } bg-white h-36 w-36  cursor-pointer rounded-md p-3 flex flex-col gap-2 justify-center items-center`}
        >
          <GrDocumentUpload size={32} className="text-primary" />
          <h6 className="text-xs text-center text-wrap">
            Yes, I have all the legal documents
          </h6>
        </div>
        <div
          onClick={() => setValue("no")}
          className={`${
            value === "no" ? "border-2 border-secondary" : "border"
          } bg-white h-36 w-36  cursor-pointer rounded-md p-3 flex flex-col gap-2 justify-center items-center`}
        >
          {" "}
          <LiaHandsHelpingSolid size={32} className="text-secondary" />{" "}
          <h6 className="text-xs text-center text-wrap">
            No, I want help verifying my club
          </h6>
        </div>
      </div>{" "}
      <div className="flex w-full justify-end">
        <Button
          text={"Next"}
          onClick={() => onNextClick({ documentType: value })}
        />
      </div>
    </div>
  );
};

export default DocumentsType;
