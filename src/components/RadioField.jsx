import { useState } from "react";

const RadioField = ({ field }) => {
  const {
    validate: { options },
  } = field;

  const [selectedTab, setSelectedTab] = useState(field.validate.defaultValue);

  const handleTabChange = (value) => {
    setSelectedTab(value);
  };

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
      <div className="tab__content-container">
        {/* TODO: how to do this  */}
        {/* {options.map((option) => {
          return (
            <div
              key={option.value}
              className={`tab-content ${
                selectedTab === option.value ? "active" : ""
              }`}
            >
              Content for {option.label}
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default RadioField;
