import GroupField from "./GroupField";
import IgnoreField from "./IgnoreField";
import InputField from "./Inputs/InputField";
import RadioField from "./Inputs/RadioField";
import SelectField from "./Inputs/SelectField";
import SwitchField from "./Inputs/SwitchField";
import ToggleButton from "./ToggleButton";
import SpecialComponent from "./SpecialComponent";

const componentMap = {
  Input: InputField,
  Group: GroupField,
  Radio: RadioField,
  Select: SelectField,
  Ignore: IgnoreField,
  Switch: SwitchField,
};

const UiField = ({ field, showNonEssential }) => {
  const Component = componentMap[field.uiType];

  if (!Component) {
    return null;
  }

  if (
    (field.validate.required === false ||
      field.validate.required === undefined) &&
    !showNonEssential
  ) {
    // Return your special component for non-required fields
    return <SpecialComponent field={field} />;
  }

  return <Component field={field} />;
};
export default UiField;
