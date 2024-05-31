import React from "react";

const InputField = ({
  type,
  checked,
  label,
  disabled = false,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={className}>
      {label && <h6 className="text-sm text-gray-700">{label}</h6>}
      <input
        checked={checked}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-gray-300 w-${type === 'checkbox' ? 'auto' : 'full'} rounded px-2 py-1 text-sm ${
          disabled ? "text-slate-400" : "text-slate-800"
        } focus:outline-none focus:border-primary`}
      />
    </div>
  );
};

export default InputField;
