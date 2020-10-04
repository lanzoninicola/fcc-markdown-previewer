import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "../../atoms/SvgIcon";

import appTheme from "../../UI/index";

const LocalStorageFilledCircle = ({ ...props }) => {
  const { handleOnClickEvent } = props;
  const { spaceUsedInByte } = props.data;
  let colorStat = "black"; //appTheme.color("disabled", "main");

  if (spaceUsedInByte > 0) {
    colorStat = "rgb(72, 235, 211)";
  }

  if (spaceUsedInByte > 1000000) {
    colorStat = "rgb(34, 193, 195)";
  }

  if (spaceUsedInByte > 3500000) {
    colorStat = "rgb(252, 176, 69)";
  }

  if (spaceUsedInByte > 4000000) {
    colorStat = "rgb(253, 29, 29)";
  }

  if (spaceUsedInByte > 4300000) {
    colorStat = "rgb(131, 58, 180)";
  }

  return (
    <div id="localstoragestatswidget" onClick={handleOnClickEvent}>
      <SvgIcon name={"filledcircle"} color={colorStat} />
    </div>
  );
};

export default LocalStorageFilledCircle;

LocalStorageFilledCircle.propTypes = {
  data: PropTypes.object,
};
