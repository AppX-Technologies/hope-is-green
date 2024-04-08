import React from "react";
import { MdConstruction } from "react-icons/md";
const Discussion = () => {
  return (
    <div className="flex justify-center items-center h-80">
      <div className="flex flex-col justify-center items-center bg-white shadow w-[500px] h-56">
        <MdConstruction size={40} />
        <h6 className="text-primary text-2xl font-bold">Under Construction!</h6>
      </div>
    </div>
  );
};

export default Discussion;
