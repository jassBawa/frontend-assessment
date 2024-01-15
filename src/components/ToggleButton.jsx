const ToggleButton = ({ id, checked, onChange }) => {
  return (
    <div className="toggle-switch">
      <input
        className="toggle-input"
        id={id}
        type="checkbox"
        value={checked}
        onChange={onChange}
      />

      <label className="toggle-label" htmlFor={id}></label>
    </div>
  );
};

export default ToggleButton;
