import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const PasswordField = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div>
      <FormControl
        className="form-control form-control-sm"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default PasswordField;
