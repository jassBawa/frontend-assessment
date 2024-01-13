import UiField from "./UiField";

const GroupField = ({ field }) => {
  // console.log(field.subParameters);
  const { subParameters } = field;
  return (
    <div className="groupField__wrapper">
      <h4 className="group__label">{field.label}</h4>
      <hr className="group__divider" />
      {subParameters.map((field, index) => {
        return <UiField key={index} field={field} />;
      })}
    </div>
  );
};

export default GroupField;
