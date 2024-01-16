import { useEffect, useState } from "react";
import usePizzaStore from "../../store/usePizzaStore";

const SwitchField = ({ field }) => {
  const { label, jsonKey, validate } = field;
  const { updateFormField } = usePizzaStore();
  const [isChecked, setIsChecked] = useState(validate.defaultValue);

  useEffect(() => {
    setIsChecked(field.validate.defaultValue);
  }, [field]);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    updateFormField(jsonKey, event.target.checked);
  };

  return (
    <div className="switch-container">
      <input type="checkbox" onChange={handleChange} value={isChecked} />
      <label htmlFor={field}>{label}</label>
    </div>
  );
};

export default SwitchField;
