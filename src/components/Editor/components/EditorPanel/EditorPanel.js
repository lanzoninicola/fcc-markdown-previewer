import React, { Component } from "react";
import "./EditorPanel.css";
import EditorArea from "../EditorArea/EditorArea";
import AppSettings from "../../../../design/organisms/AppSettingsList/AppSettingsList";

class EditorPanel extends Component {
  render() {
    const { screenWidth, focusMode } = this.props;

    return (
      <div id="editor-panel" className="fadeInLeft">
        <div id="editor-panel-header">
          <h3 id="editor-panel-header-title">EDITOR</h3>
          <div className="editor-panel-header-toolbar">
            <div className="editor-panel-header-toolbar-item">
              <AppSettings moduleFrom={"Editor"} />
            </div>
          </div>
        </div>

        <EditorArea />
      </div>
    );
  }
}

export default EditorPanel;
