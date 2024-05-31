import React from "react";
import { ClubLeagalFormFields } from "../../helpers/constants";

const ClubDetails = () => {
  return (
    <div className="p-2">
      <h6 className="mb-1">Club Details</h6>
      {ClubLeagalFormFields.map((group) => (
        <div
          key={group.groupName}
          className="flex flex-col flex-wrap border shadow-sm bg-gray-100 bg-opacity-65 rounded-md p-3 mb-4"
        >
          <label className="text-lg font-medium mb-2">{group.groupLabel}</label>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-2 gap-2">
            {group?.question?.map(({ label, name, type }) => {
              return (
                <div key={name}>
                  <label className="text-base font-light text-black mb-1">
                    {label}
                  </label>
                  <p className="bg-slate-200 rounded-md font-normal p-2">
                    Club Answer
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClubDetails;
