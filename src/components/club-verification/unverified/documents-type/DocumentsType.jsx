import React, { useEffect, useState } from "react";
import Button from "../../../common/Button";

const DocumentsType = ({ documentType, onSubmit }) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    setValue(documentType);
  }, [documentType]);
  return (
    <>
      <div className="p-2 h-full">
        <h6 className="text-xl font-light">
          Could you please provide us with the club verification you possess?
        </h6>
        <div className=" mt-4 flex flex-col gap-2">
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="verification"
              value="yes"
              onChange={() => setValue("yes")}
              checked={value === "yes"}
            />
            <span className="ml-2">Yes, I have all the documents</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="verification"
              value="no"
              onChange={() => setValue("no")}
              checked={value === "no"}
            />
            <span className="ml-2">No, I don't have documents</span>
          </label>
        </div>
      </div>

      <div className="sticky bottom-0 flex w-full justify-end p-2 bg-gray-100 ">
        <Button
          text={"Next"}
          onClick={() => onSubmit({ documentType: value })}
        />
      </div>
    </>
  );
};

export default DocumentsType;
