import React from "react";

export const Stepper = ({ currentStep, steps }) => {
  return (
    <div class="flex items-center w-full my-2">
      {steps.map((step, index) => {
        const isLastStep = index !== steps.length - 1;

        return (
          <div
            key={index}
            className={`flex items-center ${isLastStep ? "w-full" : ""}`}
          >
            <div
              className={`w-8 h-8 p-1.5 flex items-center justify-center rounded-full ${
                currentStep > index ? "bg-purple-500" : "bg-gray-400"
              }`}
            >
              <span className="text-base text-white font-bold">{step}</span>
            </div>
            {isLastStep && (
              <div
                className={`flex-grow h-1 ${
                  currentStep > index + 1 ? "bg-purple-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
