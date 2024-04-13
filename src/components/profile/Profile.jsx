import React from "react";
import Label from "../common/Label";
import { FaGear } from "react-icons/fa6";
import Button from "../common/Button";

const Profile = () => {
  return (
    <div className="flex flex-col gap-2 h-full w-full lg:w-3/4">
      <div className="flex gap-2 items-center">
        <Label label={"My Profile"} size={"xl"} className={"font-bold"} />
        <Button
          rightIcon={FaGear}
          text={"Update"}
          variant="primary"
          size="sm"
          onClick={() => {}}
        />
      </div>
      <div className="h-full bg-white shadow p-4">sss</div>
    </div>
  );
};

export default Profile;
