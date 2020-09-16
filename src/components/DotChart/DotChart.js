import React from "react";
import PropTypes from "prop-types";
import "./DotChart.css";
import DotChartItem from "../DotChartItem/DotCharItem";

const DotChart = ({ title, data, ...props }) => {
  let graphTitle = title ? title.toUpperCase() : DotChart.defaultProps.title;

  return (
    <div id="dotchart">
      <p id="dotchart-title">{graphTitle}</p>
      <div id="dotchart-bar">
        <DotChartItem
          dotSize={"small"}
          increment={data > 0 ? "lower" : DotChart.defaultProps.increment}
        />
        <DotChartItem
          dotSize={"small"}
          increment={data > 1000000 ? "low" : DotChart.defaultProps.increment}
        />
        <DotChartItem
          dotSize={"small"}
          increment={data > 3000000 ? "low" : DotChart.defaultProps.increment}
        />
        <DotChartItem
          dotSize={"small"}
          increment={
            data > 3500000 ? "medium" : DotChart.defaultProps.increment
          }
        />
        <DotChartItem
          dotSize={"small"}
          increment={data > 4000000 ? "high" : DotChart.defaultProps.increment}
        />
        <DotChartItem
          dotSize={"small"}
          increment={
            data > 4300000 ? "higher" : DotChart.defaultProps.increment
          }
        />
      </div>
    </div>
  );
};

export default DotChart;

DotChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.number,
  handleClickEventHandler: PropTypes.func,
};

DotChart.defaultProps = {
  title: "DOT GRAPH",
  data: 0,
};

// }= ({ title, data }) => {
