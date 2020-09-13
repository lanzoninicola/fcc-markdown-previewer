import React, { Component } from "react";
import "./EditorPanel.css";
import EditorArea from "./EditorArea/EditorArea";
import EditorPanelHeader from "../../components/EditorPanelHeader/EditorPanelHeader";

class EditorPanel extends Component {
  render() {
    const {
      editingStatus,
      screenWidth,
      lastmarkdownVersion,
      versionSelectedFromHistory,
      markdownVersionsHistory,
      handlemarkdownVersionChange,
    } = this.props;

    const mkVersionsOptions = markdownVersionsHistory
      .sort((a, b) => b - a)
      .map((mkVersion, i) => {
        return <option key={i}>{`Version ${mkVersion}`}</option>;
      });

    return (
      <div id="editor-panel" className="fadeInLeft">
        <EditorPanelHeader />
        <EditorArea />
      </div>
    );
  }
}

export default EditorPanel;
