import React, { useState } from "react";

const SwitchField = ({ field }) => {
  const { label } = field;
  const [isChecked, setIsChecked] = useState(field.validate.defaultValue);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="switch-container">
      <input
        type="checkbox"
        // checked={checked}
        onChange={handleChange}
        // {...otherProps}
        checked={isChecked}
      />
      <label htmlFor={field}>{label}</label>
    </div>
  );
};

export default SwitchField;
