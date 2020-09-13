import React from "react";
import withPopUpBox from "../../Hoc/withPopUpBox/withPopUpBox";
import AppSettingsList from "../AppSettingsList/AppSettingsList";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

import { connect } from "react-redux";

import {
  enableFocusMode,
  disableFocusMode,
  enableImmersiveWriting,
  disableImmersiveWriting,
} from "../../redux/actionsCreators/focusModeActions";

import { showAppSettings } from "../../redux/actionsCreators/appSettingsActions";

let appSettingsItems = [
  {
    settingName: "focusMode",
    label: "FOCUS MODE",
    eventHandler: enableFocusMode,
    disabled: false,
    visible: true,
  },
  {
    settingName: "immersiveWriting",
    label: "IMMERSIVE WRITING",
    eventHandler: enableImmersiveWriting,
    disabled: false,
    visible: false,
  },
];

const EditorPanelSettings = withPopUpBox(
  AppSettingsList,
  null,
  appSettingsItems
)(HamburgerMenu);

const mapState = (state, ownProps) => {
  const { focusWriting } = state;
  const { focusMode } = focusWriting;
  const { module } = ownProps;

  return {
    focusMode,
    module,
  };
};

const mapDispatch = (dispatch) => {
  return {
    enableFocusMode: () => dispatch(enableFocusMode()),
    disableFocusMode: () => dispatch(disableFocusMode()),
    enableImmersiveWriting: () => dispatch(enableImmersiveWriting()),
    disableImmersiveWriting: () => dispatch(disableImmersiveWriting()),
    showAppSettings: (module) => dispatch(showAppSettings(module)),
  };
};

export default connect(mapState, mapDispatch)(EditorPanelSettings);
