import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import PersonAvatar from "../../assets/person-avatar.png";
import Button from "../common/Button";
import Label from "../common/Label";
import CircularImageUpload from "../common/circular-image-upload/CircularImageUpload";
import InputField from "../common/form-controls/InputField";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <div className="flex gap-2 items-center">
        <Label label={"My Profile"} size={"xl"} className={"font-bold"} />
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
        <Label label={"Basic Info"} size={"lg"} className={"font-medium"} />
        <h6 className="font-normal text-gray-500">
          Tell us your basic info details
        </h6>
        <hr className="my-1" />
        <div className="flex flex-col gap-2 w-full sm:w-full md:w-3/4 lg:w-1/2">
          <div>
            <label className={`text-sm mb-1`}>Profile Picture</label>
            <div className="flex justify-center items-center">
              <CircularImageUpload
                height={100}
                width={100}
                onChange={(e) => console.log(e)}
                fallBackImage={PersonAvatar}
              />
            </div>
          </div>
          <InputField
            label={"Full Name"}
            placeholder={"Enter your full name"}
            type={"text"}
            disabled={!editMode}
            className=""
          />
          <InputField
            label={"Email"}
            placeholder={"Enter your email"}
            type={"text"}
            value={'app@example.com'}
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
            label={"Phone Number"}
            placeholder={"Enter your phone number"}
            type={"text"}
            disabled={!editMode}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
