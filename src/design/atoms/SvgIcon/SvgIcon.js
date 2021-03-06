import React from "react";
import PropTypes from "prop-types";
import { getIcon } from "./IconCatalog";
import appTheme from "../../UI/index";

const SvgIcon = ({ name, color }) => {
  let iconFromCatalog = getIcon(name);

  let svgColor = appTheme
    .ifElse(color !== undefined && color !== null && color !== "")
    .then(color)
    .else(appTheme.color("primary", "main"));

  // let svgColor = "black";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      // width={svgWidth} height={svgHeight}
      width="100%"
      height="100%"
      viewBox="0 0 172 172"
    >
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strstrokemiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill={svgColor}>
          <path d={iconFromCatalog.svgPathValue}></path>;
        </g>
      </g>
    </svg>
  );
};

export default React.memo(SvgIcon);

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};
