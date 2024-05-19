import React, { useEffect, useState } from "react";
import ImageUploader from "../../../common/image-uploader/ImageUploader";
import FileUploader from "../../../common/FileUploader";
import Button from "../../../common/Button";
import { BiCheckSquare } from "react-icons/bi";

const documentCategory = [
  {
    key: "legal",
    title: "Legal Documents",
  },
  {
    key: "boardMembers",
    title: "Board Members",
  },
];

const DocumentUploader = ({ documents, onPreviousClick, onNextClick }) => {
  const [files, setFiles] = useState({});

  useEffect(() => {
    setFiles(documents);
  }, [documents]);
  return (
    <div className="h-full flex flex-col p-2">
      <h6 className="font-normal text-xl">Upload your documents</h6>
      <h6 className="text-sm font-light">
        Please upload all the verification documents related to your club. We
        will review and verify the documents uploaded
      </h6>
      <div className="grow mt-2 border-t pt-2">
        {documentCategory?.map(({ key, title }) => {
          return (
            <div key={key}>
              <div className="flex items-center gap-2 mb-2">
                <BiCheckSquare /> <h6 className="text-lg ">{title}</h6>
              </div>
              <div className="ms-6">
                <FileUploader
                  files={files?.[key] || []}
                  onChange={(data) => setFiles({ ...files, [key]: data })}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 w-full justify-end">
        <Button text={"Previous"} onClick={onPreviousClick} />
        <Button
          text={"Save"}
          onClick={() => onNextClick({ documents: files })}
        />
      </div>
    </div>
  );
};

export default DocumentUploader;
