import React from "react";

const TextArea = ({ label, disabled = false, placeholder, value, onChange, className, rows=3 }) => {
  return (
    <div className={className}>
      {label && <h6 className="text-sm text-gray-700">{label}</h6>}
      <textarea
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`border border-gray-300 w-full rounded px-2 py-1 text-sm ${disabled ? 'text-slate-400' :'text-slate-800'} focus:outline-none focus:border-primary`}
      />
    </div>
  );
};

export default TextArea;
