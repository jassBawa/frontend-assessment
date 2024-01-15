import { useState } from "react";
import Tooltip from "../Tooltip";

const SelectField = ({ field }) => {
  // TODO: handle onchange
  const [selectedOption, setSelectedOption] = useState();

  const isParent = field.level === 0;

  const {
    label,
    validate: { options },
  } = field;

  return (
    <div
      className={`select__field__wrapper ${
        isParent ? "groupField__wrapper" : ""
      }`}
    >
      <label className="input__label" htmlFor={field.jsonKey}>
        {label}
        {field.validate.required && <span style={{ color: "red" }}>*</span>}
      </label>
      <select className="select" id={field.jsonKey}>
        {options.map((option) => (
          <option
            className="select__option"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
