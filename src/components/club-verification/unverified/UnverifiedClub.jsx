import React, { useMemo, useState } from "react";
import { Stepper } from "../../common/Stepper";
import { IoDocumentTextOutline, IoPeopleOutline } from "react-icons/io5";
import { TbDevicesQuestion } from "react-icons/tb";
import DocumentsType from "./documents-type/DocumentsType";
import Documents from "./documents/Documents";
import BoardMember from "./board-members/BoardMember";
import ManualDocumentForm from "./documents/ManualDocumentForm";
import DocumentUploader from "./documents/DocumentUploader";

const UnverifiedClub = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({ documentType: "yes" });

  const verificationSteps = useMemo(() => {
    let steps = [
      {
        Icon: IoDocumentTextOutline,
        showStepName: true,
        stepLabel: "Additional Information",
        showStatus: true,
      },
      {
        Icon: IoPeopleOutline,
        showStepName: true,
        stepLabel: "Board Members",
        showStatus: true,
      },
      {
        Icon: TbDevicesQuestion,
        showStepName: true,
        stepLabel: "Documents",
        showStatus: true,
      },
    ];
    return steps?.filter((s) => !s?.hide);
  }, [data]);

  const handleDocumentsUploadSubmit = (documents) => {
    setData({ ...data, ...documents });
  };

  const handleAdditionalInformationSubmit = (info) => {
    setCurrentStep(2);
  };

  const handleBoardMemberSubmit = (members) => {
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
      <div className="grow rounded-sm h-1 border-t mt-9 overflow-auto">
        {currentStep === 1 && (
          <ManualDocumentForm
            onNextClick={handleAdditionalInformationSubmit}
          />
        )}
        {currentStep === 2 && (
          <BoardMember
            onPreviousClick={onPreviousClick}
            onNextClick={handleBoardMemberSubmit}
          />
        )}
        {currentStep === 3 && (
          <DocumentUploader
            documents={data?.documents}
            onNextClick={handleDocumentsUploadSubmit}
            onPreviousClick={onPreviousClick}
          />
        )}
      </div>
    </div>
  );
};

export default UnverifiedClub;
