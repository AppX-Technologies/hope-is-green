import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { toast } from "react-toastify";
import AppModal from "../AppModal";
import { FaPlus } from "react-icons/fa";
import InputField from "../common/form-controls/InputField";
import Button from "../common/Button";

const InviteMemberModal = ({ show, onHide }) => {
  return (
    <AppModal
      show={show}
      onHide={onHide}
      TitleIcon={FaPlus}
      title={"Invite Member"}
      size="sm"
    >
      <div className="">
        <InputField label={"Email"} />
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <Button
          size="sm"
          variant="danger"
          text={"Cancel"}
          className=""
          onClick={onHide}
        />
        <Button
          size="sm"
          variant="primary"
          title={"Send"}
          rightIcon={RiSendPlaneFill}
          onClick={() => {
            onHide();
            toast.success("Invitation sent successfully");
          }}
        />
      </div>
    </AppModal>
  );
};

export default InviteMemberModal;
