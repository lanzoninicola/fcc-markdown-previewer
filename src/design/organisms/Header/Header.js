import React from "react";
import "./Header.css";
import HeaderBranding from "../../molecules/HeaderBranding/index";
import HeaderToolbar from "../../molecules/HeaderToolbar/index";
import LocalStorageStatsWidget from "../LocalStorageStatsWidget/index";
import AppSettings from "../AppSettingsList/index";
import NotificationIcon from "../../molecules/NotificationIcon/index";
import DarkModeToogle from "../../molecules/DarkModeToogle/index";

const Header = ({ screenWidth }) => {
  const toolbarItems = () => {
    return {
      LocalStorageStatsWidget: () => <LocalStorageStatsWidget />,
      NotificationIcon: () => <NotificationIcon />,
      DarkModeToogle: () => <DarkModeToogle />,
      AppSettings: () => <AppSettings moduleFrom={"Global"} />,
    };
  };

  return (
    <div className="header header-anchor">
      <HeaderBranding />
      <HeaderToolbar screenWidth={screenWidth} items={toolbarItems} />
    </div>
  );
};

export default Header;
