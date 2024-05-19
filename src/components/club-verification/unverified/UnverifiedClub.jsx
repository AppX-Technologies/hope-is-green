import React, { useMemo, useState } from "react";
import { Stepper } from "../../common/Stepper";
import { IoDocumentTextOutline, IoPeopleOutline } from "react-icons/io5";
import { TbDevicesQuestion } from "react-icons/tb";
import DocumentsType from "./documents-type/DocumentsType";
import Documents from "./documents/Documents";
import BoardMember from "./board-members/BoardMember";

const UnverifiedClub = ({ clubVerificationStatus }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({ documentType: "yes" });

  const verificationSteps = useMemo(() => {
    let steps = [
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
        hide: data?.documentType === "yes",
      },
    ];
    return steps?.filter((s) => !s?.hide);
  }, [data]);

  const handleVerificationTypeSubmit = (verificationData) => {
    setData({ ...data, ...verificationData });
    setCurrentStep(2);
  };

  const handleDocumentsUploadSubmit = (documents) => {
    setData({ ...data, ...documents });
    setCurrentStep(3);
  };

  const onPreviousClick = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col h-full">
      <Stepper
        height={80}
        steps={verificationSteps}
        currentStep={currentStep}
        // setCurrentStep={setCurrentStep}
      />
      <div className="grow rounded-sm h-1 bg-gray-100 bg-opacity-65 border-t mt-9 overflow-auto">
        {currentStep === 1 && (
          <DocumentsType
            documentType={data?.documentType || "no"}
            onNextClick={handleVerificationTypeSubmit}
          />
        )}
        {currentStep === 2 && (
          <Documents
            data={data}
            documentType={data?.documentType}
            onPreviousClick={onPreviousClick}
            onNextClick={handleDocumentsUploadSubmit}
          />
        )}
        {currentStep === 3 && <BoardMember documentType={data?.documentType} />}
      </div>
    </div>
  );
};

export default UnverifiedClub;
