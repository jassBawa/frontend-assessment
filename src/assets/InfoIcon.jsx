import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    viewBox="0 0 256 256"
    {...props}
  >
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
    >
      <path
        fill="#67bcff"
        d="M234.667 128c0 58.907-47.76 106.667-106.667 106.667-58.907 0-106.667-47.76-106.667-106.667 0-58.907 47.76-106.667 106.667-106.667 58.907 0 106.667 47.76 106.667 106.667z"
      />
      <path
        fill="#fff"
        d="M117.333 117.333h21.334V176h-21.334zm24-29.333c0 7.355-5.978 13.333-13.333 13.333S114.667 95.355 114.667 88 120.645 74.667 128 74.667 141.333 80.645 141.333 88z"
      />
    </g>
  </svg>
);
export default SvgComponent;
