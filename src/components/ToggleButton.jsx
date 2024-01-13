import React from "react";

const ToggleButton = ({ checked, onChange, field, ...props }) => {
  console.log(field);
  return (
    <>
      <div className="toggle-switch">
        <input className="toggle-input" id="toggle" type="checkbox" />
        <label className="toggle-label" htmlFor="toggle"></label>
      </div>
    </>
  );
};

export default ToggleButton;
