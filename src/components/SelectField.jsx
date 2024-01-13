import { useState } from "react";

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
      <label className="select__label" htmlFor={field.jsonKey}>
        {label}
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
