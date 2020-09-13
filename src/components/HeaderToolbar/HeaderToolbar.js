import React from "react";
import "./HeaderToolbar.css";
import AppGlobalSettings from "../AppGlobalSettings/AppGlobalSettings";
import SvgIcon from "../SvgIcon/SvgIcon";
import LocalStorageStatsMenu from "../LocalStorageStats/LocalStorageStatsMenu/LocalStorageStatsMenu";
import LocalStorageStatsWidget from "../LocalStorageStats/LocalStorageStatsWidget/LocalStorageStatsWidget";

import {
  createNewMarkdowFile,
  clearMarkdownContent,
} from "../../redux/actionsCreators/globalActions";
import { connect } from "react-redux";

const HeaderToolbar = ({ screenWidth, ...props }) => {
  const menuItems = [
    {
      component: "EditorPanel",
      settingName: "focusMode",
      label: "FOCUS MODE",
      eventHandler: "",
      disabled: false,
      visible: true,
    },
    {
      component: "EditorPanel",
      settingName: "ultraFocusMode",
      label: "ULTRA FOCUS MODE",
      eventHandler: "handleImmersiveWriting",
      disabled: false,
      visible: true,
    },
    // ,
    // {
    //     component: 'EditorPanel',
    //     name: 'hideNumbers',
    //     label: 'HIDE NUMBERS',
    //     eventHandler: handleHideGridNumbers
    // },
  ];

  const { createNewMarkdowFile, clearMarkdownContent } = props;

  return (
    <div className="header-toolbar">
      <div className="header-toolbar-items">
        <div className="header-toolbar-item" onClick={createNewMarkdowFile}>
          <SvgIcon name={"new"} iconColor={"#006d77"} bigIcon={true} />
        </div>
        <div className="header-toolbar-item">
          <SvgIcon name={"save"} iconColor={"#006d77"} bigIcon={true} />
        </div>
        <div className="header-toolbar-item">
          <SvgIcon name={"timemachine"} iconColor={"#006d77"} bigIcon={true} />
        </div>
        <div className="header-toolbar-item">
          <SvgIcon name={"copy"} iconColor={"#006d77"} bigIcon={true} />
        </div>
        <div className="header-toolbar-item" onClick={clearMarkdownContent}>
          <SvgIcon name={"clear"} iconColor={"#006d77"} bigIcon={true} />
        </div>
        <div className="header-toolbar-item">
          {/* {screenWidth >= 768 && <LocalStorageStatsWidget
                        title="local storage space used"
                    />}
                    {screenWidth < 768 && <LocalStorageStatsMenu />} */}
          <LocalStorageStatsWidget />
        </div>
        <div className="header-toolbar-item">
          <SvgIcon name={"notification"} iconColor={"#006d77"} bigIcon={true} />
        </div>
        <div className="header-toolbar-item">
          <AppGlobalSettings
            PopUpBoxSpaceBetween={"large"}
            menuItems={menuItems}
          />
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  const { markdownFile } = state;
  const { editingStatus } = markdownFile;

  //  console.log("app - mapState - state", markdownImage);

  return {
    editingStatus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    createNewMarkdowFile: () => dispatch(createNewMarkdowFile()),
    clearMarkdownContent: () => dispatch(clearMarkdownContent()),
  };
};

export default connect(mapState, mapDispatch)(HeaderToolbar);
