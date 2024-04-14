import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import Button from "../common/Button";
import Label from "../common/Label";
import CircularImageUpload from "../common/circular-image-upload/CircularImageUpload";
import InputField from "../common/form-controls/InputField";
import TextArea from "../common/form-controls/TextArea";

const AppSettings = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <div className="flex gap-2 items-center">
        <Label label={"App Settings"} size={"xl"} className={"font-bold"} />
        {editMode ? (
          <>
            {" "}
            <Button
              text={"Cancel"}
              variant="muted"
              size="sm"
              onClick={() => setEditMode(false)}
            />{" "}
            <Button
              rightIcon={BiCheckCircle}
              text={"Save"}
              variant="primary"
              size="sm"
              onClick={() => setEditMode(false)}
            />
          </>
        ) : (
          <Button
            rightIcon={FaEdit}
            text={"Edit"}
            variant="primary"
            size="sm"
            onClick={() => setEditMode(true)}
          />
        )}
      </div>
      <div className="h-full bg-white shadow p-4">
        <Label label={"App Info"} size={"lg"} className={"font-medium"} />
        <h6 className="font-normal text-gray-500">Tell us basic app info</h6>
        <hr className="my-1" />
        <div className="flex flex-col gap-2 w-full sm:w-full md:w-3/4 lg:w-1/2">
          <div>
            <label className={`text-sm mb-1`}>App Logo</label>
            <div className="flex justify-center items-center">
              <CircularImageUpload
                height={100}
                width={100}
                onChange={(e) => console.log(e)}
                fallBackImage={
                  "https://static.vecteezy.com/system/resources/previews/011/883/296/non_2x/modern-graphic-leaf-abstrack-with-water-drop-colorful-logo-good-for-technology-logo-fruits-logo-fresh-logo-nature-logo-company-logo-dummy-logo-bussiness-logo-vector.jpg"
                }
              />
            </div>
          </div>
          <InputField
            label={"App name"}
            placeholder={"Enter app name"}
            type={"text"}
            disabled={!editMode}
            className=""
          />
          <TextArea
            label={"About us"}
            placeholder={"About us..."}
            disabled={!editMode}
            className=""
          />
          <InputField
            label={"App email"}
            placeholder={"Enter you email"}
            type={"text"}
            value={"app@example.com"}
            disabled
            className=""
          />
          <InputField
            label={"Address"}
            placeholder={"Enter you address"}
            type={"text"}
            disabled={!editMode}
            className=""
          />
          <InputField
            label={"Phone number"}
            placeholder={"Enter you phone number"}
            type={"text"}
            disabled={!editMode}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default AppSettings;
