import React from "react";

export const Stepper = ({ currentStep, height, setCurrentStep, steps }) => {
  return (
    <div class="flex items-center w-full my-2">
      {steps.map((step, index) => {
        const isLastStep = index === steps.length - 1;

        if (typeof step === "number") {
          return (
            <div
              key={index}
              className={`flex items-center ${!isLastStep && "w-full"}`}
            >
              <div
                className={`w-8 h-8 p-1.5 flex items-center justify-center rounded-full ${
                  currentStep > index ? "bg-green-600" : "bg-gray-400"
                }`}
              >
                <span className="text-base text-white font-bold">{step}</span>
              </div>
              <div
                className={`flex-grow h-1 ${
                  currentStep > index + 1 ? "bg-green-600" : "bg-gray-300"
                }`}
              ></div>
            </div>
          );
        } else {
          let { Icon, stepLabel, showStepName } = step;
          return (
            <div
              key={index}
              className={`min-h-[${height}px] h-[${height}px] ${
                !isLastStep && "w-full"
              }`}
            >
              <div className={`flex items-center w-full`}>
                <div className="relative ">
                  <div
                    className={`w-8 h-8 cursor-pointer flex items-center justify-center rounded-full ${
                      currentStep > index ? "bg-green-600" : "bg-gray-400"
                    }`}
                    onClick={() => {
                      setCurrentStep && setCurrentStep(index + 1);
                    }}
                  >
                    <span className="text-white">
                      <Icon size={20} />
                    </span>
                  </div>
                  <div
                    className={`absolute mt-1 ${
                      isLastStep && "right-0 text-right"
                    } w-[150px]`}
                  >
                    {showStepName && (
                      <h6 className="text-xs text-slate-400">
                        Step {index + 1}
                      </h6>
                    )}
                    {stepLabel && (
                      <h6
                        className={`text-sm font-medium  ${
                          currentStep >= index + 1
                            ? "text-green-600"
                            : "text-slate-600"
                        }`}
                      >
                        {stepLabel}
                      </h6>
                    )}
                  </div>
                </div>

                <div
                  className={`flex-grow h-1 ${
                    currentStep > index + 1 ? "bg-green-600" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
