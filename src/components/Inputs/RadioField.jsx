import { useEffect } from "react";
import useTabStore from "../../store/tabStore";

const RadioField = ({ field }) => {
  const {
    validate: { options },
  } = field;

  const selectedTab = useTabStore((state) => state.selectedTab);
  const setSelectedTab = useTabStore((state) => state.setSelectedTab);

  const handleTabChange = (value) => {
    setSelectedTab(value);
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
