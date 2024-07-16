import React from "react";
import AppModal from "../AppModal";
import InputField from "../common/form-controls/InputField";
import Button from "../common/Button";
import { BiCheckCircle } from "react-icons/bi";

const AddEditDataTypeModal = ({ show, onHide }) => {
  return (
    <div>
      <AppModal
        onHide={onHide}
        show={show}
        title={"Edit Document Type"}
        size="sm"
      >
        <InputField
          label={"Document type"}
          placeholder={"Enter document type"}
          type={"text"}
          value={""}
          className=""
        />
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
