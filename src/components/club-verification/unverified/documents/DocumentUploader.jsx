import React, { useEffect, useState } from "react";
import ImageUploader from "../../../common/image-uploader/ImageUploader";
import FileUploader from "../../../common/FileUploader";
import Button from "../../../common/Button";
import { BiCheckSquare, BiDownload } from "react-icons/bi";
import FormButtons from "../../common/FormButtons";
import { FcDocument } from "react-icons/fc";
import { GrDocument } from "react-icons/gr";

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
            <div key={key} className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                <GrDocument /> <h6 className="text-lg ">{title}</h6>{" "}
                <h6
                  class="flex items-center  text-blue-600 hover:underline cursor-pointer text-xs mx-3"
                  download
                >
                  Download Template <BiDownload className="mx-1"/>
                </h6>
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

      <FormButtons
        nextButtonLabel="Save"
        onNextClick={() => onNextClick({ documents: files })}
        onPreviousClick={onPreviousClick}
      />
    </div>
  );
};

export default DocumentUploader;
