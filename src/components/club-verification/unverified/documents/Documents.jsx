import React from "react";
import ManualDocumentForm from "./ManualDocumentForm";
import Button from "../../../common/Button";
import DocumentUploader from "./DocumentUploader";

const Documents = ({ documentType }) => {
  return (
    <div>
      {documentType === "yes" && <DocumentUploader />}
      {documentType === "no" && (
        <ManualDocumentForm
          onSubmit={(values) => console.log(values, "values")}
        />
      )}
    </div>
  );
};

export default Documents;
