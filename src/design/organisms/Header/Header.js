import React from "react";
import "./Header.css";
import HeaderBranding from "../../molecules/HeaderBranding/index";
import HeaderToolbar from "../../molecules/HeaderToolbar/index";
import LocalStorageStatsWidget from "../LocalStorageStatsWidget/index";
import AppSettings from "../AppSettingsList/index";
import NotificationIcon from "../../molecules/NotificationIcon";

const Header = ({ screenWidth }) => {
  const items = () => {
    return {
      LocalStorageStatsWidget: () => <LocalStorageStatsWidget />,
      AppSettings: () => <AppSettings moduleFrom={"Global"} />,
      NotificationIcon: () => <NotificationIcon />,
    };
  };

  return (
    <div className="header header-anchor">
      <HeaderBranding />
      <HeaderToolbar screenWidth={screenWidth} items={items} />
    </div>
  );
};

export default Header;
