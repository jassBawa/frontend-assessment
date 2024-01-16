import usePizzaStore from "../../store/usePizzaStore";
import ToolTip from "../Tooltip";

const InputField = ({ field }) => {
  const { formFields, updateFormField } = usePizzaStore();

  const { label, placeholder, jsonKey } = field;
  const isParent = field.level === 0;

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    updateFormField(jsonKey, newValue);
  };

  return (
    <div className={`input__field ${isParent ? "groupField__wrapper" : ""}`}>
      <label className="input__label" htmlFor="">
        {label}
        {field.validate.required && <span style={{ color: "red" }}>*</span>}

        <ToolTip description={field.description} />
      </label>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={formFields[jsonKey] || ""} // Default to empty string if the value is undefined
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
