import React from "react";
import AppModal from "../AppModal";
import InputField from "../common/form-controls/InputField";
import Button from "../common/Button";
import { BiCheckCircle } from "react-icons/bi";
import FileUploader from "../common/FileUploader";

const AddEditDataTypeModal = ({ show, onHide }) => {
  return (
    <div>
      <AppModal
        onHide={onHide}
        show={show}
        title={"Edit Document Type"}
        size="sm"
      >
        <div className="flex flex-col p-2 gap-4">
          <div className="flex  gap-3">
            <InputField
              label={"Document type"}
              placeholder={"Enter document type"}
              type={"text"}
              value={""}
              className="grow"
            />
            <InputField
              label={"Is this a compulsory document?"}
              onChange={(e) => console.log(e.target.checked)}
              type={"checkbox"}
              className=""
            />
          </div>
          <div className="">
              <h6 className="text-sm text-gray-700">Templete</h6>
              <FileUploader files={[]} onChange={(data) => {}} />
            </div>
        </div>

        <div className="flex items-center mt-4">
          <Button
            rightIcon={BiCheckCircle}
            text={"Save"}
            variant="primary"
            size="sm"
            onClick={onHide}
          />
        </div>
      </AppModal>
    </div>
  );
};

export default AddEditDataTypeModal;
