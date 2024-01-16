import usePizzaStore from "../store/usePizzaStore";
import UiField from "./UiField";

const IgnoreField = ({ field }) => {
  // Get the selected radio tab from local storage
  const selectedTab = usePizzaStore((state) => state.selectedTab);

  // Check if the current IgnoreField should be displayed based on the selected tab
  const shouldDisplay = field.conditions.some(
    (condition) =>
      condition.jsonKey === "pizza_type.type" &&
      condition.op === "==" &&
      condition.value === selectedTab &&
      condition.action === "enable"
  );

  if (!shouldDisplay) {
    // If the field should not be displayed, return null or any other content
    return null;
  }

  return (
    <>
      {field.subParameters.map((field) => (
        <UiField key={field.jsonKey} field={field} />
      ))}
    </>
  );
};

export default IgnoreField;
