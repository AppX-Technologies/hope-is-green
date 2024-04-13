import React from "react";

const InputField = ({ type, label, placeholder, value, onChange }) => {
  return (
    <div className="">
      {label && <h6 className="text-sm text-gray-700">{label}</h6>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 w-full rounded px-2 py-1 text-sm focus:outline-none"
      />
    </div>
  );
};

export default InputField;
