import React from "react";
import LocalStorageStatsViewWithData from "../LocalStorageStatsView/LocalStorageStatsView";
import withPopUpBox from "../../../Hoc/withPopUpBox/withPopUpBox";
import SvgIcon from "../../SvgIcon/SvgIcon";

const LocalStorageMenu = ({ ...props }) => {
  const { handleOnClickEvent } = props;

  return (
    <div id="localstorage-menu" onClick={handleOnClickEvent}>
      <SvgIcon name={"storagestats"} iconColor={"#ffffff"} bigIcon />
    </div>
  );
};

const LocalStorageStatsMenu = withPopUpBox(LocalStorageStatsViewWithData, {
  spaceBetween: "large",
})(LocalStorageMenu);

export default LocalStorageStatsMenu;
