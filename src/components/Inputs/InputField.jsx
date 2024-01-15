import ToolTip from "../Tooltip";

const InputField = ({ field, value, onChange }) => {
  const { label, placeholder } = field;
  const isParent = field.level === 0;

  return (
    <div className={`input__field ${isParent ? "groupField__wrapper" : ""}`}>
      <label className="input__label" htmlFor="">
        {label}
        {field.validate.required && <span style={{ color: "red" }}>*</span>}

        <ToolTip description={field.description} />
      </label>
      <input className="input" type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
