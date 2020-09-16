import React from "react";
import PropTypes from "prop-types";
import "./LocalStorageWidget.css";
import SvgIcon from "../../SvgIcon/SvgIcon";

import LocalStorageStatsViewWithData from "../LocalStorageStatsView/LocalStorageStatsView";
import withLocalStorageData from "../../../Hoc/withLocalStorageData/withLocalStorageData";
import withContextMenu from "../../../Hoc/withContextMenu/withContextMenu";

const LocalStorageFilledCircle = ({ ...props }) => {
  const { handleOnClickEvent } = props;
  const { localStorageSpaceUsedInByte } = props.data;
  let increment = "undefined";

  if (localStorageSpaceUsedInByte > 0) {
    increment = "lower";
  }

  if (localStorageSpaceUsedInByte > 1000000) {
    increment = "low";
  }

  if (localStorageSpaceUsedInByte > 3000000) {
    increment = "low";
  }

  if (localStorageSpaceUsedInByte > 3500000) {
    increment = "medium";
  }

  if (localStorageSpaceUsedInByte > 4000000) {
    increment = "high";
  }

  if (localStorageSpaceUsedInByte > 4300000) {
    increment = "higher";
  }

  return (
    <div id="localstoragestatswidget" onClick={handleOnClickEvent}>
      <SvgIcon name={"filledcircle"} schema={`chartThreshold-${increment}`} />
    </div>
  );
};

const LocalStorageFilledCircleWithData = withLocalStorageData(
  LocalStorageFilledCircle
);
const LocalStorageStatsWidget = withContextMenu(LocalStorageStatsViewWithData, {
  spaceBetween: "large",
})(LocalStorageFilledCircleWithData);

export default LocalStorageStatsWidget;

LocalStorageFilledCircle.propTypes = {
  data: PropTypes.object,
};
