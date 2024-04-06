import React from "react";
import Label from "../common/Label";
import { FaUsersGear } from "react-icons/fa6";
import InputField from "../common/form-controls/InputField";
import TextDropdownToggle from "../common/TextDropdownToggle";
import Button from "../common/Button";

const ClubSettings = () => {
  return (
    <div className="p-2">
      <Label label={"Club Settings"} icon={FaUsersGear} size={"2xl"} />
      <div className="flex flex-col gap-3 justify-center items-center h-fit">
        <img
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          className="rounded-[50%] h-24 w-24"
          alt="Logo"
        />
        <h6 className="text-xl font-medium text-gray-800">Club A pvt. ltd</h6>
        <div className="flex flex-col gap-2 shadow-sm bg-gray-50 p-4 max-w-[500px] w-full">
          <div className="flex justify-end">
            <Button variant="primary" title={"Update"} />
          </div>
          <h6 className="text-sm font-bold text-gray-700">General Info</h6>
          <hr className="my-0" />
          <InputField label={"Club Name"} />
          <InputField label={"Address"} />
          <h6 className="text-sm font-bold text-gray-700 mt-1">Settings</h6>
          <hr className="my-0" />
          <div>
            <h6 className="text-sm text-gray-700 mb-1">
              Do new members need to be approved before joining?
            </h6>
            <TextDropdownToggle
              options={["Yes", "No"]}
              onOptionClick={() => {}}
            />
          </div>
          <div>
            <h6 className="text-sm text-gray-700 mb-1">
              Can people search your club when joining?
            </h6>
            <TextDropdownToggle
              options={["Yes", "No"]}
              onOptionClick={() => {}}
            />
          </div>
          <div>
            <h6 className="text-sm text-gray-700 mb-1">
              Does new threads need to be approved by admins before publishing?
            </h6>
            <TextDropdownToggle
              options={["Yes", "No"]}
              onOptionClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubSettings;
