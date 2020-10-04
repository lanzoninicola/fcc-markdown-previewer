import PropTypes from "prop-types";

import LocalStorageFilledCircle from "../../molecules/LocalStorageFilledCircle/index";
import LocalStorageStatsView from "../../molecules/LocalStorageStatsView/index";

import withLocalStorageData from "../../../Hoc/withLocalStorageData/withLocalStorageData";
import withContextMenu from "../../../Hoc/withContextMenu/withContextMenu";

const LocalStorageStatsWidget = withLocalStorageData(
  withContextMenu(LocalStorageStatsView, {
    spaceBetween: "large",
  })(LocalStorageFilledCircle)
);

export default LocalStorageStatsWidget;

LocalStorageFilledCircle.propTypes = {
  data: PropTypes.object,
};
