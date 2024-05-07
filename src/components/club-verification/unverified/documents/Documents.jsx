import React from "react";
import ManualDocumentForm from "./ManualDocumentForm";
import Button from "../../../common/Button";

const Documents = ({ documentType }) => {
  return (
    <div>
      {documentType === "yes" && <div>TODO</div>}
      {documentType === "no" && (
        <ManualDocumentForm
          onSubmit={(values) => console.log(values, "values")}
        />
      )}
    </div>
  );
};

export default Documents;
