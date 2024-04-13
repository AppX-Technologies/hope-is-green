import React from "react";
import AppModal from "../AppModal";
import { FiAlertTriangle } from "react-icons/fi";
import Button from "./Button";

const AlertModal = ({ show, onHide, text, onContinue }) => {
  return (
    <AppModal
      show={show}
      onHide={onHide}
      TitleIcon={FiAlertTriangle}
      title={"Heads up!"}
    >
      <div className="text-center flex items-center justify-center text-lg py-10">{text}</div>
      <div className="flex justify-end gap-2">
        <Button size="sm" variant="danger" title={"Cancel"} onClick={onHide} />
        <Button
          size="sm"
          variant="primary"
          text={"Continue"}
          onClick={onContinue}
        />
      </div>
    </AppModal>
  );
};

export default AlertModal;
