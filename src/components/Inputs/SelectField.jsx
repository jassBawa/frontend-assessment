import usePizzaStore from "../../store/usePizzaStore";

const SelectField = ({ field }) => {
  // TODO: handle onchange
  const { updateFormField } = usePizzaStore();
  const isParent = field.level === 0;

  const {
    label,
    validate: { options },
  } = field;

  const handleChange = (event) => {
    updateFormField(field.jsonKey, event.target.value);
  };

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
      <select className="select" id={field.jsonKey} onChange={handleChange}>
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
