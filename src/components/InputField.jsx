const InputField = ({ field }) => {
  const { label, placeholder } = field;
  return (
    <div className="input__field">
      <label className="input__label" htmlFor="">
        {label}
      </label>
      <input className="input" type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
