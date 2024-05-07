import React, { useState } from "react";
import { Stepper } from "../../common/Stepper";
import { IoDocumentTextOutline, IoPeopleOutline } from "react-icons/io5";
import { TbDevicesQuestion } from "react-icons/tb";
import DocumentsType from "./documents-type/DocumentsType";
import Documents from "./documents/Documents";
import BoardMember from "./board-members/BoardMember";

const verificationSteps = [
  {
    Icon: TbDevicesQuestion,
    showStepName: true,
    stepLabel: "Verification Type",
    showStatus: true,
  },
  {
    Icon: IoDocumentTextOutline,
    showStepName: true,
    stepLabel: "Documents",
    showStatus: true,
  },
  {
    Icon: IoPeopleOutline,
    showStepName: true,
    stepLabel: "Board Members",
    showStatus: true,
  },
];

const UnverifiedClub = ({ clubVerificationStatus }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState(null);

  const handleVerificationTypeSubmit = (verificationData) => {
    setData({ ...data, ...verificationData });
    setCurrentStep(2);
  };

  return (
    <div className="flex flex-col h-full">
      <Stepper
        height={80}
        steps={verificationSteps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div className="grow h-2 rounded-sm bg-gray-50 border-t relative overflow-auto">
        {currentStep === 1 && (
          <DocumentsType
            documentType={data?.documentType}
            onSubmit={handleVerificationTypeSubmit}
          />
        )}
        {currentStep === 2 && <Documents documentType={data?.documentType} />}
        {currentStep === 3 && <BoardMember documentType={data?.documentType} />}
      </div>
    </div>
  );
};

export default UnverifiedClub;
