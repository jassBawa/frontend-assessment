import GroupField from "./GroupField";
import InputField from "./InputField";
import RadioField from "./RadioField";
import SelectField from "./SelectField";
import SwitchField from "./SwitchField";

const UiField = ({ field }) => {
  console.log(field);
  switch (field.uiType) {
    case "Input":
      return <InputField field={field} />;
    case "Group":
      return <GroupField field={field} />;
    case "Radio":
      return <RadioField field={field} />;
    case "Select":
      return <SelectField field={field} />;
    case "Switch":
      return <SwitchField field={field} />;
    default:
  }
};
export default UiField;
