import React from "react";
import ManualDocumentForm from "./ManualDocumentForm";
import Button from "../../../common/Button";
import DocumentUploader from "./DocumentUploader";

const Documents = ({ documentType, data, onNextClick, onPreviousClick }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="grow overflow-auto">
        {documentType === "yes" && (
          <DocumentUploader
            documents={data?.documents}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
          />
        )}
        {documentType === "no" && (
          <ManualDocumentForm
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
          />
        )}
      </div>
    </div>
  );
};

export default Documents;
