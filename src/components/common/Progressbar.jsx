import React from "react";

const Progressbar = ({
  variant = "primary",
  background = "gray-200",
  text,
  value = 0,
}) => {
    value = value > 100 ? 100 : value;
  return (
    <div>
      <span className="text-[10px] w-full">{text}</span>
      <div className={`w-full bg-${background} h-3 rounded-full`}>
        <div
          className={`bg-${variant}  h-3 rounded-full`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default Progressbar;
