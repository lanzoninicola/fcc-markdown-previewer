import React from "react";
import PropTypes from "prop-types";
import "./DotChartItem.css";

import { getColorFromPalette } from "../../config/theme";

const DotChartItem = ({ dotSize, increment }) => {
  let schema = `chartThreshold-${increment}`;

  let schemaColor = getColorFromPalette(schema);

  return (
    <div
      className={`dotchart-increment dotchart-item-${dotSize}`}
      style={{
        borderColor: schemaColor,
        backgroundColor: schemaColor,
      }}
    ></div>
  );
};

export default DotChartItem;

DotChartItem.propTypes = {
  dotSize: PropTypes.oneOf(["small", "medium", "large"]),
  increment: PropTypes.oneOf([
    "undefined",
    "lower",
    "low",
    "medium",
    "high",
    "higher",
  ]),
};

DotChartItem.defaultProps = {
  dotSize: "small",
  increment: "undefined",
};
