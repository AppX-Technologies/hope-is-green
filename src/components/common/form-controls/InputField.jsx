import React from "react";

const InputField = ({ type, label, placeholder, value, onChange }) => {
  return (
    <div className="px-1">
      {label && <h6 className="text-base text-gray-500">{label}</h6>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-2 py-1 text-base focus:outline-none"
      />
    </div>
  );
};

export default InputField;
