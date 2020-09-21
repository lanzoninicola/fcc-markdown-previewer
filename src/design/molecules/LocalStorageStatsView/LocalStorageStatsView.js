import React from "react";
import PropTypes from "prop-types";
import "./LocalStorageStatsView.css";
import SvgIcon from "../../atoms/SvgIcon/index";
import DotChart from "../DotChart/index";

const LocalStorageStatsView = ({ ...props }) => {
  const {
    localStorageSpaceUsedInByte,
    localStorageFreeSpaceInPercentage,
  } = props.data;
  const { handleStorageData, lastRefreshedDate } = props;

  return (
    <div className={"localStorageStatsView"}>
      <div
        className="localStorageStats-section-view"
        style={{ marginBottom: "20px" }}
      >
        <DotChart
          title={"Local storage usage"}
          data={localStorageSpaceUsedInByte}
        />
      </div>
      <div className="localStorageStats-section-view">
        <div className="localStorageStats-section-title">SPACE USED</div>
        <div className="localStorageStats-section-value">{`${
          localStorageSpaceUsedInByte / 1024 > 99
            ? (localStorageSpaceUsedInByte / 1024).toFixed(0)
            : (localStorageSpaceUsedInByte / 1024).toFixed(3)
        } MB`}</div>
      </div>
      <div className="localStorageStats-section-view">
        <div className="localStorageStats-section-title">FREE SPACE</div>
        <div className="localStorageStats-section-value">{`${localStorageFreeSpaceInPercentage} %`}</div>
      </div>
      <div
        className="localStorageStats-section-view"
        style={{ cursor: "pointer" }}
        onClick={handleStorageData}
      >
        <div id="localStorageStats-refresh-data">
          <SvgIcon name={"refresh"} schema={"common-white"} />
        </div>
        <div
          className="localStorageStats-section-title"
          style={{ fontSize: "0.7rem" }}
        >
          Refresh
        </div>
        <div id="last-refresh-date" className="localStorageStats-section-title">
          {lastRefreshedDate && `Last Refresh: ${lastRefreshedDate}`}
        </div>
      </div>
    </div>
  );
};

export default LocalStorageStatsView;

LocalStorageStatsView.propTypes = {
  data: PropTypes.object,
};
