import { useEffect } from "react";
import usePizzaStore from "../../store/usePizzaStore";

const RadioField = ({ field }) => {
  const {
    validate: { options },
  } = field;

  const { selectedTab, setSelectedTab, updateFormField } = usePizzaStore();

  const handleTabChange = (value) => {
    setSelectedTab(value);
    updateFormField(field.jsonKey, value);
  };

  useEffect(() => {
    setSelectedTab(field.validate.defaultValue);
  }, [field.validate.defaultValue, setSelectedTab]);

  return (
    <>
      <div className="tab-container">
        {options.map((option) => (
          <div
            key={option.value}
            className={`tab ${
              selectedTab === option.value ? "tab--active" : ""
            }`}
            onClick={() => handleTabChange(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioField;
