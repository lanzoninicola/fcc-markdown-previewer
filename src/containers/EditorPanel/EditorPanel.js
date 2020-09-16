import React, { Component } from "react";
import "./EditorPanel.css";
import EditorPanelSettings from "../../components/EditorPanelSettings/EditorPanelSettings";
import EditorArea from "./EditorArea/EditorArea";

class EditorPanel extends Component {
  render() {
    const {
      screenWidth,
      focusMode,
      handleFocusMode,
      handleImmersiveWriting,
    } = this.props;

    const menuItems = [
      {
        component: "EditorPanel",
        settingName: "focusMode",
        label: "FOCUS MODE",
        eventHandler: handleFocusMode,
        disabled: false,
        visible: true,
      },
      {
        component: "EditorPanel",
        settingName: "immersiveWriting",
        label: "IMMERSIVE WRITING",
        eventHandler: handleImmersiveWriting,
        disabled: false,
        visible: focusMode ? true : false,
      },
    ];

    return (
      <div id="editor-panel" className="fadeInLeft">
        <div id="editor-panel-header">
          <h3 id="editor-panel-header-title">EDITOR</h3>
          <div className="editor-panel-header-toolbar">
            <div className="editor-panel-header-toolbar-item">
              <EditorPanelSettings menuItems={menuItems} />
            </div>
          </div>
        </div>

        <EditorArea />
      </div>
    );
  }
}

export default EditorPanel;
