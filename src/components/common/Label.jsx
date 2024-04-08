import React from "react";

const Label = ({ icon: Icon, label, size = "md", iconSize, className }) => {
  return (
    <div
      className={`flex items-center gap-2 ${className} text-${size}`}
    >
      {Icon && <Icon className={`text-${iconSize || size}`} />}{" "}
      <span className="mb-0">{label}</span>
    </div>
  );
};

export default Label;
