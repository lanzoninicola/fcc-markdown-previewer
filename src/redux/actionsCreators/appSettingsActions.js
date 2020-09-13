import {
  SHOW_APP_SETTINGS_EDITOR,
  HIDE_APP_SETTINGS_EDITOR,
} from "../actions/actions";

export const showAppSettings = (module) => {
  let editorAppSettingsItems = [
    {
      settingName: "focusMode",
      label: "FOCUS MODE",
      eventHandler: "",
      disabled: false,
      visible: true,
    },
    {
      settingName: "immersiveWriting",
      label: "IMMERSIVE WRITING",
      eventHandler: "",
      disabled: false,
      visible: false,
    },
  ];

  return {
    type: SHOW_APP_SETTINGS_EDITOR,
    payload: editorAppSettingsItems,
  };
};
