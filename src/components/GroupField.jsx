import Tooltip from "./Tooltip";
import UiField from "./UiField";

const GroupField = ({ field }) => {
  // console.log(field.subParameters);
  const { subParameters } = field;

  return (
    <div className="groupField__wrapper">
      <h4 className="group__label">
        {field.label}
        {field.validate.required && <span style={{ color: "red" }}>*</span>}
        <Tooltip description={field.description} />
      </h4>
      <hr className="group__divider" />
      <div className="groupItems__container">
        {subParameters.map((field, index) => {
          return <UiField key={index} field={field} />;
        })}
      </div>
    </div>
  );
};

export default GroupField;
