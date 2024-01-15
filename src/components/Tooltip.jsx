import React from "react";
import { InfoIcon } from "../assets";

const Tooltip = ({ description }) => {
  if (!description) return;
  return (
    <span
      className="info__icon"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <InfoIcon />
      <span className="tooltip-text">{description} </span>
    </span>
  );
};

export default Tooltip;
