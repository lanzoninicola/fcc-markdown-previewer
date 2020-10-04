import React from "react";
import PropTypes from "prop-types";
import AppSetting from "../../molecules/AppSetting/index";
import HamburgerMenu from "../../molecules/HamburgerMenu/index";

import withContextMenu from "../../../Hoc/withContextMenu/withContextMenu";

import { connect } from "react-redux";

const AppSettingsList = ({ moduleFrom, ...props }) => {
  const { focusMode } = props;

  const menuItems = [
    {
      itemModule: ["Global", "Editor"],
      settingName: "focusMode",
      label: "FOCUS MODE",
      eventHandler: null, //handleFocusMode,
      disabled: false,
      visible: true,
    },
    {
      itemModule: ["Global", "Editor"],
      settingName: "immersiveWriting",
      label: "IMMERSIVE WRITING",
      eventHandler: null, //handleImmersiveWriting,
      disabled: false,
      visible: focusMode ? true : false,
    },
  ];

  let optionsMenuFiltered = menuItems.filter((menuItem, index) => {
    if (menuItem.visible === true && menuItem.itemModule.includes(moduleFrom)) {
      return menuItem;
    }
  });

  return (
    <div id="app-settings-list">
      {optionsMenuFiltered.map((optionMenu, index) => {
        return (
          <AppSetting
            key={index}
            settingName={optionMenu.settingName}
            label={optionMenu.label}
            eventHandler={optionMenu.eventHandler}
            disabled={optionMenu.disabled}
          />
        );
      })}
    </div>
  );
};

const AppSettings = withContextMenu(AppSettingsList, {
  spaceBetween: "medium",
})(HamburgerMenu);

const mapState = (state) => {
  return {
    focusMode: false,
  };
};

export default connect(mapState)(AppSettings);

AppSettingsList.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      settingName: PropTypes.string,
      label: PropTypes.string,
      eventHandler: PropTypes.func,
      disabled: PropTypes.bool,
      visible: PropTypes.bool,
    })
  ),
};

AppSettingsList.defaultProps = {
  menuItems: [],
};
