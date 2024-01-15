import { useState } from "react";
import ToggleButton from "./ToggleButton";
import UiField from "./UiField";

const SpecialComponent = ({ field }) => {
  const [isToggled, setIsToggled] = useState(field.validate.required);
  const isParent = field.level === 0;

  return (
    <div className={`  ${isParent ? "groupField__wrapper" : ""}`}>
      <div className="items-center mb-1">
        <ToggleButton
          id={field.jsonKey}
          checked={isToggled}
          onChange={() => setIsToggled((prev) => !prev)}
        />
        <span className="ml-xs">Show advanced Fields</span>
      </div>

      {isToggled ? <UiField field={field} showNonEssential={true} /> : null}
    </div>
  );
};

export default SpecialComponent;
