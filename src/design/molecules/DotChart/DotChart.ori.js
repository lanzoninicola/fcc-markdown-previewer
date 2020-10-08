import React from "react";
import PropTypes from "prop-types";
import "./DotChart.css";
import SvgIcon from "../../atoms/SvgIcon/index";

const DotChart = ({ title, data, size, ...props }) => {
  let graphTitle = title ? title.toUpperCase() : DotChart.defaultProps.title;

  return (
    <div id="dotchart" className={"relative flex-column-center"}>
      <p id="dotchart-title">{graphTitle}</p>
      <div id="dotchart-bar" className={"flex-row-center"}>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 0 ? "rgb(72, 235, 211)" : null}
          />
        </span>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 1000000 ? "rgb(34, 193, 195)" : null}
          />
        </span>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 3000000 ? "rgb(34, 193, 195)" : null}
          />
        </span>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 3500000 ? "rgb(252, 176, 69)" : null}
          />
        </span>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 4000000 ? "rgb(253, 29, 29)" : null}
          />
        </span>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 4300000 ? "rgb(131, 58, 180)" : null}
          />
        </span>
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
