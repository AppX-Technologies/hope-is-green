import React from "react";
import Button from "../../common/Button";

const FormButtons = ({
  onPreviousClick,
  onNextClick,
  nextButtonType = "submit",
  nextButtonLabel = "Next",
  previousButtonLabel = "Previous",
}) => {
  return (
    <div className="w-full flex gap-2 justify-end">
      {onPreviousClick && (
        <Button onClick={onPreviousClick} text={previousButtonLabel} />
      )}

      <Button
        type={nextButtonType}
        onClick={() => onNextClick && onNextClick()}
        text={nextButtonLabel}
      />
    </div>
  );
};

export default FormButtons;
